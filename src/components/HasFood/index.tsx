import styles from './HasFood.module.scss';
import Default from '../../layouts/Default';
import { useContext } from 'react';
import { GlobalContext } from '../../context/global';


function HasFood() {
  const [state] = useContext(GlobalContext)

  return (
    <Default>
      <div className={styles.ContentBox}>
        <div className={styles.TodayLunch}>
          <span className={styles.TodayLunch__LunchHint}>غذای امروز:</span>
          <span className={styles.TodayLunch__Lunch}>{state.lunch.food}</span>
          <span className={styles.TodayLunch__RestaurantHint}>رستوران:</span>
          <span className={styles.TodayLunch__Restaurant}>{state.lunch.restaurant}</span>
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
