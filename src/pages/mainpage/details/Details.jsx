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
        <div style={{ background: '#fff', padding: '96px 0 126px 0' }}>
            <div className='block-store-details'>
                <span>1. Store details</span>
                <div className="details-form">
                    <label>
                        Add Name
                        <input type="text" placeholder="Enter name of your store" />
                    </label>
                    <label>
                        Add Website URL
                        <input type="text" placeholder="exp.spirithero.com/abc-spirit-wear-store" />
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