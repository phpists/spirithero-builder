import {useState} from 'react';
import './DesignStyles.css';
import Slider from './Slider';
import ProductPreview from './product-preview/ProductPreview';
import ActionDesign from './actions-design/ActionDesign';
import IcoComplete from './IconComplete';
import ModalFormDesign from './modal-form-design/ModalFormDesign';
import ShadowBlock from '../../components/ShadowBlock';

function Design() {
    const [side , setSide] = useState(true);
    const [activeButton, setActiveButton] = useState('image');
    const [templatesModalVisible , setTemplatesModalVisible] = useState(false);
    const [modalFormDesign, setModalFormDesign] = useState(false);

    const closeModalTemplates = () => setTemplatesModalVisible(!templatesModalVisible);
    const closeModalFormDesign = () => setModalFormDesign(!modalFormDesign);

    return (
        <div className="design">
            {modalFormDesign && <ModalFormDesign closeModalFormDesign={closeModalFormDesign} />}
            {modalFormDesign && <ShadowBlock handleModalView={closeModalFormDesign} />}
            <div className="block-product">
                <div className="block-button-back" onClick={() => setSide(!side)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_4599_29987)">
                            <path d="M8.25 14.25H2.25V8.25" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 17.2496C20.9999 15.4696 20.472 13.7296 19.4831 12.2497C18.4942 10.7697 17.0886 9.61622 15.4441 8.93506C13.7996 8.25391 11.9901 8.07568 10.2443 8.42291C8.49853 8.77015 6.89492 9.62724 5.63625 10.8858L2.25 14.2496" stroke="#4E008E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_4599_29987">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                    Back Side
                </div>

                <h1>Sleeve</h1>

                <Slider side={side} />
            </div>
            <div className="block-design">
                <button onClick={closeModalFormDesign}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_4599_113641)">
                            <path d="M8 12.0003C8 11.6025 8.15803 11.2209 8.43934 10.9396C8.72064 10.6583 9.10217 10.5003 9.5 10.5003H12.3881C12.7279 10.5004 13.0576 10.3851 13.3233 10.1733C13.589 9.96156 13.7749 9.66588 13.8506 9.33468C13.9539 8.87993 14.004 8.41473 14 7.94843C13.9719 4.64718 11.24 1.96718 7.9375 2.0003C6.35706 2.01677 4.84694 2.65617 3.7352 3.77961C2.62347 4.90305 1.99991 6.41978 2 8.0003C2 10.6134 3.67062 12.5903 6 13.4134C6.22616 13.4934 6.4682 13.5179 6.70581 13.485C6.94342 13.4521 7.16967 13.3627 7.36558 13.2243C7.56149 13.0859 7.72135 12.9025 7.83174 12.6895C7.94212 12.4765 7.99983 12.2402 8 12.0003Z" stroke="#FCFCFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 5.5C8.41421 5.5 8.75 5.16421 8.75 4.75C8.75 4.33579 8.41421 4 8 4C7.58579 4 7.25 4.33579 7.25 4.75C7.25 5.16421 7.58579 5.5 8 5.5Z" fill="#FBB041"/>
                            <path d="M5.25 7C5.66421 7 6 6.66421 6 6.25C6 5.83579 5.66421 5.5 5.25 5.5C4.83579 5.5 4.5 5.83579 4.5 6.25C4.5 6.66421 4.83579 7 5.25 7Z" fill="#FBB041"/>
                            <path d="M5.25 10.5C5.66421 10.5 6 10.1642 6 9.75C6 9.33579 5.66421 9 5.25 9C4.83579 9 4.5 9.33579 4.5 9.75C4.5 10.1642 4.83579 10.5 5.25 10.5Z" fill="#FBB041"/>
                            <path d="M10.75 7C11.1642 7 11.5 6.66421 11.5 6.25C11.5 5.83579 11.1642 5.5 10.75 5.5C10.3358 5.5 10 5.83579 10 6.25C10 6.66421 10.3358 7 10.75 7Z" fill="#FBB041"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_4599_113641">
                                <rect width="16" height="16" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    Request a custom design
                </button>
                <h1 onClick={closeModalTemplates}>Create your DESIGN</h1>
                <p>Choose options from ready solutions to the custom ones</p>
                <div className="actions-design">
                    <div
                         className={`design-button ${activeButton === 'image' ? 'active' : ''}`}
                         onClick={() => setActiveButton('image')}
                    >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 18.596C40 37.4186 29.3675 37.4186 18.9189 37.4186C8.47029 37.4186 0 28.9914 0 18.596C0 8.20053 8.47029 3 18.9189 3C29.3675 3 40 8.20053 40 18.596Z" fill="#F1EEF4"/>
                            <g clipPath="url(#clip0_4599_88915)">
                                <path d="M27.5 11.75H12.5C12.0858 11.75 11.75 12.0858 11.75 12.5V27.5C11.75 27.9142 12.0858 28.25 12.5 28.25H27.5C27.9142 28.25 28.25 27.9142 28.25 27.5V12.5C28.25 12.0858 27.9142 11.75 27.5 11.75Z" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17 18.5C17.8284 18.5 18.5 17.8284 18.5 17C18.5 16.1716 17.8284 15.5 17 15.5C16.1716 15.5 15.5 16.1716 15.5 17C15.5 17.8284 16.1716 18.5 17 18.5Z" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.3164 28.2506L23.5961 17.97C23.6657 17.9002 23.7485 17.8449 23.8395 17.8072C23.9306 17.7694 24.0282 17.75 24.1267 17.75C24.2253 17.75 24.3229 17.7694 24.4139 17.8072C24.505 17.8449 24.5877 17.9002 24.6573 17.97L28.2517 21.5653" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4599_88915">
                                    <rect width="24" height="24" fill="white" transform="translate(8 8)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        Add Image
                        {activeButton === 'image' && <div className="complete-icon-design"><IcoComplete /></div>}
                    </div>
                    <div
                        className={`design-button ${activeButton === 'text' ? 'active' : ''}`}
                        onClick={() => setActiveButton('text')}
                    >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 18.596C40 37.4186 29.3675 37.4186 18.9189 37.4186C8.47029 37.4186 0 28.9914 0 18.596C0 8.20053 8.47029 3 18.9189 3C29.3675 3 40 8.20053 40 18.596Z" fill="#F1EEF4"/>
                            <g clipPath="url(#clip0_4599_110161)">
                                <path d="M21.5 26L15.5 13.25L9.5 26" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M26.75 26C28.4069 26 29.75 24.8247 29.75 23.375C29.75 21.9253 28.4069 20.75 26.75 20.75C25.0931 20.75 23.75 21.9253 23.75 23.375C23.75 24.8247 25.0931 26 26.75 26Z" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M29.75 26V20.375C29.75 18.9256 28.4066 17.75 26.75 17.75C25.8537 17.75 25.0494 17.9544 24.5 18.5" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M19.7369 22.25H11.2656" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4599_110161">
                                    <rect width="24" height="24" fill="white" transform="translate(8 8)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        Add Text
                        {activeButton === 'text' && <div className="complete-icon-design"><IcoComplete /></div>}
                    </div>
                    <div
                        className={`design-button ${activeButton === 'template' ? 'active' : ''}`}
                        onClick={() => setActiveButton('template')}
                    >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 18.596C40 37.4186 29.3675 37.4186 18.9189 37.4186C8.47029 37.4186 0 28.9914 0 18.596C0 8.20053 8.47029 3 18.9189 3C29.3675 3 40 8.20053 40 18.596Z" fill="#F1EEF4"/>
                            <path d="M20 23H17V20L26 11L29 14L20 23Z" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M23.75 13.25L26.75 16.25" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M28.25 20V27.5C28.25 27.6989 28.171 27.8897 28.0303 28.0303C27.8897 28.171 27.6989 28.25 27.5 28.25H12.5C12.3011 28.25 12.1103 28.171 11.9697 28.0303C11.829 27.8897 11.75 27.6989 11.75 27.5V12.5C11.75 12.3011 11.829 12.1103 11.9697 11.9697C12.1103 11.829 12.3011 11.75 12.5 11.75H20" stroke="#4E008E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Templates
                        {activeButton === 'template' && <div className="complete-icon-design"><IcoComplete /></div>}
                    </div>
                </div>

                <ActionDesign templatesModalVisible={templatesModalVisible} activeButton={activeButton} closeModalTemplates={closeModalTemplates} />

                <ProductPreview />
            </div>
        </div>
    )
}

export default Design;