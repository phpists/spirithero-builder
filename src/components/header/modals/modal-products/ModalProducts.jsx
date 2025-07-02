import './ModalProducts.css';;
import ButtonClose from '../icons/ButtonClose';
import IconClose from '../icons/IconClose';
import IconComplete from '../icons/IconComplete';

function ModalProducts({handleModalView}) {
    return (
        <div className="block-modal">
            <h1>Maybe you would like to start flash sale?</h1>
            <ButtonClose handleModalView={handleModalView}/>
            <p>
                Flash Sales are a great way to promote certain items in your store. Just keep in mind <br/>
                there is a minimum requirement for each flash sale.
            </p>
            <div className="block-ul-modal">
                <ul>
                    <span>Flash Sale Pro</span>
                    <li>
                        <IconComplete />
                        Free shipping in 1 location
                    </li>
                    <li>
                        <IconComplete />
                        Lower Price
                    </li>
                </ul>

                <ul>
                    <span>Flash Sale Pro</span>
                    <li>
                        <IconClose />
                        Minimums
                    </li>
                    <li>
                        <IconClose />
                        Could get stuck with an invoice
                    </li>
                    <li>
                        <IconClose />
                        Limited Group Order
                    </li>
                </ul>
            </div>
            <h3>Required Minimum: 36 items mix/match</h3>
            <a href="#">View minimum guide here</a>

            <label key={name} className="flex justify-between items-center cursor-pointer block-modal-agree">
                <input
                    type="checkbox"
                    className="input-modal-agree"
                />
                I agree with the minimum order requirements for each product group
            </label>

            <div className="modal-buttons">
                <button className="button-show">
                    Not, sure show  me the pricing
                </button>
                <div className="block-buttons-button-later-button-start">
                    <button className="button-later">
                        Maybe Later
                    </button>
                    <button className="button-start">
                        Yes, Start Flash Sale
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalProducts;
