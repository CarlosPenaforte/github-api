import * as S from './styled';
import useGithub from '../../hooks/GithubHooks';
import { useState } from 'react';

function Header() {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = (e) => {
    if (!usernameForSearch) return;
    e.preventDefault();

    return getUser(usernameForSearch);
  };

  return (
    <S.Wrapper onSubmit={submitGetUser}>
      <input
        type="text"
        placeholder="Type the username to search..."
        onChange={(event) => setUsernameForSearch(event.target.value)}
      />
      <button type="submit">
        Search
      </button>
    </S.Wrapper>
  );
}

export default Header;
