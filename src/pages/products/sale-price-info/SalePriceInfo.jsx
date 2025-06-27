import "./SalePriceInfo.css";

function SalePriceInfo() {
    return (
        <div className="block-sale-price">
            <p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 1.5L13.5 9L19.5 11.25L9 22.5L10.5 15L4.5 12.75L15 1.5Z" fill="#FBB041" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.3425 0.832771C15.6408 0.98586 15.8012 1.31834 15.7354 1.64711L14.3605 8.52172L19.7634 10.5478C19.9978 10.6357 20.1729 10.8349 20.2302 11.0786C20.2874 11.3224 20.2192 11.5787 20.0483 11.7618L9.5483 23.0118C9.31953 23.2569 8.95586 23.3204 8.65757 23.1673C8.35927 23.0142 8.19882 22.6817 8.26458 22.3529L9.6395 15.4783L4.23667 13.4523C4.0022 13.3643 3.82708 13.1652 3.76986 12.9214C3.71263 12.6776 3.78086 12.4214 3.95172 12.2383L14.4517 0.988289C14.6805 0.743176 15.0442 0.679681 15.3425 0.832771ZM5.81373 12.4417L10.7634 14.2978C11.1076 14.4269 11.3076 14.7866 11.2354 15.1471L10.2533 20.0581L18.1863 11.5584L13.2367 9.70227C12.8924 9.57317 12.6925 9.2135 12.7646 8.85294L13.7468 3.94198L5.81373 12.4417Z" fill="#FBB041" />
                </svg>
                <span>Flash Sale Price</span>

                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </p>

            <div className="ul-info">
                <ul>
                    <li>Limited-time group order</li>
                    <li>Lower price</li>
                    <li>36 apparels minimum</li>
                    <li>FREE ship for 1 place</li>
                </ul>
                <ul>
                    <li>Only 1 logo</li>
                    <li>2-3 weeks timeframe</li>
                    <li>Arrive sorted, labeled, bagged by student <br/> name/teacher name (sort list).</li>
                </ul>
            </div>
        </div>
    );
}

export default SalePriceInfo;
