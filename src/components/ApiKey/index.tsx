import { SET_LUNCH, SET_STATUS } from '../../context/global/global.actions';
import { GlobalContext } from '../../context/global';
import lockImage from '/src/assets/images/lock.svg';
import { UserStatus } from '../../enums/UserStatus';
import { useState, useContext, useEffect } from 'react';
import styles from './ApiKey.module.scss';
import Pure from '../../layouts/Pure';
import axios, { AxiosError } from 'axios';
import { clearUserCredentials, setUserCredentials } from '../../helpers/credentials';

function ApiKey() {
  const [credentials, setCredentials] = useState('');
  const [state, dispatch] = useContext(GlobalContext);

  useEffect(() => {
    if (state.status === UserStatus.Pending) {
      const lunch = localStorage.getItem('lunch') || '{}'
      const parsedLunch = JSON.parse(lunch);
      
      const currentDay = new Date().getDate()

      if (parsedLunch?.date == currentDay && parsedLunch?.food) {
        dispatch(SET_LUNCH(parsedLunch));
        dispatch(SET_STATUS(UserStatus.HasFood));
      } else {
        localStorage.removeItem('lunch')
        requestUserLunch(state.credentials);
      }

    }
  }, []);

  function inputOnChange(e: React.FormEvent<HTMLInputElement>) {
    setCredentials(e.currentTarget.value);
  }

  async function requestUserLunch(key: string) {
    dispatch(SET_STATUS(UserStatus.Loading));

    try {
      const res = await axios.get('https://basalamiha.ir/api/v1/lunch/today', {
        headers: { Authorization: `Bearer ${key}` },
      });

      if (!res.data) throw new Error('Lunch not found!');

      if (res.data.food) {
        dispatch(SET_LUNCH(res.data));
        dispatch(SET_STATUS(UserStatus.HasFood));

        localStorage.setItem('lunch', JSON.stringify({ ...res.data, date: new Date().getDate() }));
      } else {
        dispatch(SET_STATUS(UserStatus.NoFood));
      }
      return res;
    } catch (error) {
      if ((error as AxiosError)?.response?.status === 401) {
        clearUserCredentials()
      }

      dispatch(SET_STATUS(UserStatus.Error));
    }
  }

  async function onUserLogin() {
    requestUserLunch(credentials);
    setUserCredentials(credentials);
  }

  return (
    <Pure>
      <div className={styles.ContentBox}>
        <div className={`${styles.IconBox} ${styles.ContentBox__IconBox}`}>
          <img src={lockImage} alt="" className={styles.IconBox__Image} />
        </div>

        <h1 className={styles.ContentBox__Title}>ورود به حساب کاربری</h1>
        <span className={styles.ContentBox__Description}>
          لطفا
          <a href="https://basalamiha.ir/setting/tokens" target="_blank" className={styles.ContentBox__Link}>
            کلید API
          </a>
          تهدیگ خود را وارد کنید.
        </span>

        <footer className={`${styles.Footer} ${styles.ContentBox__Footer}`}>
          <input type="text" placeholder="کلید API شما" onChange={inputOnChange} className={styles.Footer__Input} />

          <button onClick={onUserLogin} className={styles.Footer__Button}>
            ورود
          </button>
        </footer>
      </div>
    </Pure>
  );
}

export default ApiKey;
