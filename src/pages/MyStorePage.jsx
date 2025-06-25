import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductFilterSidebar from '../components/ProductFilterSidebar';
import styles from './MyStorePage.module.css';

const initialProducts = [
  {
    id: 1,
    name: "Next level Women's Boyfriends Tee",
    price: 43,
    image: '/products/tee1.png',
    colors: ['#e5e532', '#f7c948', '#fbbf24', '#f87171', '#60a5fa'],
    selectedColor: '#e5e532',
    selected: true,
  },
  {
    id: 2,
    name: "Next level Women's Boyfriends Tee",
    price: 43,
    image: '/products/tee2.png',
    colors: ['#e5e532', '#f7c948', '#fbbf24', '#f87171', '#60a5fa'],
    selectedColor: '#f7c948',
    selected: false,
  },
  {
    id: 3,
    name: "Next level Women's Boyfriends Tee",
    price: 43,
    image: '/products/tee3.png',
    colors: ['#e5e532', '#f7c948', '#fbbf24', '#f87171', '#60a5fa'],
    selectedColor: '#fbbf24',
    selected: false,
  },
  {
    id: 4,
    name: "Next level Women's Boyfriends Tee",
    price: 43,
    image: '/products/tee4.png',
    colors: ['#e5e532', '#f7c948', '#fbbf24', '#f87171', '#60a5fa'],
    selectedColor: '#e5e532',
    selected: false,
  },
  {
    id: 5,
    name: "Next level Women's Boyfriends Tee",
    price: 43,
    image: '/products/tee5.png',
    colors: ['#e5e532', '#f7c948', '#fbbf24', '#f87171', '#60a5fa'],
    selectedColor: '#e5e532',
    selected: false,
  },
];

export default function MyStorePage() {
  const [products, setProducts] = useState(initialProducts);

  const handleSelect = (id) => {
    setProducts(products =>
      products.map(p =>
        p.id === id ? { ...p, selected: !p.selected } : p
      )
    );
  };

  return (
    <div className={styles.wrapper}>
      <ProductFilterSidebar />
      <main className={styles.main}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>SELECT YOUR PRODUCTS</h1>
        </div>
        <div className={styles.productsRow}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={() => handleSelect(product.id)}
            />
          ))}
        </div>
      </main>
    </div>
  );
} 