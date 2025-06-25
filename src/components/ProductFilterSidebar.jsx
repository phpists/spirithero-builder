import styles from './ProductFilterSidebar.module.css';

export default function ProductFilterSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>PRODUCT GROUP</div>
        <label><input type="checkbox" /> Standard Collection</label>
        <label><input type="checkbox" /> Headwear</label>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>CATEGORIES</div>
        <label><input type="checkbox" /> T-Shirts</label>
        <label><input type="checkbox" /> Long Sleeve</label>
        <label><input type="checkbox" /> Headwear</label>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>BRAND</div>
        <label><input type="checkbox" /> Gildan</label>
        <label><input type="checkbox" /> District</label>
        <label><input type="checkbox" /> Port and Co</label>
        <label><input type="checkbox" /> Bella & Canvas</label>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>COLOR</div>
        <label><input type="checkbox" /> Yellow</label>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>GENDER</div>
        <label><input type="checkbox" /> Youth</label>
        <label><input type="checkbox" /> Women</label>
        <label><input type="checkbox" /> Men</label>
      </div>
    </aside>
  );
} 