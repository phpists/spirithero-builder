import {useState} from 'react';
import './ThirdStepStyles.css';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function ThirdStep() {
    const [isOpen, setIsOpen] = useState(false);
    const [range, setRange] = useState();

    return (
        <div className="header-block-card">
            <div className="card-header" onClick={() => setIsOpen(!isOpen)}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                    <span className="header-step-number">3</span>
                    <p style={{fontWeight: '700'}}>Schedule Your Flash Sale End Date</p>
                    <svg style={{cursor: 'pointer', transform: isOpen && 'rotate(-180deg)'}} width="40" height="40" viewBox="0 0 40 40" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M14.9982 16.9395L19.9982 21.9395L24.9982 16.9395L26.0588 18.0001L20.5285 23.5304C20.2356 23.8233 19.7607 23.8233 19.4678 23.5304L13.9375 18.0001L14.9982 16.9395Z"
                              fill="#4E008E"/>
                    </svg>
                </div>
            </div>

            {
                isOpen &&
                <div>
                    <div className="settings-block-date-info">
                        <DayPicker
                            mode="range"
                            selected={range}
                            onSelect={setRange}
                            numberOfMonths={1}
                            modifiersClassNames={{
                                selected: 'my-selected',
                                range_start: 'my-range-start',
                                range_end: 'my-range-end',
                            }}
                        />
                        <div>
                            <p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_4230_136458)">
                                        <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z" stroke="#4E008E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12 12L15 14" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12 7V12" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_4230_136458">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>First batch will end on May 28th</span>
                            </p>
                            <p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 19.5C19.2426 19.5 20.25 18.4926 20.25 17.25C20.25 16.0074 19.2426 15 18 15C16.7574 15 15.75 16.0074 15.75 17.25C15.75 18.4926 16.7574 19.5 18 19.5Z" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.5 19.5C8.74264 19.5 9.75 18.4926 9.75 17.25C9.75 16.0074 8.74264 15 7.5 15C6.25736 15 5.25 16.0074 5.25 17.25C5.25 18.4926 6.25736 19.5 7.5 19.5Z" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15.75 17.25H9.75" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M20.25 17.25H22.5C22.6989 17.25 22.8897 17.171 23.0303 17.0303C23.171 16.8897 23.25 16.6989 23.25 16.5V10.5L18.975 5.51906C18.9046 5.43481 18.8166 5.36705 18.7171 5.32056C18.6176 5.27407 18.5092 5.24998 18.3994 5.25H3C2.80109 5.25 2.61032 5.32902 2.46967 5.46967C2.32902 5.61032 2.25 5.80109 2.25 6V16.5C2.25 16.6989 2.32902 16.8897 2.46967 17.0303C2.61032 17.171 2.80109 17.25 3 17.25H5.25" stroke="#4E008E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.25 10.5H23.25" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15.75 5.25V10.5" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9 5.25V10.5" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Orders arrive between June 6th and June 17th</span>
                            </p>
                        </div>
                    </div>
                    );
                </div>
            }
        </div>
    )
}

export default ThirdStep;