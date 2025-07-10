import './ModalEditStyles.css';
import ButtonClose from '../../../../components/ButtonClose';
import buttonESC from '../../../../components/ButtonESC';

function ModalEdit({handleModalView}) {

    buttonESC(() => {
        handleModalView();
    });

    return (
        <div className="modal-edit">
            <div className="block-modal-edit-close">
                <ButtonClose handleModalView={handleModalView} />
            </div>
            <div className="blocks-modal-edit">
                <div className="block-modal-edit">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.4961 32.499H5.49609V7.49902" stroke="#4E008E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M31.7461 11.25L20.4961 22.5L15.4961 17.5L5.49609 27.5" stroke="#4E008E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M31.75 17.5V11.25H25.5" stroke="#FBB041" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h2>Make money</h2>
                    <p>Add a markup and make money</p>
                    <button>Fundrise</button>
                </div>

                <div className="block-modal-edit">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4961 18.751C22.3997 18.751 27.9961 16.2326 27.9961 13.126C27.9961 10.0194 22.3997 7.50098 15.4961 7.50098C8.59253 7.50098 2.99609 10.0194 2.99609 13.126C2.99609 16.2326 8.59253 18.751 15.4961 18.751Z" stroke="#4E008E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.99609 13.125V19.375C2.99609 22.4813 8.59297 25 15.4961 25C22.3992 25 27.9961 22.4813 27.9961 19.375V13.125" stroke="#4E008E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.5039 18.2812V24.5312" stroke="#4E008E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28.0031 15.1113C33.7094 15.6332 38.0031 17.902 38.0031 20.6238C38.0031 23.7301 32.4063 26.2488 25.5031 26.2488C22.4406 26.2488 19.6344 25.7535 17.4609 24.9301" stroke="#4E008E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13 24.8885V26.876C13 29.9822 18.5969 32.501 25.5 32.501C32.4031 32.501 38 29.9822 38 26.876V20.626" stroke="#4E008E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M30.5039 25.7822V32.0322" stroke="#4E008E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20.5 18.2812V32.0312" stroke="#FBB041" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h2 style={{margin: '25px 0 10px 0', width: '150px'}}>Sell item at cost</h2>
                    <p style={{width: 'fit-content'}}>Sell item for as low as possible</p>
                    <button>Sell item at cost</button>
                </div>
            </div>
            <button className="button-cancel-edit">Cancel and Edit design</button>
        </div>
    )
}

export default ModalEdit;