import styles from './App.module.scss';

// Components
import Splash from '../views/Splash';
import Error from '../components/Error';
import ApiKey from '../components/ApiKey';
import NoFood from '../components/NoFood';
import HasFood from '../components/HasFood';

// Others
import { useContext, useEffect } from 'react';
import { UserStatus } from '../enums/UserStatus';
import { GlobalContext } from '../context/global';

function App() {
  const [state] = useContext(GlobalContext);

  useEffect(() => {
    DC();
  }, [state]);

  function DC() {
    switch (state.status) {
      case UserStatus.NotLogin:
        return <ApiKey />;
      case UserStatus.Pending:
        return <ApiKey />
      case UserStatus.Loading:
        return <Splash />;
      case UserStatus.HasFood:
        return <HasFood />;
      case UserStatus.NoFood:
        return <NoFood />;
      case UserStatus.Error:
        return <Error />;
      default:
        return <></>;
    }
  }

  return (
    <main className={styles.Tahdig}>
      <DC />
    </main>
  );
}

export default App;
