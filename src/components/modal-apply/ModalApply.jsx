import './ModalApplyStyles.css';
import ButtonClose from '../ButtonClose';
import IconI from '../icons/IconI';
import buttonESC from '../ButtonESC';

function ModalApply({handleModalApply , logo , title , text , firstButtonText, secondButtonText}) {

    buttonESC(() => {
        handleModalApply();
    });

    return (
        <div className="modal-apply">
            <span>
                <ButtonClose handleModalView={handleModalApply} />
            </span>

            {logo === 'Edit' &&
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.5 18.596C40.5 37.4186 29.8675 37.4186 19.4189 37.4186C8.97029 37.4186 0.5 28.9914 0.5 18.596C0.5 8.20053 8.97029 3 19.4189 3C29.8675 3 40.5 8.20053 40.5 18.596Z" fill="#F1EEF4"/>
                    <path d="M20.5 23H17.5V20L26.5 11L29.5 14L20.5 23Z" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M24.25 13.25L27.25 16.25" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M28.75 20V27.5C28.75 27.6989 28.671 27.8897 28.5303 28.0303C28.3897 28.171 28.1989 28.25 28 28.25H13C12.8011 28.25 12.6103 28.171 12.4697 28.0303C12.329 27.8897 12.25 27.6989 12.25 27.5V12.5C12.25 12.3011 12.329 12.1103 12.4697 11.9697C12.6103 11.829 12.8011 11.75 13 11.75H20.5" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }

            {logo === 'Load' &&
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 18.596C40 37.4186 29.3675 37.4186 18.9189 37.4186C8.47029 37.4186 0 28.9914 0 18.596C0 8.20053 8.47029 3 18.9189 3C29.3675 3 40 8.20053 40 18.596Z" fill="#F1EEF4"/>
                    <path d="M29 21.5V27.5C29 27.6989 28.921 27.8897 28.7803 28.0303C28.6397 28.171 28.4489 28.25 28.25 28.25H11.75C11.5511 28.25 11.3603 28.171 11.2197 28.0303C11.079 27.8897 11 27.6989 11 27.5V21.5C11 21.3011 11.079 21.1103 11.2197 20.9697C11.3603 20.829 11.5511 20.75 11.75 20.75C11.9489 20.75 12.1397 20.829 12.2803 20.9697C12.421 21.1103 12.5 21.3011 12.5 21.5V26.75H27.5V21.5C27.5 21.3011 27.579 21.1103 27.7197 20.9697C27.8603 20.829 28.0511 20.75 28.25 20.75C28.4489 20.75 28.6397 20.829 28.7803 20.9697C28.921 21.1103 29 21.3011 29 21.5ZM19.4694 22.0306C19.539 22.1004 19.6217 22.1557 19.7128 22.1934C19.8038 22.2312 19.9014 22.2506 20 22.2506C20.0986 22.2506 20.1962 22.2312 20.2872 22.1934C20.3783 22.1557 20.461 22.1004 20.5306 22.0306L24.2806 18.2806C24.3503 18.2109 24.4056 18.1282 24.4433 18.0372C24.481 17.9461 24.5004 17.8485 24.5004 17.75C24.5004 17.6515 24.481 17.5539 24.4433 17.4628C24.4056 17.3718 24.3503 17.2891 24.2806 17.2194C24.2109 17.1497 24.1282 17.0944 24.0372 17.0567C23.9461 17.019 23.8485 16.9996 23.75 16.9996C23.6515 16.9996 23.5539 17.019 23.4628 17.0567C23.3718 17.0944 23.2891 17.1497 23.2194 17.2194L20.75 19.6897V11C20.75 10.8011 20.671 10.6103 20.5303 10.4697C20.3897 10.329 20.1989 10.25 20 10.25C19.8011 10.25 19.6103 10.329 19.4697 10.4697C19.329 10.6103 19.25 10.8011 19.25 11V19.6897L16.7806 17.2194C16.6399 17.0786 16.449 16.9996 16.25 16.9996C16.051 16.9996 15.8601 17.0786 15.7194 17.2194C15.5786 17.3601 15.4996 17.551 15.4996 17.75C15.4996 17.949 15.5786 18.1399 15.7194 18.2806L19.4694 22.0306Z" fill="#4E008E"/>
                </svg>
            }

            {logo === 'Gallery' &&
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.5 18.596C40.5 37.4186 29.8675 37.4186 19.4189 37.4186C8.97029 37.4186 0.5 28.9914 0.5 18.596C0.5 8.20053 8.97029 3 19.4189 3C29.8675 3 40.5 8.20053 40.5 18.596Z" fill="#F1EEF4"/>
                    <g clipPath="url(#clip0_4278_125182)">
                        <path d="M28 11.75H13C12.5858 11.75 12.25 12.0858 12.25 12.5V27.5C12.25 27.9142 12.5858 28.25 13 28.25H28C28.4142 28.25 28.75 27.9142 28.75 27.5V12.5C28.75 12.0858 28.4142 11.75 28 11.75Z" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5 18.5C18.3284 18.5 19 17.8284 19 17C19 16.1716 18.3284 15.5 17.5 15.5C16.6716 15.5 16 16.1716 16 17C16 17.8284 16.6716 18.5 17.5 18.5Z" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.8164 28.2496L24.0961 17.969C24.1657 17.8993 24.2485 17.8439 24.3395 17.8062C24.4306 17.7685 24.5282 17.749 24.6267 17.749C24.7253 17.749 24.8229 17.7685 24.9139 17.8062C25.005 17.8439 25.0877 17.8993 25.1573 17.969L28.7517 21.5643" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_4278_125182">
                            <rect width="24" height="24" fill="white" transform="translate(8.5 8)"/>
                        </clipPath>
                    </defs>
                </svg>
            }

            <h2>{title}</h2>

            {text && <p>{text}</p>}

            {logo === 'Gallery' &&
                <div style={{margin: '0 0 25px 0'}}>
                    <label className="custom-radio-box">
                        <input type="radio" name="option" />
                        <span className="block-mark"></span>
                        Standard Collection (36-piece minimum)
                        <div style={{margin: '0 0 0 5px'}}><IconI /></div>
                    </label>

                    <label className="custom-radio-box">
                        <input type="radio" name="option" />
                        <span className="block-mark"></span>
                        Pants/Bottoms (36-piece minimum)
                        <div style={{margin: '0 0 0 5px'}}><IconI /></div>
                    </label>
                </div>
            }

            <button style={{
                margin: !text && '25px auto 15px'
            }}>
                {firstButtonText}
            </button>

            <button
                style={{ width: secondButtonText === 'Cancel' ? '58px' : '170px'}}
                className="modal-button-cancel">
                {secondButtonText}
            </button>
        </div>
    )
}

export default ModalApply;