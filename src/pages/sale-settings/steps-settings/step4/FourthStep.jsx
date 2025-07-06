import { useState } from 'react';
import './FourthStepStyles.css';
import IconGreenComplete from './IconGreenComplete';

function FourthStep() {
    const [isOpen, setIsOpen] = useState(false);
    const [switchList , setSwitchList] = useState(false);

    return (
        <div className="card-header-step-fourth">
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    cursor: 'pointer'
                }}
            >
                <span className="header-step4-number">4</span>
                <p style={{fontWeight: '700'}}>
                    Switch to On Demand Ordering After Flash Sale <br/>
                    {isOpen && <span style={{fontSize: '14px', fontWeight: 'normal'}}>after the Flash Sale Group order period ends</span>}
                </p>
                <svg style={{transform: isOpen && 'rotate(-180deg)'}} width="40" height="40" viewBox="0 0 40 40" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M14.9982 16.9395L19.9982 21.9395L24.9982 16.9395L26.0588 18.0001L20.5285 23.5304C20.2356 23.8233 19.7607 23.8233 19.4678 23.5304L13.9375 18.0001L14.9982 16.9395Z"
                          fill="#4E008E" />
                </svg>
            </div>

            {isOpen && (
                <div className="content-card-step4">
                    <div style={{textAlign: 'left'}} className={switchList && 'switch-list-switched'}>
                        No
                        <label className="switch-settings">
                            <input type="checkbox"  onChange={() => setSwitchList(prev => !prev)} />
                            <span className="settings-slider"></span>
                        </label>
                        Yes
                    </div>
                    <p style={{fontWeight: 'bold' , fontSize: '14px' , padding: 0}}>{!switchList ? 'On Demand is': 'On Demand are'}</p>
                    {
                        !switchList ? (
                            <ul className="ul-switch-not-switched">
                                <li>Traditional e-commerce order </li>
                                <li>No minimums </li>
                                <li>Shipped directly to each home </li>
                                <li>Higher pricing </li>
                                <li>Free shipping for orders of $75 or more </li>
                                <li>$8.95 shipping for orders below $75 </li>
                            </ul>
                        ) : (
                                <ul className="ul-switch-switched">
                                    <li><IconGreenComplete />No orders minimums </li>
                                    <li><IconGreenComplete />Ships directly to each customer </li>
                                    <li><IconGreenComplete />Free shipping over $75 </li>
                                    <li><IconGreenComplete />$8.95 flat rate under $75 </li>
                                    <li>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.048 18.7069L13.0591 3.87094C12.4929 2.81906 10.9844 2.81906 10.4177 3.87094L2.42926 18.7069C2.30632 18.9352 2.24468 19.1916 2.25036 19.4508C2.25604 19.7101 2.32886 19.9635 2.46169 20.1863C2.59453 20.409 2.78285 20.5935 3.00827 20.7217C3.23369 20.85 3.48851 20.9176 3.74786 20.918H19.7271C19.9866 20.918 20.2417 20.8507 20.4675 20.7226C20.6932 20.5945 20.8819 20.4101 21.015 20.1873C21.1481 19.9644 21.2211 19.7109 21.2269 19.4514C21.2327 19.1919 21.1711 18.9354 21.048 18.7069ZM11.7386 18.6211C11.5532 18.6211 11.372 18.5661 11.2178 18.4631C11.0636 18.3601 10.9435 18.2137 10.8725 18.0424C10.8015 17.8711 10.783 17.6826 10.8192 17.5007C10.8553 17.3188 10.9446 17.1518 11.0757 17.0207C11.2068 16.8896 11.3739 16.8003 11.5557 16.7641C11.7376 16.7279 11.9261 16.7465 12.0974 16.8175C12.2687 16.8884 12.4151 17.0086 12.5181 17.1627C12.6212 17.3169 12.6761 17.4982 12.6761 17.6836C12.6761 17.9322 12.5774 18.1707 12.4016 18.3465C12.2257 18.5223 11.9873 18.6211 11.7386 18.6211ZM12.7568 9.19219L12.4877 14.9109C12.4877 15.1098 12.4087 15.3006 12.268 15.4413C12.1274 15.5819 11.9366 15.6609 11.7377 15.6609C11.5388 15.6609 11.348 15.5819 11.2074 15.4413C11.0667 15.3006 10.9877 15.1098 10.9877 14.9109L10.7186 9.19453C10.7126 9.05793 10.7341 8.92151 10.7819 8.79341C10.8297 8.6653 10.9028 8.54813 10.9969 8.44888C11.0909 8.34963 11.204 8.27033 11.3293 8.2157C11.4547 8.16108 11.5897 8.13225 11.7265 8.13094H11.7363C11.874 8.13087 12.0102 8.15869 12.1368 8.21272C12.2634 8.26675 12.3778 8.34587 12.473 8.44531C12.5682 8.54475 12.6422 8.66245 12.6907 8.7913C12.7391 8.92015 12.761 9.05748 12.7549 9.195L12.7568 9.19219Z" fill="#FBB041"/>
                                        </svg>
                                        Slightly higher pricing than flash sales
                                    </li>
                                </ul>
                            )
                    }
                </div>
            )}
        </div>
    );
}

export default FourthStep;
