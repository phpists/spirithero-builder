import './HeaderSellStyles.css';

function HeaderSell({ title, onToggleList, isListVisible }) {
    return (
        <div className="sell-header">
            <div className="sell-chevron" onClick={onToggleList}>
                <svg
                    style={{
                        transform: !isListVisible ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 14L12 9L17 14"
                        stroke="#4E008E"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <label className="sell-checkbox">
                <input type="checkbox" />
                <span className="sell-checkmark"></span>
            </label>
            <div className="sell-title">
                T-Shirt (32 items)
            </div>
            <div className="block-base-total-costs">
                <div className="sell-base-cost">
                    Base Cost
                </div>
                <div className="sell-total-cost">
                    Total Cost
                </div>
            </div>
        </div>
    );
}

export default HeaderSell;
