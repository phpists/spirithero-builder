import './MainPageStyles.css';
import Details from './details/Details'

function MainPage() {
    return (
        <div style={{position: 'relative'}}>
            <div className="block-icon-edit">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2097_42005)">
                        <path d="M12 27.0002H6C5.73478 27.0002 5.48043 26.8948 5.29289 26.7073C5.10536 26.5197 5 26.2654 5 26.0002V20.4139C5.00012 20.149 5.10532 19.8951 5.2925 19.7077L20.7075 4.29266C20.895 4.10527 21.1493 4 21.4144 4C21.6795 4 21.9337 4.10527 22.1213 4.29266L27.7075 9.87516C27.8949 10.0627 28.0002 10.3169 28.0002 10.582C28.0002 10.8471 27.8949 11.1014 27.7075 11.2889L12 27.0002Z" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M27 27H12" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17 8L24 15" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2097_42005">
                            <rect width="32" height="32" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

            </div>
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
