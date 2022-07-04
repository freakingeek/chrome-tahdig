import styles from './Default.module.scss';
import placeholderImage from '/src/assets/images/placeholder.png';

interface DefaultPropTypes {
  image?: string;
  children: React.ReactNode;
}

function Default({ image = placeholderImage, children }: DefaultPropTypes) {
  return (
    <>
      <div className={styles.ImageBox}>
        <img src={image} alt="تهدیگ!" className={styles.ImageBox__Image} />
      </div>

      {children}
    </>
  );
}

export default Default;
