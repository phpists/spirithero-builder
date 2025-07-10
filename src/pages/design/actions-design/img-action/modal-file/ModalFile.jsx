import React, { useRef } from 'react';
import './ModalFileStyles.css';
import ButtoneClose from '../../../../../components/ButtonClose';

function ModalFile({ files, setFiles , handleModalFileVisible}) {
    const inputRef = useRef(null);

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files);
        if (newFiles.length > 0) {
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    return (
        <div className="modal-file">
            <div className="block-close-file">
                <ButtoneClose handleModalView={handleModalFileVisible}/>
            </div>

            <div className="block-files-modal">

                <div className="top-row">
                    <div
                        className="block-new-upload"
                        onClick={() => inputRef.current.click()}
                        style={{ cursor: 'pointer' }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#4E008E" strokeWidth="1.5" strokeMiterlimit="10"/>
                            <path d="M8.25 12H15.75" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8.25V15.75" stroke="#4E008E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Upload new logo
                        <input
                            type="file"
                            ref={inputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                            multiple
                            accept="image/*"
                        />
                    </div>

                    {files.length > 0 && (
                        <div className="block-uploaded-file">
                            <div className="preview-image">
                                <img
                                    src={URL.createObjectURL(files[0])}
                                    alt={`upload-0`}
                                    onLoad={e => URL.revokeObjectURL(e.target.src)}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="files-grid">
                    {files.slice(1).map((file, index) => (
                        <div key={index} className="block-uploaded-file">
                            <div className="preview-image">
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt={`upload-${index + 1}`}
                                    onLoad={e => URL.revokeObjectURL(e.target.src)}
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="block-button-file">
                <button>Apply</button>
            </div>
        </div>

    )
}

export default ModalFile;

