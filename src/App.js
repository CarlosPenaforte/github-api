import Layout from './components/Layout';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import useGithub from './hooks/GithubHooks';
import NoSearch from './components/NoSearch';

function App() {
  const { githubState } = useGithub();

  return (
    <>
      <Layout>
        <>
          {githubState.hasUser ? (
            <>
              {githubState.loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <Profile />
                  <Repositories />
                </>
              )}
            </>
          ) : (
            <NoSearch />
          )}
        </>
      </Layout>
    </>
  );
}

export default App;
