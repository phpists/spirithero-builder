import React, { useState } from 'react';
import './ProductPreview.css';
import ModalColors from './modal-colors/ModalColors';

const initialProducts = [
    {
        name: 'Short Sleeves',
        image: 'src/assets/img-blouse.png',
        colors: ['#D19C00', '#D1D1D1', '#14142B'],
        selected: true,
        completeIcon: true
    },
    {
        name: 'T-shirt',
        image: 'src/assets/T-shirt.png',
        colors: ['#D19C00', '#D1D1D1', '#14142B'],
        selected: true,
        completeIcon: false
    },
    {
        name: 'T-shirt',
        image: 'src/assets/green-blouse.png',
        colors: ['#D19C00', '#D1D1D1', '#14142B'],
        selected: true,
        completeIcon: false
    }
];

const initialProduct = [
    {
        name: 'Short Sleeves',
        image: 'src/assets/img-blouse.png',
        colors: ['#D19C00', '#D1D1D1', '#14142B'],
        selected: true,
        completeIcon: false
    }
];

const ProductCard = ({ product, onDelete }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleModalVisible = () => setModalVisible(!modalVisible);

    return (
        <div className="product-card-preview">
            {product.completeIcon && (
                <div className="icon-complete-design">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_4599_10013)">
                            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" fill="#FBB041" />
                            <path d="M11 17L14 20L21 13" stroke="#4E008E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_4599_10013">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            )}
            <img src={product.image} alt={product.name} />
            <div className="block-title-colors">
                <h2>{product.name}</h2>
                <div className="color-dots-design">
                    {product.colors.map((color, i) => (
                        <span
                            key={i}
                            className="dot-design"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </div>
            <div
                className="design-close-button"
                onClick={onDelete}
                style={{ cursor: 'pointer' }}
                title="Delete product"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="#14142B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M6 6L18 18" stroke="#14142B" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
            <div className="block-button-add-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#4E008E" strokeWidth="1.5" />
                    <path d="M5.5 8H10.5" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 5.5V10.5" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="block-add-colors" onClick={handleModalVisible}>
                    <span style={{ backgroundColor: '#CCDE2F' }}></span>
                    <span style={{ backgroundColor: '#637FF1' }}></span>
                    <span style={{ backgroundColor: '#F71C1C' }}></span>
                    <span style={{ backgroundColor: '#B1B1B1' }}></span>
                </div>
            </div>
            {modalVisible && <ModalColors handleModalVisible={handleModalVisible} />}
        </div>
    );
};

const GroupHeader = ({ title, subtitle, isOpen, toggle }) => (
    <div className="product-info" onClick={toggle} style={{ cursor: 'pointer' }}>
        <svg
            style={{ transform: !isOpen ? 'rotate(180deg)' : 'none' }}
            width="24" height="24" viewBox="0 0 24 24" fill="none"
        >
            <path d="M8 14L12 10L16 14" stroke="#373239" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p>{title}</p>
        <span>{subtitle}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clipPath="url(#clip0)">
                <path d="M8 6H8.00667" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.33203 8H7.9987V10.6667H8.66536" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 2C12.8 2 14 3.2 14 8C14 12.8 12.8 14 8 14C3.2 14 2 12.8 2 8C2 3.2 3.2 2 8 2Z" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    </div>
);

function ProductPreview() {
    const [products, setProducts] = useState(initialProducts);
    const [product, setProduct] = useState(initialProduct);

    const [visibleGroup1, setVisibleGroup1] = useState(true);
    const [visibleGroup2, setVisibleGroup2] = useState(true);

    const deleteProductFromGroup1 = (index) => {
        setProducts(products.filter((_, i) => i !== index));
    };

    const deleteProductFromGroup2 = (index) => {
        setProduct(product.filter((_, i) => i !== index));
    };

    const renderGroup = (title, subtitle, products, isVisible, toggle, onDelete) => (
        <div>
            <GroupHeader title={title} subtitle={subtitle} isOpen={isVisible} toggle={toggle} />
            {isVisible && products.map((p, i) => (
                <ProductCard
                    key={i}
                    product={p}
                    onDelete={() => onDelete(i)}
                />
            ))}
        </div>
    );

    return (
        <div className="main-design-block">
            <div className="block-scroll">
                {renderGroup(
                    'Standard Collection Group',
                    'products preview:',
                    products,
                    visibleGroup1,
                    () => setVisibleGroup1(!visibleGroup1),
                    deleteProductFromGroup1
                )}
                {renderGroup(
                    'Headwear Collection Group',
                    'product preview:',
                    product,
                    visibleGroup2,
                    () => setVisibleGroup2(!visibleGroup2),
                    deleteProductFromGroup2
                )}
            </div>
            <div className="button-view-products">
                View all products
            </div>
        </div>
    );
}

export default ProductPreview;
