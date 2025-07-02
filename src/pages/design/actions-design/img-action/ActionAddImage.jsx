import React, { useState, useRef } from "react";
import './ActionsDesignImageStyles.css';

function ActionAddImage() {
    const [fileName, setFileName] = useState(null);
    const fileInputRef = useRef(null);
    const [dragOver, setDragOver] = useState(false);

    const handleFiles = (files) => {
        if (files.length > 0) {
            setFileName(files[0].name);
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
    };

    return (
        <div className="block-action-img-design">
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
                >
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
                        {fileName && `Файл: ${fileName}`}
                        <p style={{textAlign: 'center'}}>Drag & Drop file here or <span style={{color: '#4E008E'}}>choose file</span></p>
                    </div>
                    <input
                        ref={fileInputRef}
                        type="file"
                        style={{ display: "none" }}
                        onChange={onFileChange}
                    />
                </div>
                <div className="block-agree-upload">
                    <label className="img-custom-checkbox">
                        <input type="checkbox" />
                        <span className="img-check-mark"></span>
                    </label>
                    By uploading the image, I agree that I have the
                    legal right to reproduce and sell the <br/> design, and that I am in full compliance with SPIRIT HERO’s Terms of Use.
                </div>
            </div>
        </div>
    )
}

export default ActionAddImage;