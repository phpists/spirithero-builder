import {useState} from 'react';
import '../MainPageStyles.css';

function Details() {
    const [selectedColors, setSelectedColors] = useState([]);
    const colorOptions = [
        { name: 'Green', hex: '#4CAF50' },
        { name: 'Black', hex: '#000000' },
        { name: 'White', hex: '#FFFFFF' },
        { name: 'Light Blue', hex: '#ADD8E6' },
        { name: 'Grey', hex: '#9E9E9E' },
        { name: 'Rose', hex: '#FFC0CB' },
        { name: 'Deep Blue', hex: '#00008B' },
        { name: 'Red', hex: '#F44336' },
        { name: 'Yellow', hex: '#FFEB3B' },
        { name: 'Purple', hex: '#9C27B0' }
    ];

    return (
        <div className="block-details">
            <div className='block-store-details'>
                <span>1. Store details</span>
                <div className="details-form">
                    <label>
                        Add Name
                        <input type="text" placeholder="Enter name of your store" />
                    </label>
                    <label className="input-with-icon">
                        Add Website URL
                        <div className="input-icon-wrapper">
                            <input type="text" placeholder="exp.spirithero.com/abc-spirit-wear-store" />
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_4440_7186)">
                                    <path d="M5.79313 13.5001H3C2.86739 13.5001 2.74021 13.4474 2.64645 13.3536C2.55268 13.2599 2.5 13.1327 2.5 13.0001V10.207C2.50006 10.0745 2.55266 9.94753 2.64625 9.85383L10.3538 2.14633C10.4475 2.05263 10.5746 2 10.7072 2C10.8397 2 10.9669 2.05263 11.0606 2.14633L13.8538 4.93758C13.9474 5.03134 14.0001 5.15847 14.0001 5.29102C14.0001 5.42357 13.9474 5.5507 13.8538 5.64446L6.14625 13.3538C6.05255 13.4474 5.92556 13.5 5.79313 13.5001Z"
                                          stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.5 4L12 7.5" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_4440_7186">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </label>


                    <div className="social-inputs">
                        <label>
                            <span style={{fontSize: 14,margin: 0,fontWeight: 'normal'}}>
                                Add Social Media <em>(optional)</em>
                              </span>
                            <input type="text" placeholder="https://facebook.com/..." />
                        </label>
                        <label>
                            <span style={{fontSize: 14,margin: 0,fontWeight: 'normal'}}>
                                Add Social Media <em>(optional)</em>
                              </span>
                            <input type="text" placeholder="https://x.com" />
                        </label>
                    </div>
                </div>
            </div>
            <div className="block-store-details" style={{marginTop: 40}}>
                <span>2. Choose primary colors (multiple choice is available)</span>
                <p>
                    Choose colors for the products you will sell in your store. Be sure to select colors that will look good with your logo on them.
                    Our system automatically selects products & colorizes design templates based on your store colors.
                </p>

                <div className="block-colors">
                    {colorOptions.map((color, index) => (
                        <div className={`block-color ${selectedColors.includes(index) ? 'selected' : ''}`}>
                            <label className="custom-checkbox">
                                <input
                                    type="checkbox"
                                    id={`color-${index}`}
                                    checked={selectedColors.includes(index)}
                                    onChange={() => {
                                        setSelectedColors((prev) =>
                                            prev.includes(index)
                                                ? prev.filter(i => i !== index)
                                                : [...prev, index]
                                        );
                                    }}
                                />
                                <span className="checkmark"></span>
                            </label>
                            <div className="circle" style={{ backgroundColor: color.hex }}></div>
                            <span style={{
                                marginBottom: 0,
                                fontSize: '12px',
                                fontWeight: 'normal',
                            }}>{color.name}</span>
                        </div>
                    ))}
                </div>
                <div className="block-button-next">
                    <button>Next</button>
                    <p>It will take about 10 min.</p>
                </div>
            </div>
        </div>
    );
}

export default Details;