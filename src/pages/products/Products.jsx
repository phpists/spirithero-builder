import { useState } from 'react';
import './ProductsStyles.css';

function Products() {
    const [activeTab, setActiveTab] = useState('store'); // або 'catalog'

    return (
        <div className='block-products'>
            <h1>Select your Products</h1>
            <div className='block-tabs'>
                <div
                    className={`tab-store tab ${activeTab === 'store' ? 'active' : ''}`}
                    onClick={() => setActiveTab('store')}
                >
                    <svg viewBox="0 0 24 24" className="check-icon">
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                    My store
                    <span>4</span>
                </div>

                <div
                    className={`tab-catalog tab ${activeTab === 'catalog' ? 'active' : ''}`}
                    onClick={() => setActiveTab('catalog')}
                >
                    <svg viewBox="0 0 24 24" className="check-icon">
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                    Product catalog
                    <span>125</span>
                </div>
            </div>
        </div>
    );
}

export default Products;
