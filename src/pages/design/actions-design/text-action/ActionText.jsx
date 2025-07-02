import './ActionDesignTextStyles.css'

function ActionText() {
    return (
        <div className="block-action-text-design">
            Add text
            <textarea
                rows={5}
                cols={30}
                placeholder="Enter the text"
                onChange={(e) => console.log(e.target.value)}
            />
            <button>
                Add text
            </button>
            <div className="color-options-container">
                <div>
                    <div style={{fontWeight: 'normal'}}>Font</div>
                    <input className="input-font-design" type="text" placeholder="Montserrat"/>
                </div>

                <div style={{display: 'flex' , justifyContent: 'space-between', alignItems: 'center', gap: '10px'}}>
                    <div style={{letterSpacing: '10px'}}>B /</div>
                    <div>
                        <div>Colour</div>
                        <div className="block-color-text-design"></div>
                    </div>
                </div>


                <div>
                    <div>Size</div>
                    <input className="input-size-design" type="text"  placeholder="Size"/>
                </div>
            </div>

            <div className="block-agree-text">
                <label className="text-custom-checkbox">
                    <input type="checkbox" />
                    <span className="text-check-mark"></span>
                </label>
                By uploading the image, I agree that I have the
                legal right to reproduce and sell the <br/> design, and that I am in full compliance with SPIRIT HERO’s Terms of Use.
            </div>
        </div>
    )
}

export default ActionText;