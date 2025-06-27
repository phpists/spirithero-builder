function ActionsProducts({activeTab}){
    return(
        <div className="block-actions-products">
            <div className="block-sort-actions">
                <p style={{color: '#605767' , fontSize: '14px' , fontWeight: '500'}}>Sort by</p>
                <span>Recommented <i className="bi bi-chevron-down"></i></span>
            </div>
            <p>You have selected 4 product</p>
            <div className="buttons-actions">
                {activeTab === 'store' ? <div className="button-remove">Remove from my store</div>
                    :
                <div className="button-add">
                    <svg width="12" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 1L9 6L13 7.5L6 15L7 10L3 8.5L10 1Z" fill="#FBB041"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2283 0.55518C10.4272 0.65724 10.5341 0.878893 10.4903 1.09808L9.57368 5.68115L13.1756 7.03185C13.3319 7.09047 13.4486 7.22324 13.4868 7.38576C13.5249 7.54829 13.4794 7.71913 13.3655 7.84118L6.36554 15.3412C6.21302 15.5046 5.97058 15.5469 5.77171 15.4449C5.57285 15.3428 5.46588 15.1211 5.50972 14.902L6.42633 10.3189L2.82445 8.96818C2.66813 8.90956 2.55139 8.7768 2.51324 8.61427C2.47509 8.45175 2.52057 8.2809 2.63448 8.15886L9.63448 0.658859C9.78699 0.49545 10.0294 0.453121 10.2283 0.55518ZM3.87582 8.29445L7.17557 9.53185C7.4051 9.61793 7.53837 9.8577 7.4903 10.0981L6.8355 13.372L12.1242 7.70559L8.82445 6.46818C8.59492 6.38211 8.46164 6.14233 8.50972 5.90196L9.16451 2.62799L3.87582 8.29445Z" fill="#FBB041"/>
                    </svg>
                    <span style={{marginLeft: '10px'}}> Add to my store</span>
                </div>}
                <div className="button-select">Select All</div>
            </div>
        </div>
    )
}

export default ActionsProducts;