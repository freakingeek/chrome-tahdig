import styles from './Pure.module.scss';

interface PurePropTypes {
  className?: string;
  children: React.ReactNode;
}

function Pure({ className, children }: PurePropTypes) {
  return <div className={`${styles.Pure} ${className}`}>{children}</div>;
}

export default Pure;
