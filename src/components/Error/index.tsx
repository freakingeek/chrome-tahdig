import styles from './Error.module.scss';
import Pure from '../../layouts/Pure';
import errorCircleImage from '/src/assets/images/error-circle.svg'

function Error() {
  return (
    <Pure>
      <div className={styles.ContentBox}>
        <div className={`${styles.IconBox} ${styles.ContentBox__IconBox}`}>
          <img src={errorCircleImage} alt="" className={styles.IconBox__Image} />
        </div>

        <h1 className={styles.ContentBox__Title}>ای‌ بابا!</h1>
        <span className={styles.ContentBox__Description}>متاسفانه رفتیم تو دیوار :(</span>

        <div className={`${styles.ButtonBox} ${styles.ContentBox__ButtonBox}`}>
          <a href="https://basalamiha.ir/" target="_blank" className={styles.ButtonBox__Button}>
            تلاش مجدد
          </a>
        </div>
      </div>
    </Pure>
  );
}

export default Error;
