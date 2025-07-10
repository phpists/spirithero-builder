import {useState} from 'react';
import CheckBox from './CheckBox';
import './ModalFormDesignStyles.css';
import ButtonClose from '../../../components/ButtonClose';
import buttonESC from '../../../components/ButtonESC';
import ModallCall from './modal-call/ModalCall';
import ShadowBlock from '../../../components/ShadowBlock';

function ModalFormDesign({closeModalFormDesign}) {
    const [activeCardIndex, setActiveCardIndex] = useState(null);
    const [modalCall, setModalCall] = useState(false);


    const dataCards = [
        {
            name: 'Mascot Aggressive look.',
            path: 'src/assets/violet-shirt.png'
        },
        {
            name: 'Classic',
            path: 'src/assets/orange-shirt.png'
        },
        {
            name: 'Text Only',
            path: 'src/assets/red-shirt.png'
        },
        {
            name: 'Cartoon Mascot Cute',
            path: 'src/assets/grey-shirt.png'
        },
        {
            name: 'Vintage',
            path: 'src/assets/blue-shirt.png'
        }
    ];

    const colorsData = [
        {
            color: '#76DC5A',
            name: 'Green'
        },
        {
            color: '#5A7ADC',
            name: 'Blue'
        },
        {
            color: '#F12400',
            name: 'Red'
        },
        {
            color: '#E2FF4F',
            name: 'Yellow'
        },
        {
            color: '#76DC5A',
            name: 'Purple'
        },
        {
            color: '#76DC5A',
            name: 'Orange'
        },
        {
            color: '#76DC5A',
            name: 'Teal'
        },
        {
            color: '#76DC5A',
            name: 'Magenta'
        },
        {
            color: '#76DC5A',
            name: 'Magenta'
        },
        {
            color: '#76DC5A',
            name: 'Magenta'
        },
        {
            color: '#76DC5A',
            name: 'Magenta'
        },
        {
            color: '#76DC5A',
            name: 'Magenta'
        }
    ];

    const handleActiveCard = (index) => {
        setActiveCardIndex(index);
    };

    buttonESC(() => {
        closeModalFormDesign();
    });

    const handleModalCall = () => setModalCall(!modalCall);

    return (
        <div className="block-modal-form-design">
            {modalCall && <ModallCall handleModalCall={handleModalCall} />}
            {modalCall && <ShadowBlock handleModalView={handleModalCall}/>}
            <div style={{position: 'relative',top: '-40px'}}>
                <ButtonClose handleModalView={closeModalFormDesign}/>
            </div>
            <div className="modal-form-design">
                <h1>Work with A designer to bring your vision into life</h1>
                <p>You can submit a design request below. A spirit wear specialist will reach out to you if we have any
                    additional <br/> questions. Your first two designs are free which include unlimited edits until you
                    are 100% satisfied with your <br/> design. Additional custom designs are $50 per logo.</p>

                <div className="modal-form-card-design">
                    <p style={{color: '700 !important'}}>1. Help our art dept by choosing a design style below</p>
                    <div className="cards-form-design">
                        {dataCards.map((option, index) => (
                            <label
                                key={index}
                                className="card-design-form"
                                style={{ border: activeCardIndex === index ? '2px solid #4E008E' : '1px solid grey' }}
                                onClick={() => handleActiveCard(index)}
                            >
                                <CheckBox />
                                <div style={{ width: '124px', margin: '0 auto' }}>{option.name}</div>
                                <img src={option.path} alt="" />
                            </label>
                        ))}
                    </div>
                    <div className="modal-design-select-info">
                        <div className="modal-design-block-colors">
                            <p style={{color: '700 !important'}}>2.Select Your Ink Color(s)</p>
                            {colorsData.map((option) => (
                                <label
                                    style={{
                                    position: 'relative',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 5,
                                    marginBottom: '25px'
                                }}>
                                    <CheckBox/>
                                    <div style={{
                                        borderRadius: '50%',
                                        border: '3px solid #fff',
                                        outline: '1px solid grey',
                                        width: '24px',
                                        height: '24px',
                                        margin: '0 0 0 50px',
                                        backgroundColor: option.color
                                    }}></div>
                                    <div>{option.name}</div>
                                </label>))
                            }
                        </div>
                        <div className="block-forms-text-photos">
                            <p style={{color: '700 !important'}}>3. Add Text and Photos</p>
                            Front Design Text (optional)
                            <textarea></textarea>
                            Back Design Text (optional)
                            <textarea></textarea>
                            Message for designer (optional)
                            <textarea style={{height: '85px'}}></textarea>
                            Upload photo(s) (optional)
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                border: '1px solid #ccc',
                                borderRadius: '12px',
                                height: '42px',
                                padding: '0 10px',
                                backgroundColor: '#fff',
                                width: '100%',
                                maxWidth: '620px',
                                fontFamily: 'inherit',
                                fontSize: '14px',
                                color: '#666',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <label style={{
                                    backgroundColor: '#E0E0E0',
                                    padding: '2px 8px',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    marginRight: '10px',
                                    fontWeight: '600',
                                    color: '#333',
                                    whiteSpace: 'nowrap'
                                }}>
                                    Upload file
                                    <input
                                        type="file"
                                        multiple
                                        style={{
                                            display: 'none'
                                        }}
                                        onChange={(e) => {
                                            const fileName = e.target.files?.length
                                                ? Array.from(e.target.files).map(f => f.name).join(', ')
                                                : 'No file is chosen';
                                            document.getElementById('file-name-display').textContent = fileName;
                                        }}
                                    />
                                </label>
                                <span id="file-name-display" style={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap'
                                }}>No file is chosen</span>
                            </div>

                            Upload as many images as you want to help us give you a great
                            design <br/> {'( Each image must be < 2MB in size )'}
                            By reaching out to us, you agree to our Terms and Conditions
                            <div>
                                <div style={{position: 'relative', left: '-10px', margin: '20px 0'}}>
                                    <CheckBox/>
                                </div>
                                <span style={{marginLeft: '40px'}}>By reaching out to us, you agree to our <span style={{color: '#004147'}}>Terms and Conditions</span></span>
                            </div>
                            <button onClick={handleModalCall}>Sent Request and Book a Call</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalFormDesign;