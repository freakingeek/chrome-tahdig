import styles from './App.module.scss';

// Components
import Error from '../components/Error';
import ApiKey from '../components/ApiKey';
import NoFood from '../components/NoFood';
import HasFood from '../components/HasFood';

// Others
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [status, setStatus] = useState(0);

  async function requestUserLunch(key: string) {
    try {
      const res = await axios.get('https://basalamiha.ir/api/v1/lunch/today', {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });

      setStatus(200);
      return res;
    } catch (error) {
      setStatus(401);
      console.error('[ApiKey/sendApiToTheServer]', error);
    }
  }

  function DC() {
    switch (status) {
      case 0:
        return <ApiKey requestUserLunch={requestUserLunch} />;
      case 200:
        return <HasFood />;
      case 401:
        return <Error />;
      default:
        return <ApiKey requestUserLunch={requestUserLunch} />;
    }
  }

  return (
    <main className={styles.Tahdig}>
      <DC />
    </main>
  );
}

export default App;
