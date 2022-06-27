import * as S from './styled';
import Header from '../Header';

function Layout({ children }) {

  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  )
}

export default Layout
