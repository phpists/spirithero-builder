import styles from './ColorSelector.module.css';

const COLORS = [
    { name: 'Green', color: '#34d399' },
    { name: 'Black', color: '#222' },
    { name: 'White', color: '#fff', border: '#e5e7eb' },
    { name: 'Light Blue', color: '#bae6fd' },
    { name: 'Grey', color: '#d1d5db' },
    { name: 'Rose', color: '#fb7185' },
    { name: 'Deep Blue', color: '#1e3a8a' },
    { name: 'Red', color: '#ef4444' },
    { name: 'Yellow', color: '#fde047' },
    { name: 'Purple', color: '#7c3aed' },
  ];
  
  export default function ColorSelector() {
    return (
      <div className={styles.colorBox}>
        <h2 className={styles.title}>2. Choose primary colors (multiple choice is available)</h2>
        <p className={styles.desc}>
          Choose colors for the products you will sell in your store. Be sure to select colors that will look good with your logo on them.<br />
          Our system automatically selects products & colorizes design templates based on your store colors.
        </p>
        <div className={styles.colorsGrid}>
          {COLORS.map((c) => (
            <label key={c.name} className={styles.colorLabel}>
              <input type="checkbox" className={styles.checkbox} />
              <span
                className={styles.circle}
                style={{ background: c.color, borderColor: c.border || c.color }}
              />
              <span className={styles.colorName}>{c.name}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }