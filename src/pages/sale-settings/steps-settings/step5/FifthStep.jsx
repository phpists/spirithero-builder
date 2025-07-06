import {useState} from 'react';
import './FifthStepStyles.css';

function FifthStep() {
    const [isOpen, setIsOpen] = useState(false);
    const [switchList , setSwitchList] = useState(false);

    return (
        <div className="header-card-step5">
            <div className="header-step5" onClick={() => setIsOpen(!isOpen)}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <span className="header-step-number5">5</span>
                    <p style={{fontWeight: '700'}}>How should we sort your orders?</p>
                    <svg style={{cursor: 'pointer', transform: isOpen && 'rotate(-180deg)'}} width="40" height="40" viewBox="0 0 40 40" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M14.9982 16.9395L19.9982 21.9395L24.9982 16.9395L26.0588 18.0001L20.5285 23.5304C20.2356 23.8233 19.7607 23.8233 19.4678 23.5304L13.9375 18.0001L14.9982 16.9395Z"
                              fill="#4E008E"/>
                    </svg>
                </div>
            </div>

            {
                isOpen && (
                    <div className="content-card-step5">
                        <div style={{textAlign: 'left'}}>
                            No
                            <label className="switch-settings">
                                <input type="checkbox"  onChange={() => setSwitchList(prev => !prev)} />
                                <span className="settings-slider"></span>
                            </label>
                            Yes
                        </div>
                        <span className="step5-info">Fundraising goal amount</span>
                        <input type="text" placeholder="Enter the dollar amount"/>
                        <span className="step5-info">This amount will be displayed on you store</span>
                    </div>
                )
            }
        </div>
    )
}

export default FifthStep;