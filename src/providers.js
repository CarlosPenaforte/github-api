import { ResetCSS } from './global/resetCSS';
import GithubProvider from './providers/GithubProvider';


function Providers({children}) {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        {children}
      </GithubProvider>
    </main>
  )
}

export default Providers