function Tabs({ activeTab, onTabChange }) {
    return (
        <div className='block-tabs'>
            <div
                className={`tab-catalog tab ${activeTab === 'catalog' ? 'active' : ''}`}
                onClick={() => onTabChange('catalog')}
            >
                <svg viewBox="0 0 24 24" className="check-icon">
                    <path d="M5 13l4 4L19 7" />
                </svg>
                Product catalog
                <span>125</span>
            </div>

            <div
                className={`tab-store tab ${activeTab === 'store' ? 'active' : ''}`}
                onClick={() => onTabChange('store')}
            >
                <svg viewBox="0 0 24 24" className="check-icon">
                    <path d="M5 13l4 4L19 7" />
                </svg>
                My store
                <span>4</span>
            </div>
        </div>
    );
}

export default Tabs;
