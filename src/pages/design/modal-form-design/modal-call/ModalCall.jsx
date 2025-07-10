import {useState} from 'react';
import './ModalCallStyles.css';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ButtonClose from '../../../../components/ButtonClose';

function ModalCall({handleModalCall}) {
    const times = [
        '11:00am', '11:30am', '12:00pm', '12:30pm', '1:00pm', '1:30pm', '2:00pm',  '2:30pm', "3:00pm",
        '11:00am', '11:30am', '12:00pm', '12:30pm', '1:00pm', '1:30pm', '2:00pm',  '2:30pm', "3:00pm"
    ];

    const [range, setRange] = useState();
    return (
        <div className='modal-call'>
            <div className="block-close-modal-call">
                <ButtonClose handleModalView={handleModalCall}/>
            </div>
            <img src="src/assets/img-modal-call.png" className="img-modal-call" alt=""/>
            <div className="block-calendly">
                <span>Powered By</span>
                <p>Calendly</p>
            </div>
            <div className='side-bare-modal-call'>
                <img src="src/assets/logo-call.png" alt=""/>
                <p>Matt Everett</p>
                <h2>Design Request</h2>
                <p style={{textIndent: '5px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg>
                    30 min
                </p>
                <p style={{textIndent: '5px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-telephone" viewBox="0 0 16 16">
                        <path
                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>
                    Phone call
                </p>
                <div className="block-cookie-settings">
                    <p style={{color: 'blue' , fontWeight: '500'}}>Cookie settings</p>
                    <p>Report abuse</p>
                </div>
            </div>
            <div className='block-modal-date'>
                <h3>Select a Date & Time</h3>
                <div className="day-picker-wrapper">
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
                </div>
                <div className="block-time-zone">
                    <span>Time zone</span>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-globe-americas" viewBox="0 0 16 16">
                            <path
                                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                        </svg>
                        Pacific Time - US & Canada (4:22pm)
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.99816 8.93945L11.9982 13.9395L16.9982 8.93945L18.0588 10.0001L12.5285 15.5304C12.2356 15.8233 11.7607 15.8233 11.4678 15.5304L5.9375 10.0001L6.99816 8.93945Z" fill="#4E008E"/>
                        </svg>
                    </p>
                </div>
                <div className="block-button-troubleshoot">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                             className="bi bi-wrench-adjustable" viewBox="0 0 16 16">
                            <path d="M16 4.5a4.5 4.5 0 0 1-1.703 3.526L13 5l2.959-1.11q.04.3.041.61"/>
                            <path
                                d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.5 4.5 0 0 0 11.5 9m-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376M3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                        </svg>
                        Troubleshoot
                    </button>
                    <span>i</span>
                </div>
            </div>
            <div className="block-times">
                <p style={{fontSize: '10px'}}>Thursday, May 15</p>
                <div className="times-list">
                    {times.map((time) => (
                        <div className="block-time">{time}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ModalCall;