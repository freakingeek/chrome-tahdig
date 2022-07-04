import styles from './NoFood.module.scss';
import Default from '../../layouts/Default';
import sadFaceImage from '/src/assets/images/sad-face.svg';

function HasFood() {
  return (
    <Default>
      <div className={styles.ContentBox}>
        <div className={`${styles.IconBox} ${styles.ContentBox__IconBox}`}>
          <img src={sadFaceImage} alt="" className={styles.IconBox__Image} />
        </div>

        <h1 className={styles.ContentBox__Title}>خبر بد!</h1>
        <span className={styles.ContentBox__Description}>متاسفانه امروز از غذا خبری نیست :(</span>

        <div className={`${styles.ButtonBox} ${styles.ContentBox__ButtonBox}`}>
          <a href="https://basalamiha.ir/" target="_blank" className={styles.ButtonBox__Button}>
            رزرو غذا
          </a>
        </div>
      </div>
    </Default>
  );
}

export default HasFood;
