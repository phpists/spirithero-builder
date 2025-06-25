import './ProductsStyles.css';

function Products() {
    return (
        <div className='block-products'>
            <h1>Select your Products</h1>
            <div className='block-tabs'>
                <div className="tab-store">
                    <svg viewBox="0 0 24 24" className="check-icon">
                        <path d="M5 13l4 4L19 7"/>
                    </svg>
                    My store
                    <span>4</span>
                </div>

                <div className="tab-catalog">
                    <svg viewBox="0 0 24 24" className="check-icon">
                        <path d="M5 13l4 4L19 7"/>
                    </svg>
                    My store
                    <span>125</span>
                </div>
            </div>
        </div>
    );
}

export default Products;
