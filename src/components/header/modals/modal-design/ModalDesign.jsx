import IconI from '../../../icons/IconI';
import Button from '../../../ButtonClose';
import './ModalDesignStyles.css';

function ModalDesign({handleModalView}) {
    return (
        <div className="modal-design">
            <Button handleModalView={handleModalView} />
            <h1>
                Great! You have added flash sale collections to your <br/>store!<br/>
                Please select collection do you want to run a flash sale?
            </h1>
            <p>
                <label className="modal-custom-checkbox">
                    <input type="checkbox" />
                    <span className="modal-check-mark"></span>
                </label>
                Standard Collection (36-piece minimum)
                <span>
                    <IconI />
                </span>
            </p>
            <p>
                <label className="modal-custom-checkbox">
                    <input type="checkbox" />
                    <span className="modal-check-mark"></span>
                </label>
                Pants/Bottoms (36-piece minimum)
                <span>
                    <IconI />
                </span>
            </p>

            <div className="modal-design-info-text">
                <div style={{margin: '0 0 10px 0'}}>
                    <p>If the minimums aren't met, you can either:</p>
                </div>
                <div style={{margin: '10px 0'}}>
                    <p>1. Extend the store to sell more items.</p>
                    <p>2. Purchase the remaining items to meet the minimum for each group.</p>
                </div>
                <p>Orders will not be canceled or refunded.</p>
                <p>Flash sale pricing is based on the # of ink colors.</p>
                <p>$1 will be added for each additional ink color</p>
            </div>

            <p style={{textTransform: 'unset', margin: '10px 0 10px -12px'}}>Required Minimum: 36 items mix/match</p>
            <div className="modal-path">
                <a href="#">View minimum guide here</a>
            </div>
            <p className="modal-design-block-agree">
                <label className="modal-custom-checkbox">
                    <input type="checkbox" />
                    <span className="modal-check-mark"></span>
                </label>
                I agree with the minimum order requirements for each product group
            </p>
            <div className="moodal-design-buttons">
                <button className="modal-design-button-back">Back</button>
                <button className="modal-design-button-confirm">Yes, Confirm</button>
            </div>
        </div>
    )
}

export default ModalDesign;