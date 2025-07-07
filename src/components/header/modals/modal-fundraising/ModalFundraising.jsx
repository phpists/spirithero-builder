import React, {useState} from "react";
import './ModalFundraisingStyles.css';
import ButtonClose from '../icons/ButtonClose';
import IconI from './IconI';
import IconLogo from './IconLogo';

function ModalFundraising({handleModalView}) {
    const [selected, setSelected] = useState("option1");
    const [selectClick, setSelectClick] = useState(false);

    const options = [
        {value: "option1" , content: 'ACH'},
        {value: "option2" , content: 'Check'}
    ];

    const optionsSelect = [
        {value: '1', label: 'All'},
        {value: '2', label: '2'},
        {value: '3', label: '3'},
    ];


    return (
        <div className="modal-fundraising" style={{
            top: selected == 'option1' ? 'calc(50vh - 325px)' : '0'
        }}>
            <IconLogo />
            <div className="block-close-modal-fundraising">
                <ButtonClose handleModalView={handleModalView} />
            </div>
            <h1>How would you like to receive your funds?</h1>

            <div className="scroll-modal-fundraising" style={{
                height: selected == 'option1' ? 'fit-content' : '400px'
            }}>
                <div className="radio-group">
                    {options.map((opt) => (
                        <div>
                            <label key={opt.value} className="radio-label">
                                <input
                                    type="radio"
                                    name="custom-radio"
                                    value={opt.value}
                                    checked={selected === opt.value}
                                    onChange={() => setSelected(opt.value)}
                                    className="radio-input"
                                />
                                <span className="custom-radio">
                           {selected === opt.value && <span className="radio-dot"/>}
                        </span>
                                {opt.content}
                                <span className="block-icon-i">
                                {opt.content === 'ACH' && <IconI />}
                            </span>
                            </label>
                        </div>
                    ))}
                </div>

                {selected === 'option1' ?
                    <div className="block-option1">
                        <div className="inputs-bank-routing">
                            <label htmlFor="bank">
                                Bank name
                                <input id="bank" type="text" placeholder="Enter bank name"/>
                            </label>

                            <label htmlFor="routing">
                                Routing number
                                <input id="routing" type="text" placeholder="Enter routing number"/>
                            </label>
                        </div>

                        <label className="account-block-input" htmlFor="account">
                            Account number
                            <input id="account" type="text" placeholder="Enter account number" />
                        </label>
                    </div>
                    :
                    <div className="block-option2">
                        <label className="label-payee" htmlFor="payee">
                            Check payable to
                            <input id="payee" type="text" placeholder="Payee name" />
                        </label>
                        <h3 style={{textAlign: 'left'}}>Mailing Address:</h3>

                        <div className="block-name-surname">
                            <label htmlFor="name">
                                First name
                                <input id="name" type="text" placeholder="Name"/>
                            </label>
                            <label htmlFor="surname">
                                Last name
                                <input id="surname" type="text" placeholder="Last Name"/>
                            </label>
                        </div>
                        <label style={{margin: 0}} className="school-organization" htmlFor="school-organization">
                            School/Organization Name
                            <input id="school-organization" type="text" placeholder="School or Organization Name"/>
                        </label>
                        <div className="block-address">
                            <label htmlFor="address1">
                                Address 1
                                <input id="address1" type="text" placeholder="123 Example Street"/>
                            </label>
                            <label htmlFor="address2">
                                Address 2
                                <input id="address2" type="text" placeholder="123 Example Street"/>
                            </label>
                        </div>
                        <div className="block-city-state-zip">
                            <label htmlFor="city">
                                City
                                <input id="city" type="text" placeholder="City"/>
                            </label>
                            <div className="block-form-select">
                                State
                                <div
                                    className={`form-select ${selectClick ? 'open' : ''}`}
                                    onClick={() => setSelectClick(!selectClick)}
                                >
                                    <div className="form-selected-value">Select state</div>
                                    <div className="select-arrow"/>
                                    {selectClick && (
                                        <div className="form-custom-options">
                                            {optionsSelect.map((option, i) => (
                                                <div
                                                    key={option.value}
                                                    className={`form-custom-option ${selected === option.label ? 'active' : ''} ${
                                                        i === options.length - 1 ? 'last' : ''
                                                        }`}
                                                    onClick={() => {
                                                        setSelected(option.label);
                                                        setSelectClick(false);
                                                    }}
                                                >
                                                    {option.label}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <label htmlFor="zipcode">
                                Zip Code
                                <input id="zipcode" type="text" placeholder="Zip Code"/>
                            </label>
                        </div>
                    </div>
                }
            </div>
            <button>Confirm</button>
        </div>
    )
}

export default ModalFundraising;