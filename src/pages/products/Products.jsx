import {useState} from 'react';
import './ProductsStyles.css';
import ButtonClose from './ButtonClose';
import Tabs from './Tabs';
import ActionsProducts from './ActionsProducts'
import CustomSelect from './select/CustomSelect'
import ProductCard from "./card/ProductСard";
import SalePriceInfo from './sale-price-info/SalePriceInfo';
import Pagination from "./pagination/Pagination";

function Products() {
    const [selectedIds, setSelectedIds] = useState([]);
    const [activeTab, setActiveTab] = useState('catalog');
    const [page, setPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);

    const productGroup = [
        { name: "Standard Collection", count: 68 , icon: true},
        { name: "Heаdweаr", count: 56 , icon: false },
        { name: "Grаduаtion Аppаrаel", count: 48 , icon: false },
        { name: "Yаrd Signes", count: 0 , icon: false },
        { name: "Green", count: 123 , icon: false },
        { name: "Green", count: 123 , icon: false },
        { name: "Green", count: 123 , icon: false },
    ];

    const categories = [
        { name: "T-Shirts", count: 123 , icon: false },
        { name: "Long Sleeve", count: 123 , icon: false },
        { name: "Heаdweаr", count: 123 , icon: false },
        { name: "Yаrd Signes", count: 0 , icon: false },
        { name: "Wаter Bottle", count: 123 , icon: false },
    ];

    const brand = [
        { name: "Gildаn", count: 123 , icon: false },
        { name: "District", count: 123 , icon: false },
        { name: "Port аnd Co", count: 123 , icon: false },
        { name: "Bellа & Саnvаs", count: 123 , icon: false }
    ];

    const colorsData = [
        { name: "Green", count: 123 , icon: false },
        { name: "Blue", count: 123 , icon: false },
        { name: "Black", count: 123 , icon: false },
        { name: "White", count: 123 , icon: false },
    ];

    const gender = [
        { name: "Youth", count: 123 , icon: false },
        { name: "Women", count: 123 , icon: false },
        { name: "Men", count: 123 , icon: false },
    ];

    const products = [
        {
            id: 1,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/img-blouse.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 2,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/img-blouse-woman.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 3,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/green-blouse.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 4,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/T-shirt.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 5,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/cap.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 6,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/img-blouse.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 7,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/img-blouse-woman.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 8,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/green-blouse.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 9,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/T-shirt.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 10,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/cap.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 11,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/img-blouse.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 12,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/img-blouse-woman.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 13,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/green-blouse.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 14,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/T-shirt.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 15,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/cap.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 16,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/img-blouse.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 17,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/img-blouse-woman.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 18,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/green-blouse.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 19,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/T-shirt.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 20,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/cap.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
    ];

    const myProducts = [
        {
            id: 1,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/img-blouse.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 2,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/img-blouse-woman.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 3,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/green-blouse.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 4,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/T-shirt.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        },
        {
            id: 5,
            name: "Next level Women's Boyfriend Tee",
            price: 43,
            image: "./src/assets/cap.png",
            colors: ["#9bc53d", "#e55934", "#f1c40f", "#00a6fb", "#222", "#999"],
        }
    ];

    const toggleSelect = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    const getProductsToDisplay = () => {
        return activeTab === 'store' ? myProducts : products;
    };

    return (
        <div style={{position: 'relative'}}>
            <div className='block-products'>
                {/*<ButtonClose />*/}
                <SalePriceInfo />
                <h1>Select your Products</h1>
                <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            <ActionsProducts activeTab={activeTab} />

            <button
                className="burger-button"
                onClick={() => setShowFilters((prev) => !prev)}
            >
                {showFilters ? '✕' : '☰'}
            </button>

            <div className="block-filters-and-products">
                <div className={`block-custom-select ${showFilters ? 'show' : ''}`}>
                    <CustomSelect data={productGroup} title={'Product Group'} iconTitle={true}/>
                    <CustomSelect data={categories} title={'Categories'} iconTitle={false}/>
                    <CustomSelect data={brand} title={'Brand'} iconTitle={true}/>
                    <CustomSelect data={colorsData} title={'color'} iconTitle={true}/>
                    <CustomSelect data={gender} title={'Gender'} iconTitle={true}/>
                </div>

                <div className="block-cards-products">
                    <div className="block-card-pagination">
                        {getProductsToDisplay().map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                isChecked={selectedIds.includes(product.id)}
                                onToggle={toggleSelect}
                                activeTab={activeTab}
                            />
                        ))}
                    </div>
                    <div className="block-pagination">
                        {activeTab !== 'store' && <Pagination currentPage={page} totalPages={9} onPageChange={setPage} activeTab={activeTab} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
