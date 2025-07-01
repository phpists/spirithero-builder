import './WarningStyles.css'

function Warning() {
    return (
        <div className="block-warning">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3998_104362)">
                    <path d="M12 9V13" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.3625 3.59119L2.2565 17.1252C2.08939 17.4146 2.00096 17.7427 2.00001 18.0768C1.99905 18.411 2.0856 18.7396 2.25104 19.0299C2.41649 19.3203 2.65506 19.5622 2.94304 19.7317C3.23101 19.9013 3.55835 19.9924 3.8925 19.9962H20.1065C20.4405 19.9923 20.7677 19.9011 21.0555 19.7317C21.3433 19.5622 21.5818 19.3204 21.7472 19.0302C21.9126 18.74 21.9992 18.4116 21.9984 18.0776C21.9976 17.7435 21.9094 17.4155 21.7425 17.1262L13.6365 3.59019C13.466 3.30869 13.2257 3.07593 12.9389 2.91439C12.6522 2.75284 12.3286 2.66797 11.9995 2.66797C11.6704 2.66797 11.3468 2.75284 11.06 2.91439C10.7733 3.07593 10.533 3.30869 10.3625 3.59019V3.59119Z" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16H12.01" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_3998_104362">
                        <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            Heads up! Your base price includes 1 ink color—want more? It’s just $1 extra per color. Don’t worry, we’ve <br/>
            got your back—our team will review your store once submitted to make sure everything looks great!
        </div>
    )
}

export default Warning;