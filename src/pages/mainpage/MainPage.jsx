import './MainPageStyles.css';
import Details from './details/Details'

function MainPage() {
    return (
        <div>
            <div className="main-page-block" style={{
                height: '309px',
                backgroundImage: 'url(src/assets/babd01f0bff9b46fbc280f6d9640155dabf61483.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div>
                    <h1>Add your own custom background</h1>
                </div>
            </div>
            <div className='block-button-logo'>
                <span>Your logo</span>
                <div>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_140_927)">
                            <path d="M16 18V4" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M27 18V26H5V18" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21 13L16 18L11 13" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_140_927">
                                <rect width="32" height="32" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>
            <Details />
        </div>
    );
}

export default MainPage;
