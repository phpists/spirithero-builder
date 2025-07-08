import { useState } from 'react';
import './ActionDesignTextStyles.css';

function ActionText() {
    const [isFontOpen, setIsFontOpen] = useState(false);
    const [isSizeOpen, setIsSizeOpen] = useState(false);
    const [selectedFont, setSelectedFont] = useState('All');
    const [selectedSize, setSelectedSize] = useState('All');

    const [selectedColor, setSelectedColor] = useState('black');

    const colors = [
        { value: 'grey', label: 'grey', color: '#D19C00' },
        { value: 'red', label: 'Red', color: '#D1D1D1' },
        { value: 'black', label: 'Black', color: '#000000' }
    ];

    const fonts = [
        { value: '1', label: 'All' },
        { value: '2', label: 'Montserrat' },
        { value: '3', label: 'Roboto' },
    ];

    const sizes = [
        { value: '1', label: 'All' },
        { value: '2', label: '12px' },
        { value: '3', label: '16px' },
    ];

    return (
        <div className="block-action-text-design">
            Add text
            <textarea
                rows={5}
                cols={30}
                placeholder="Enter the text"
                onChange={(e) => console.log(e.target.value)}
            />
            <button>
                Add text
            </button>

            <div className="color-options-container">
                {/* FONT SELECT */}
                <div>
                    <div style={{ fontWeight: 'normal' }}>Font</div>
                    <div
                        className={`custom-select ${isFontOpen ? 'open' : ''} input-font-design`}
                        onClick={() => {
                            setIsFontOpen(!isFontOpen);
                            setIsSizeOpen(false);
                        }}
                    >
                        <div className="selected-value">{selectedFont}</div>
                        <div className="select-arrow" />
                        {isFontOpen && (
                            <div className="custom-options"  style={{maxWidth: '227px'}}>
                                {fonts.map((option, i) => (
                                    <div
                                        key={option.value}
                                        className={`custom-option ${selectedFont === option.label ? 'active' : ''} ${i === fonts.length - 1 ? 'last' : ''}`}
                                        onClick={() => {
                                            setSelectedFont(option.label);
                                            setIsFontOpen(false);
                                        }}
                                    >
                                        {option.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* COLOR */}
                <div className="radio-color-container">
                    <div>Color</div>
                    <div className="colors-block">
                        {colors.map((c) => (
                            <label key={c.value} className="radio-color-option">
                                <input
                                    type="radio"
                                    name="textColor"
                                    value={c.value}
                                    checked={selectedColor === c.value}
                                    onChange={() => setSelectedColor(c.value)}
                                />
                                <span
                                    className="color-circle"
                                    style={{
                                        backgroundColor: c.color,
                                        outline: selectedColor === c.value ? '2px solid #4E008E' : '2px solid #CACACA',
                                    }}
                                />
                            </label>
                        ))}
                    </div>
                </div>


                {/* SIZE SELECT */}
                <div>
                    <div>Size</div>
                    <div
                        className={`custom-select ${isSizeOpen ? 'open' : ''} input-size-design`}
                        onClick={() => {
                            setIsSizeOpen(!isSizeOpen);
                            setIsFontOpen(false);
                        }}
                    >
                        <div className="selected-value">{selectedSize}</div>
                        <div className="select-arrow" />
                        {isSizeOpen && (
                            <div className="custom-options">
                                {sizes.map((option, i) => (
                                    <div
                                        key={option.value}
                                        className={`custom-option ${selectedSize === option.label ? 'active' : ''} ${i === sizes.length - 1 ? 'last' : ''}`}
                                        onClick={() => {
                                            setSelectedSize(option.label);
                                            setIsSizeOpen(false);
                                        }}
                                    >
                                        {option.label}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="block-agree-text">
                <label className="text-custom-checkbox">
                    <input type="checkbox" />
                    <span className="text-check-mark"></span>
                </label>
                By uploading the image, I agree that I have the
                legal right to reproduce and sell the <br /> design, and that I am in full compliance with SPIRIT HERO’s Terms of Use.
            </div>
        </div>
    );
}

export default ActionText;
