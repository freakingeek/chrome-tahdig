import styles from './ApiKey.module.scss';
import Pure from '../../layouts/Pure';
import lockImage from '/src/assets/images/lock.svg';
import { useState } from 'react';

function ApiKey() {
  const [apiKey, setApiKey] = useState('');

  function inputOnChange(e: React.FormEvent<HTMLInputElement>) {
    setApiKey(e.currentTarget.value);
  }

  function saveApiKey() {
    localStorage.setItem('tahdig-api-key', apiKey);

    if (typeof chrome !== undefined) {
      chrome?.storage?.local?.set({ tahdig: apiKey });

      // console.log('chrome', chrome.storage.local.get(['tahdig']));
    }
  }

  function handleApiKey() {
    saveApiKey();

    console.log('local', localStorage.getItem('tahdig-api-key'));
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

          <button onClick={handleApiKey} className={styles.Footer__Button}>
            ورود
          </button>
        </footer>
      </div>
    </Pure>
  );
}

export default ApiKey;
