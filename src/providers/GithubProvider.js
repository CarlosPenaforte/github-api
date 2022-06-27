import { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const GithubContext = createContext({
  hasUser: false,
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

function GithubProvider({ children }) {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      name: undefined,
      login: undefined,
      avatar_url: undefined,
      html_url: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_repos: 0,
      public_gists: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    api
      .get(`${username}`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          user: {
            id: data.id,
            name: data.name,
            login: data.login,
            avatar_url: data.avatar_url,
            html_url: data.html_url,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_repos: data.public_repos,
            public_gists: data.public_gists,
          },
        }));
      })
      .finally(() =>
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          loading: false,
        }))
      );
  };

  const getRepos = (username) => {
    api.get(`${username}/repos`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };

  const getStarred = (username) => {
    api.get(`${username}/starred`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getRepos: useCallback((username) => getRepos(username), []),
    getStarred: useCallback((username) => getStarred(username), []),
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
}

export default GithubProvider;
