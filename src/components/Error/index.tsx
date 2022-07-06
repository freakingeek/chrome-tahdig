import styles from './Error.module.scss';
import Pure from '../../layouts/Pure';
import { GlobalContext } from '../../context/global';
import { SET_STATUS } from '../../context/global/global.actions';
import errorCircleImage from '/src/assets/images/error-circle.svg';
import { useContext } from 'react';
import { UserStatus } from '../../enums/UserStatus';
import { getUserCredentials } from '../../helpers/credentials';

function Error() {
  const [, dispatch] = useContext(GlobalContext);

  function retry() {
    const status = getUserCredentials() ? UserStatus.Pending : UserStatus.NotLogin

    dispatch(SET_STATUS(status));
  }

  return (
    <Pure>
      <div className={styles.ContentBox}>
        <div className={`${styles.IconBox} ${styles.ContentBox__IconBox}`}>
          <img src={errorCircleImage} alt="" className={styles.IconBox__Image} />
        </div>

        <h1 className={styles.ContentBox__Title}>ای‌ بابا!</h1>
        <span className={styles.ContentBox__Description}>متاسفانه رفتیم تو دیوار :(</span>

        <div className={`${styles.ButtonBox} ${styles.ContentBox__ButtonBox}`}>
          <button onClick={retry} className={styles.ButtonBox__Button}>
            تلاش مجدد
          </button>
        </div>
      </div>
    </Pure>
  );
}

export default Error;
