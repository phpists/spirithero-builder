import {useState} from 'react';
import './FirstStepStyles.css';
import IconComplete from '../../IconComplete';
import IconMark from '../IconMark';

function FirstStep() {
    const [selectClick, setSelectClick] = useState(false);
    const [selected, setSelected] = useState('All');
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        {value: '1', label: 'All'},
        {value: '2', label: '2'},
        {value: '3', label: '3'},
    ];

    return (
        <div>
            <div className="block-form">
                <div className="header-form" onClick={() => setIsOpen(!isOpen)}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <span style={{display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: isOpen && '#FBB041'
                        }}>
                            {isOpen ? <IconMark /> : 1}
                        </span>
                        <p style={{fontWeight: '700' , margin: '0 0 0 7px'}}>How do you want your orders shipped?</p>
                    </div>
                    <div style={{transform: isOpen && 'rotate(-180deg)'}}>
                        <svg style={{cursor: 'pointer'}} width="40" height="40" viewBox="0 0 40 40" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M14.9982 16.9395L19.9982 21.9395L24.9982 16.9395L26.0588 18.0001L20.5285 23.5304C20.2356 23.8233 19.7607 23.8233 19.4678 23.5304L13.9375 18.0001L14.9982 16.9395Z"
                                  fill="#4E008E"/>
                        </svg>
                    </div>
                </div>

                {isOpen && <div>
                    <div className="block-form-buttons">
                        <div className="block-button-form">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M40 18.596C40 37.4186 29.3675 37.4186 18.9189 37.4186C8.47029 37.4186 0 28.9914 0 18.596C0 8.20053 8.47029 3 18.9189 3C29.3675 3 40 8.20053 40 18.596Z"
                                    fill="#FCFCFC"/>
                                <path d="M9.5 28.25H30.5" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M29 28.25V14.75H24.5V11.75H15.5V17.75H11V28.25" stroke="#4E008E"
                                      strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M19.25 14.75H20.75" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M19.25 17.75H20.75" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M24.5 17.75H26" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M14 20.75H15.5" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M14 23.75H15.5" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M19.25 20.75H20.75" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M24.5 20.75H26" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M24.5 23.75H26" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M18.5 28.25V23.75H21.5V28.25" stroke="#FBB041" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <div style={{marginLeft: '10px'}}>
                                <p className="button-title">1 Location</p>
                                <p>labeled/sorted/bagged Free Shipping</p>
                            </div>
                            <span>
                                <IconComplete/>
                            </span>
                        </div>
                        <div className="block-button-form">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M40 18.596C40 37.4186 29.3675 37.4186 18.9189 37.4186C8.47029 37.4186 0 28.9914 0 18.596C0 8.20053 8.47029 3 18.9189 3C29.3675 3 40 8.20053 40 18.596Z"
                                    fill="#F1EEF4"/>
                                <path
                                    d="M26 19.25C26.8734 19.2493 27.7349 19.4524 28.516 19.843C29.2972 20.2335 29.9765 20.8009 30.5 21.5"
                                    stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M9.5 21.5C10.0235 20.8009 10.7028 20.2335 11.484 19.843C12.2651 19.4524 13.1266 19.2493 14 19.25"
                                    stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M20 25.25C22.0711 25.25 23.75 23.5711 23.75 21.5C23.75 19.4289 22.0711 17.75 20 17.75C17.9289 17.75 16.25 19.4289 16.25 21.5C16.25 23.5711 17.9289 25.25 20 25.25Z"
                                    stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M14.75 28.25C15.2884 27.3364 16.0559 26.579 16.9767 26.0529C17.8974 25.5267 18.9395 25.25 20 25.25C21.0605 25.25 22.1026 25.5267 23.0233 26.0529C23.9441 26.579 24.7116 27.3364 25.25 28.25"
                                    stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M23.0938 15.5C23.234 14.9568 23.5238 14.4638 23.9302 14.077C24.3366 13.6902 24.8433 13.4251 25.3927 13.3118C25.9422 13.1985 26.5125 13.2416 27.0387 13.4361C27.5649 13.6306 28.0261 13.9688 28.3697 14.4123C28.7134 14.8557 28.9258 15.3867 28.9829 15.9448C29.04 16.5029 28.9394 17.0659 28.6926 17.5697C28.4458 18.0735 28.0627 18.4981 27.5867 18.7951C27.1108 19.0921 26.561 19.2497 26 19.25"
                                    stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M13.9985 19.25C13.4375 19.2497 12.8877 19.0921 12.4118 18.7951C11.9358 18.4981 11.5527 18.0735 11.3059 17.5697C11.0591 17.0659 10.9585 16.5029 11.0156 15.9448C11.0726 15.3867 11.2851 14.8557 11.6288 14.4123C11.9724 13.9688 12.4336 13.6306 12.9598 13.4361C13.486 13.2416 14.0563 13.1985 14.6058 13.3118C15.1552 13.4251 15.6619 13.6902 16.0683 14.077C16.4747 14.4638 16.7645 14.9568 16.9047 15.5"
                                    stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <div style={{marginLeft: '10px'}}>
                                <p className="button-title">Ship - to - Home</p>
                                <p>$8.95 shipping</p>
                            </div>
                            <span>
                                <IconComplete/>
                            </span>
                        </div>
                        <div className="block-button-form">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M40 18.596C40 37.4186 29.3675 37.4186 18.9189 37.4186C8.47029 37.4186 0 28.9914 0 18.596C0 8.20053 8.47029 3 18.9189 3C29.3675 3 40 8.20053 40 18.596Z"
                                    fill="#F1EEF4"/>
                                <path
                                    d="M13.1273 26.749H26.8691C27.0455 26.7491 27.2162 26.687 27.3513 26.5736C27.4864 26.4603 27.5772 26.303 27.6079 26.1293L29.736 16.3793C29.7627 16.2189 29.7366 16.0541 29.6615 15.9098C29.5864 15.7655 29.4664 15.6496 29.3197 15.5794C29.1729 15.5093 29.0073 15.4887 28.8479 15.5209C28.6884 15.5531 28.5438 15.6362 28.4357 15.7578L24.4982 19.999L20.6788 11.435C20.6187 11.3051 20.5227 11.1951 20.4021 11.118C20.2815 11.041 20.1413 11 19.9982 11C19.8551 11 19.7149 11.041 19.5943 11.118C19.4737 11.1951 19.3777 11.3051 19.3176 11.435L15.4982 19.999L11.5607 15.7578C11.4529 15.6344 11.3076 15.5498 11.1471 15.5168C10.9866 15.4838 10.8198 15.5043 10.672 15.5751C10.5243 15.6459 10.4038 15.7631 10.3289 15.9088C10.2541 16.0546 10.229 16.2208 10.2576 16.3821L12.3857 26.1321C12.417 26.3058 12.5085 26.4628 12.6441 26.5756C12.7798 26.6884 12.9508 26.7498 13.1273 26.749Z"
                                    stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M20.5234 19.75C20.7305 19.75 20.8984 19.9179 20.8984 20.125C20.8984 20.3321 20.7305 20.5 20.5234 20.5C20.3163 20.5 20.1484 20.3321 20.1484 20.125C20.1484 19.9179 20.3163 19.75 20.5234 19.75Z"
                                    fill="#FBB041" stroke="#FBB041" strokeWidth="1.5"/>
                            </svg>

                            <div style={{marginLeft: '10px'}}>
                                <p className="button-title">Buyer’s choice</p>
                                <p>Give both options</p>
                            </div>
                            <span>
                                <IconComplete/>
                            </span>
                        </div>
                    </div>
                    <div className="block-two-inputs">
                        <div>
                            First name
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div>
                            Last name
                            <input type="text" placeholder="Last name"/>
                        </div>
                    </div>
                    <div className="block-one-input">
                        School/Organization Name
                        <input type="text" placeholder="School/Organization Name"/>
                    </div>
                    <div className="block-two-inputs">
                        <div>
                            Address 1
                            <input type="text" placeholder="123 Example Street"/>
                        </div>
                        <div>
                            Address 2 (optional)
                            <input type="text" placeholder="123 Example Street"/>
                        </div>
                    </div>
                    <div className="block-three-inputs">
                        <div>
                            City
                            <input type="text" placeholder="City"/>
                        </div>
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
                                        {options.map((option, i) => (
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
                        <div>
                            Zip Code
                            <input type="text" placeholder="Zip code"/>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-start', marginLeft: '20px'}}>
                        <label className="form-custom-checkbox">
                            <input type="checkbox"/>
                            <span className="form-check-mark"></span>
                        </label>
                        <p>Organize my orders! Examples: Sort by grade level, teacher name, coach name, team name,
                            etc)</p>
                    </div>
                </div>}

            </div>
        </div>
    )
}

export default FirstStep;