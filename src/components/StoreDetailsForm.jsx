import styles from './StoreDetailsForm.module.css';

export default function StoreDetailsForm() {
    return (
      <div className={styles.formBox}>
        <h2 className={styles.title}>1. Store details</h2>
        <input className={styles.input} placeholder="Enter name of your store" />
        <input className={styles.input} placeholder="ex.spirithero.com/abc-spirit-wear-store" />
        <div className={styles.row}>
          <input className={`${styles.input} ${styles.inputHalf}`} placeholder="ex.spirithero.com/abc-spirit-wear-store" />
          <input className={`${styles.input} ${styles.inputHalf}`} placeholder="https://x.com" />
        </div>
      </div>
    );
  }