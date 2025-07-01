import {useState} from 'react';
import './CardFundraisingStyles.css';

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

function CardFundraising() {
    const [products, setProducts] = useState(initialProducts);
    const [inputValue, setInputValue] = useState("1");

    return products.map((product, index) => (
        <div key={index} className="card-fundraising">
            <label className="card-custom-checkbox">
                <input type="checkbox" />
                <span className="card-check-mark"></span>
            </label>
            <img src={product.image} alt={product.name} />
            <div className="card-title-colors">
                <h2>{product.name}</h2>
                <div className="card-dots-fundraising">
                    {product.colors.map((color, i) => (
                        <span
                            key={i}
                            className="dot-сard"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </div>
            <div className="block-cost">
                $ 18.43
            </div>
            <div>
                <input className="input-profit" type="text"/>
            </div>
            <div className="block-price">
                $ 19.43
            </div>
            <div className='block-sell-cost'>
                Sell at cost
            </div>
            <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z" stroke="#4E008E" strokeWidth="1.5" strokeMiterlimit="10"/>
                    <path d="M12 6.75C13.2426 6.75 14.25 5.74264 14.25 4.5C14.25 3.25736 13.2426 2.25 12 2.25C10.7574 2.25 9.75 3.25736 9.75 4.5C9.75 5.74264 10.7574 6.75 12 6.75Z" stroke="#4E008E" strokeWidth="1.5" strokeMiterlimit="10"/>
                    <path d="M12 21.75C13.2426 21.75 14.25 20.7426 14.25 19.5C14.25 18.2574 13.2426 17.25 12 17.25C10.7574 17.25 9.75 18.2574 9.75 19.5C9.75 20.7426 10.7574 21.75 12 21.75Z" stroke="#4E008E" strokeWidth="1.5" strokeMiterlimit="10"/>
                </svg>
            </div>
        </div>
    ))
}

export default CardFundraising;