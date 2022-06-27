import RepositoryItem from '../RepositoryItem';
import * as S from './styled';
import useGithub from '../../hooks/GithubHooks';
import { useEffect, useState } from 'react';

function Repositories() {
  const { githubState, getRepos, getStarred } = useGithub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

  useEffect(() => {
    if (!!githubState.user.login) {
      getRepos(githubState.user.login);
      getStarred(githubState.user.login);
    }
    setHasUserForSearchRepos(!!githubState.repositories);
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchRepos ? (
        <>
          <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
          >
            <S.WrapperTabList>
              <S.WrapperTab>Repositories</S.WrapperTab>
              <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            <S.WrapperTabPanel>
              <S.WrapperList>
                {githubState.repositories.map((item) => (
                  <RepositoryItem
                    key={item.id}
                    name={item.name}
                    fullName={item.full_name}
                    linkToRepo={item.html_url}
                  />
                ))}
              </S.WrapperList>
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
              <S.WrapperList>
                {githubState.starred.map((item) => (
                  <RepositoryItem
                    key={item.id}
                    name={item.name}
                    fullName={item.full_name}
                    linkToRepo={item.html_url}
                  />
                ))}
              </S.WrapperList>
            </S.WrapperTabPanel>
          </S.WrapperTabs>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Repositories;
