import * as S from './styled';

function RepositoryItem(props) {
  const { name, fullName, linkToRepo, key } = props;

  return (
    <S.Wrapper key={key}>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperInfo>
        <h4>full name:</h4>
        <a rel="noreferrer" href={linkToRepo} target="_blank">
          {fullName}
        </a>
      </S.WrapperInfo>
    </S.Wrapper>
  );
}

export default RepositoryItem;
