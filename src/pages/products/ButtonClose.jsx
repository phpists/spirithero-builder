function ButtonClose(){
    return(
        <div className="button-close">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i_2112_50263)">
                    <rect width="32" height="32" rx="16" fill="#FCFCFC"/>
                    <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#CACACA"/>
                    <path d="M20 12L12 20" stroke="#605767" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12L20 20" stroke="#47424A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <defs>
                    <filter id="filter0_i_2112_50263" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-3"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2112_50263"/>
                    </filter>
                </defs>
            </svg>

        </div>
    )
}

export default ButtonClose;