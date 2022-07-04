import styles from './HasFood.module.scss';
import Default from '../../layouts/Default';

function HasFood() {
  return (
    <Default>
      <div className={styles.ContentBox}>
        <div className={styles.TodayLunch}>
          <span className={styles.TodayLunch__LunchHint}>غذای امروز:</span>
          <span className={styles.TodayLunch__Lunch}>قرمه‌سبزی دست‌پخت مادر!</span>
          <span className={styles.TodayLunch__ResturantHint}>رستوران:</span>
          <span className={styles.TodayLunch__Resturant}>کلافلی خیلی خیلی بی‌اعصاب!</span>
        </div>

        <div className={styles.ButtonBox}>
          <a href="https://basalamiha.ir/" target="_blank" className={styles.ButtonBox__Button}>
            رزرو غذا
          </a>
        </div>
      </div>
    </Default>
  );
}

export default HasFood;
