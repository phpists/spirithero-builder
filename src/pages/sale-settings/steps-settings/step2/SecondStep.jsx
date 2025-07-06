import {useState} from 'react';
import './SecondStepStyles.css';

function SecondStep() {
    const [isOpen, setIsOpen] = useState(false);
    const [fields, setFields] = useState([{id: Date.now()}]);

    const addField = () => {
        setFields([...fields, {id: Date.now()}]);
    };

    const removeField = (id) => {
        setFields(fields.filter(field => field.id !== id));
    };

    return (
        <div className="block-header-card">
            <div className="header-card" onClick={() => setIsOpen(!isOpen)}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <span className="header-step-number">2</span>
                    <p style={{fontWeight: '700'}}>How should we sort your orders?</p>
                    <svg style={{cursor: 'pointer', transform: isOpen && 'rotate(-180deg)'}} width="40" height="40" viewBox="0 0 40 40" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M14.9982 16.9395L19.9982 21.9395L24.9982 16.9395L26.0588 18.0001L20.5285 23.5304C20.2356 23.8233 19.7607 23.8233 19.4678 23.5304L13.9375 18.0001L14.9982 16.9395Z"
                              fill="#4E008E"/>
                    </svg>
                </div>
            </div>
            {isOpen && (
                <div className="content-card">
                    <p>We will sort, label and bag your orders accordingly</p>
                    <div className="card-block-buttons">
                        <button>Choose file and Upload</button>
                        <button>Download Sample CSV</button>
                    </div>

                    <div>
                        {fields.map((field, index) => (
                            <div key={field.id} className="search-field">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.75 12H20.25" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M3.75 6H20.25" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M3.75 18H20.25" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search project or company"
                                    className="input-field"
                                />
                                <div onClick={() => removeField(field.id)}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.5 8H10.5" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#4E008E" strokeWidth="1.5" strokeMiterlimit="10"/>
                                    </svg>

                                </div>
                            </div>
                        ))}
                        <div className="block-button-field">
                            <button onClick={addField} className="add-btn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_4805_24856)">
                                        <path d="M6.5 12H17.5" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 6.5V17.5" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4805_24856">
                                            <rect width="16" height="16" fill="white" transform="translate(4 4)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Add more</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SecondStep;
