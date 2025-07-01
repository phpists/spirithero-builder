import { useState } from 'react';
import './Tabs.css';

function Tabs({ activeTab, onTabChange }) {
    const [selectClick, setSelectClick] = useState(false);
    const [selected, setSelected] = useState('All');

    const options = [
        { value: '1', label: 'All' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
    ];

    return (
        <div className="block-tabs-select">
            <div className="block-fundraising-tabs">
                <div
                    className={`tab-fundraise tab ${activeTab === 'fundraise' ? 'active' : ''}`}
                    onClick={() => onTabChange('fundraise')}
                >
                    <svg viewBox="0 0 24 24" className="check-fundraising-icon">
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                    Fundraise
                    <span>146</span>
                </div>

                <div
                    className={`tab-sell tab ${activeTab === 'sell' ? 'active' : ''}`}
                    onClick={() => onTabChange('sell')}
                >
                    <svg viewBox="0 0 24 24" className="check-icon">
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                    Sell at cost
                    <span>0</span>
                </div>
            </div>

            <div className="block-fundraising-select">
                <div>Product Group</div>
                <div
                    className={`custom-select ${selectClick ? 'open' : ''}`}
                    onClick={() => setSelectClick(!selectClick)}
                >
                    <div className="selected-value">{selected}</div>
                    <div className="select-arrow" />
                    {selectClick && (
                        <div className="custom-options">
                            {options.map((option, i) => (
                                <div
                                    key={option.value}
                                    className={`custom-option ${selected === option.label ? 'active' : ''} ${
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
        </div>
    );
}

export default Tabs;
