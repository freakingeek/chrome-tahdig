import styles from './App.module.scss';

// Components
import Error from '../components/Error';
import ApiKey from '../components/ApiKey';
import NoFood from '../components/NoFood';
import HasFood from '../components/HasFood';

// Others
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import { LunchContext, LunchProvider } from '../context/lunch';

function checkUserCredentioal() {
  const USER_API_TOKEN = '';

  return !!USER_API_TOKEN;
}

function App() {
  const [status, setStatus] = useState(0);
  const [lunch, reducer] = useContext(LunchContext);

  // useEffect(() => {
  //   async function requestUserLunch(key: string) {
  //     try {
  //       const res = await axios.get('https://basalamiha.ir/api/v1/lunch/today', {
  //         headers: {
  //           Authorization: `Bearer ${key}`,
  //         },
  //       });
  
  //       return res;
  //     } catch (error) {
  //       console.error('[ApiKey/sendApiToTheServer]', error);
  //     }
  //   }
    
  //   requestUserLunch('');
  // }, []);


  function RealDC() {
    if (!checkUserCredentioal()) {
      return <ApiKey />;
    }

    return <ApiKey />;
  }

  return (
    <LunchProvider>
      <main className={styles.Tahdig}>
        <RealDC />
      </main>
    </LunchProvider>
  );
}

export default App;
