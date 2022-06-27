import { useContext } from "react";
import { GithubContext } from "../providers/GithubProvider";

const useGithub = () => {

  const { githubState, getUser, getRepos, getStarred } = useContext(GithubContext);

  return { githubState, getUser, getRepos, getStarred };
}

export default useGithub