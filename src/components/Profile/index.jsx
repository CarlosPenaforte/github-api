import useGithub from '../../hooks/GithubHooks';
import * as S from './styled';

function Profile() {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage src={githubState.user.avatar_url} alt="User face" />
      <S.WrapperInfosUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUsername>
            <h3>Username: </h3>
            <a
              rel="noreferrer"
              href={githubState.user.html_url}
              target="_blank"
            >
              {githubState.user.login}
            </a>
          </S.WrapperUsername>
          <S.WrapperOtherInfo>
            <h3>Company:</h3>
            <span>{githubState.user.company}</span>
          </S.WrapperOtherInfo>
          <S.WrapperOtherInfo>
            <h3>Blog:</h3>
            <a
              rel="noreferrer"
              href={githubState.user.blog}
              target="_blank"
            >
              {githubState.user.blog}
            </a>
          </S.WrapperOtherInfo>
          <S.WrapperOtherInfo>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </S.WrapperOtherInfo>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Public Repo</h4>
            <span>{githubState.user.public_repos}</span>
          </div>
          <div>
            <h4>Public Gists</h4>
            <span>{githubState.user.public_gists}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfosUser>
    </S.Wrapper>
  );
}

export default Profile;
