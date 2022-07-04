import styles from './Pure.module.scss';

function Pure({ children }: React.PropsWithChildren) {
  return <div className={styles.Pure}>{children}</div>;
}

export default Pure;
