import React, { useState, useRef } from "react";
import './ActionsDesignImageStyles.css';
import ModalFile from './modal-file/ModalFile';
import ShadowBlock from '../../../../components/ShadowBlock';
import buttonESC from '../../../../components/buttonESC';

function ActionAddImage() {
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef(null);
    const [dragOver, setDragOver] = useState(false);
    const [modalFileVisible, setModalFileVisible] = useState(false);

    const handleFiles = (newFiles) => {
        if (newFiles.length > 0) {
            setFiles(prev => [...prev, ...Array.from(newFiles)]);
        }
    };

    const onDrop = (e) => {
        e.preventDefault();
        setDragOver(false);
        handleFiles(e.dataTransfer.files);
    };

    const onDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    };

    const onDragLeave = () => {
        setDragOver(false);
    };

    const onFileChange = (e) => {
        handleFiles(e.target.files);
        setModalFileVisible(true);
    };

    const handleModalFileVisible = () => setModalFileVisible(!modalFileVisible);

    buttonESC(() => {
        handleModalFileVisible();
    });


    return (
        <div className="block-action-img-design">
            {modalFileVisible && <ModalFile files={files} setFiles={setFiles} handleModalFileVisible={handleModalFileVisible} />}
            {modalFileVisible && <ShadowBlock handleModalView={handleModalFileVisible}/>}
            <p>File guidelines</p>
            <ul>
                <li>1500px by 1500px transparent artwork is preferred</li>
                <li>Original vector artwork work best, if you have it</li>
                <li>We support EPS, PDF, PNG and JPG files no more than 5 Mb</li>
            </ul>

            <div>
                <div className="block-file"
                     onClick={() => fileInputRef.current.click()}
                     onDrop={onDrop}
                     onDragOver={onDragOver}
                     onDragLeave={onDragLeave}
                     style={{border: files.length > 0 && '0' , padding: files.length > 0 && '0' && '3px 0 15px 0'}}
                >
                    {files.length === 0 ? (
                        <div>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_4692_89711)">
                                    <path d="M11.0013 19.5H7.25134C6.50692 19.4991 5.77122 19.3399 5.09303 19.0329C4.41485 18.726 3.8097 18.2783 3.31773 17.7196C2.82576 17.1609 2.45823 16.504 2.23952 15.7925C2.02081 15.0809 1.95592 14.331 2.04916 13.5924C2.1424 12.8539 2.39163 12.1436 2.78033 11.5087C3.16902 10.8738 3.68829 10.3289 4.30367 9.91001C4.91905 9.49113 5.61647 9.20791 6.34967 9.07914C7.08286 8.95037 7.83505 8.979 8.55634 9.16312" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11.75 15L14.75 12L17.75 15" stroke="#FBB041" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14.75 19.5V12" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8 12.0002C8.00032 10.6481 8.36615 9.32123 9.05877 8.16C9.7514 6.99878 10.7451 6.04639 11.9346 5.40362C13.1242 4.76085 14.4653 4.45161 15.8162 4.50862C17.1671 4.56564 18.4775 4.98678 19.6087 5.72749C20.7398 6.46819 21.6497 7.50092 22.242 8.71637C22.8344 9.93182 23.0871 11.2848 22.9735 12.6321C22.8599 13.9794 22.3842 15.271 21.5967 16.3701C20.8092 17.4692 19.7392 18.335 18.5 18.8758" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4692_89711">
                                        <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p style={{textAlign: 'center'}}>
                                Drag & Drop file here or <span style={{color: '#4E008E'}}>choose file</span>
                            </p>
                        </div>
                    ) : (
                        <div className="uploaded-images-preview">
                            <div className="preview-images-grid">
                                {files.map((file, index) => (
                                    <div key={index} className="preview-image-wrapper">
                                        <div
                                            className="remove-file-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setFiles(prev => prev.filter((_, i) => i !== index));
                                            }}
                                            aria-label={`Remove file ${file.name}`}
                                        >
                                            ×
                                        </div>

                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt={`preview-${index}`}
                                            className="preview-image"
                                            onLoad={e => URL.revokeObjectURL(e.target.src)}
                                        />
                                        <div className="file-name">{file.name}</div>
                                    </div>
                                ))}

                                {files.length >= 0 &&(<div className="add-new-file">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_4988_121775)">
                                            <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9 12H15" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 9V15" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4988_121775">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>)}
                            </div>
                        </div>
                    )}

                    <input
                        ref={fileInputRef}
                        type="file"
                        style={{ display: "none" }}
                        onChange={onFileChange}
                        multiple
                        accept="image/*"
                    />
                </div>

                <div className="block-agree-upload">
                    <label className="img-custom-checkbox">
                        <input type="checkbox" />
                        <span className="img-check-mark"></span>
                    </label>
                    By uploading the image, I agree that I have the
                    legal right to reproduce and sell the <br /> design, and that I am in full compliance with SPIRIT HERO’s Terms of Use.
                </div>
            </div>
        </div>
    )
}

export default ActionAddImage;
