import './SideBareStyles.css';

function SideBareFundraising({showSideBare , activeTab}) {
    return (
        <div style={{position: 'relative'}}>
            {activeTab === 'fundraise' ? <div className={`side-bare ${showSideBare ? 'show' : ''}`}>
                <ul>
                    <li>
                        Set your profit for each <br/> item:
                        <div>
                            <label className="circle-checkbox">
                                <input type="checkbox" />
                                <span className="circle-checkmark"></span>
                                <p>In  Fixed Amount, USD</p>
                            </label>
                            <label className="circle-checkbox">
                                <input type="checkbox" />
                                <span className="circle-checkmark"></span>
                                <p>Percentage Based</p>
                            </label>
                        </div>
                    </li>
                    <li>
                        Add profit for all items in USD
                        <div className="block-capsules">
                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="1" />
                                <span className="capsule"> $ 1 </span>
                            </label>
                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="3" />
                                <span className="capsule"> $ 3 </span>
                            </label>
                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="5" />
                                <span className="capsule"> $ 5 </span>
                            </label>
                        </div>
                        <div className="side-bare-option">
                            <label className="side-bare-custom-checkbox">
                                <input type="checkbox" />
                                <span className="check-mark"></span>
                                <span className="checkbox-label-text">Add by my own</span>
                            </label>

                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="5" />
                                <span className="capsule"> <span style={{color: '#4E008E', fontWeight: 'normal'}}>$ _ _ </span></span>
                            </label>
                        </div>
                    </li>

                    <li>
                        Add profit for all items in Percentage
                        <div className="block-capsules">
                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="1" />
                                <span className="capsule"> 2 % </span>
                            </label>
                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="3" />
                                <span className="capsule"> 5 % </span>
                            </label>
                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="5" />
                                <span className="capsule"> 8 % </span>
                            </label>
                        </div>
                        <div className="side-bare-option">
                            <label className="side-bare-custom-checkbox">
                                <input type="checkbox" />
                                <span className="check-mark"></span>
                                <span className="checkbox-label-text">Add by my own</span>
                            </label>

                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="5" />
                                <span className="capsule"> <span style={{color: '#4E008E', fontWeight: 'normal'}}>% _ _ </span></span>
                            </label>
                        </div>
                    </li>

                    <li>
                        Make the selling price ends at round number
                        <div className="block-capsules">
                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="1" />
                                <span className="capsule"> .00 </span>
                            </label>
                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="3" />
                                <span className="capsule"> .50 </span>
                            </label>
                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="5" />
                                <span className="capsule"> .95 </span>
                            </label>
                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="5" />
                                <span className="capsule"> .99 </span>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
                :
            <div className={`side-bare ${showSideBare ? 'show' : ''}`}>
                <ul>
                    <li>
                        Make the total cost ends at round number
                        <div className="block-capsules">
                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="1" />
                                <span className="capsule"> .00 </span>
                            </label>
                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="3" />
                                <span className="capsule"> .50 </span>
                            </label>
                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="5" />
                                <span className="capsule"> .95 </span>
                            </label>
                            <label className="capsule-checkbox">
                                <input type="checkbox" name="amount" value="5" />
                                <span className="capsule"> .99 </span>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
            }
        </div>
    )
}

export default SideBareFundraising;