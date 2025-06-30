import {useState} from 'react';
import './ProductsStyles.css';
import ButtonClose from './ButtonClose';
import Tabs from './Tabs';
import ActionsProducts from './ActionsProducts'
import CustomSelect from './select/CustomSelect'
import ProductCard from "./card/ProductСard";
import SalePriceInfo from './sale-price-info/SalePriceInfo';
import HorizontalContainer from './HorizontalContainer'
import Pagination from "./pagination/Pagination";
import {productsData} from "../../data/dataProducts";

function Products() {
    const [selectedIds, setSelectedIds] = useState([]);
    const [activeTab, setActiveTab] = useState('catalog');
    const [page, setPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);

    const toggleSelect = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
        );
    };

    const getProductsToDisplay = () => {
        return activeTab === 'store' ? productsData.myProducts : productsData.products;
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
                    <CustomSelect data={productsData.productGroup} title={'Product Group'} iconTitle={true}/>
                    <CustomSelect data={productsData.categories} title={'Categories'} iconTitle={false}/>
                    <CustomSelect data={productsData.brand} title={'Brand'} iconTitle={true}/>
                    <CustomSelect data={productsData.colorsData} title={'color'} iconTitle={true}/>
                    <CustomSelect data={productsData.gender} title={'Gender'} iconTitle={true}/>
                </div>

                <div className="block-cards-products">
                    {activeTab === 'store' && <HorizontalContainer />}
                    <div className="block-card">
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
                    {activeTab === 'store' && <HorizontalContainer />}

                    <div className="block-pagination">
                        {activeTab !== 'store' && <Pagination currentPage={page} totalPages={9} onPageChange={setPage} activeTab={activeTab} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
