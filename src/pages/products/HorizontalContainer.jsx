function HorizontalContainer() {
    return (
        <div className="horizontal-container">
            <div style={{width: '50px'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14L12 9L17 14" stroke="#373239"
                          strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                </svg>

                <label className="checkbox-label">
                    <input type="checkbox" />
                </label>

            </div>
            <div className="horizontal-container-info">
                <div>
                    <p>Standard collection</p>
                    <span>4 items</span>
                </div>
                <svg width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M52 18.596C52 37.4186 41.3675 37.4186 30.9189 37.4186C20.4703 37.4186 12 28.9914 12 18.596C12 8.20053 20.4703 3 30.9189 3C41.3675 3 52 8.20053 52 18.596Z" fill="#4E008E"/>
                    <path d="M35 9.5L33.5 17L39.5 19.25L29 30.5L30.5 23L24.5 20.75L35 9.5Z" fill="#FBB041"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M35.3425 8.83277C35.6408 8.98586 35.8012 9.31834 35.7354 9.64711L34.3605 16.5217L39.7634 18.5478C39.9978 18.6357 40.1729 18.8349 40.2302 19.0786C40.2874 19.3224 40.2192 19.5787 40.0483 19.7618L29.5483 31.0118C29.3195 31.2569 28.9559 31.3204 28.6576 31.1673C28.3593 31.0142 28.1988 30.6817 28.2646 30.3529L29.6395 23.4783L24.2367 21.4523C24.0022 21.3643 23.8271 21.1652 23.7699 20.9214C23.7126 20.6776 23.7809 20.4214 23.9517 20.2383L34.4517 8.98829C34.6805 8.74318 35.0442 8.67968 35.3425 8.83277ZM25.8137 20.4417L30.7634 22.2978C31.1076 22.4269 31.3076 22.7866 31.2354 23.1471L30.2533 28.0581L38.1863 19.5584L33.2367 17.7023C32.8924 17.5732 32.6925 17.2135 32.7646 16.8529L33.7468 11.942L25.8137 20.4417Z" fill="#FBB041"/>
                </svg>
            </div>
        </div>
    )
}

export default HorizontalContainer;