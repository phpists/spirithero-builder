import './SearchStyles.css';

function Search() {
    return (
        <div className="block-search">
            <label htmlFor="search">
                <input id="search" type="text" placeholder="Search stores" />
                <span style={{cursor: 'pointer'}}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#4E008E"/>
                    <g clipPath="url(#clip0_4645_115090)">
                    <path d="M10 14.6667C10 15.2795 10.1207 15.8863 10.3552 16.4525C10.5898 17.0187 10.9335 17.5332 11.3668 17.9665C11.8002 18.3998 12.3146 18.7436 12.8808 18.9781C13.447 19.2126 14.0538 19.3333 14.6667 19.3333C15.2795 19.3333 15.8863 19.2126 16.4525 18.9781C17.0187 18.7436 17.5332 18.3998 17.9665 17.9665C18.3998 17.5332 18.7436 17.0187 18.9781 16.4525C19.2126 15.8863 19.3333 15.2795 19.3333 14.6667C19.3333 14.0538 19.2126 13.447 18.9781 12.8808C18.7436 12.3146 18.3998 11.8002 17.9665 11.3668C17.5332 10.9335 17.0187 10.5898 16.4525 10.3552C15.8863 10.1207 15.2795 10 14.6667 10C14.0538 10 13.447 10.1207 12.8808 10.3552C12.3146 10.5898 11.8002 10.9335 11.3668 11.3668C10.9335 11.8002 10.5898 12.3146 10.3552 12.8808C10.1207 13.447 10 14.0538 10 14.6667Z" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 22L18 18" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_4645_115090">
                    <rect width="16" height="16" fill="white" transform="translate(8 8)"/>
                    </clipPath>
                    </defs>
                    </svg>
                </span>
            </label>
            <div className="search-buttons">
                <button className="search-button-delete">Delete</button>
                <button className="search-button-move">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 7.5C8.76142 7.5 11 6.49264 11 5.25C11 4.00736 8.76142 3 6 3C3.23858 3 1 4.00736 1 5.25C1 6.49264 3.23858 7.5 6 7.5Z" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1 5.25V7.75C1 8.9925 3.23875 10 6 10C8.76125 10 11 8.9925 11 7.75V5.25" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 7.3125V9.8125" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.9981 6.04492C13.2806 6.25367 14.9981 7.16117 14.9981 8.24992C14.9981 9.49242 12.7594 10.4999 9.99813 10.4999C8.77313 10.4999 7.65062 10.3018 6.78125 9.97242" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 9.955V10.75C5 11.9925 7.23875 13 10 13C12.7613 13 15 11.9925 15 10.75V8.25" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 10.3125V12.8125" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 7.3125V12.8125" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Move to Sell at cost
                </button>
            </div>
        </div>
    )
}

export default Search;