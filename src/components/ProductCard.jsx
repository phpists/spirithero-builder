import styles from './ProductCard.module.css';

export default function ProductCard({ product, onSelect }) {
  return (
    <div className={`${styles.card} ${product.selected ? styles.selected : ''}`}> 
      <div className={styles.topRow}>
        <input
          type="checkbox"
          checked={product.selected}
          onChange={onSelect}
        />
        <span className={styles.title}>{product.name}</span>
        <button className={styles.removeBtn}>×</button>
      </div>
      <img src={product.image} alt={product.name} className={styles.image} />
      <div className={styles.colors}>
        {product.colors.map(color => (
          <span
            key={color}
            className={styles.colorDot}
            style={{ background: color, border: color === product.selectedColor ? '2px solid #6c2eb7' : '2px solid #fff' }}
          />
        ))}
      </div>
      <div className={styles.price}>${product.price.toFixed(2)}</div>
    </div>
  );
} 