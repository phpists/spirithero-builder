import styles from './MainBanner.module.css';

export default function MainBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.title}>ADD YOUR OWN CUSTOM BACKGROUND</div>
        <div className={styles.logoCircle}>
          <span className={styles.logoText}>Your logo</span>
        </div>
      </div>
    </div>
  );
}