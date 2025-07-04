import { useState } from 'react';
import './ModalColorsStyles.css';
import ButtonClose from '../../ButtonClose';

const colorOptions = [
    {
        name: 'Green',
        color: '#41FB8B',
        sizes: 'XS, S, M, L, XL, XXL'
    },
    {
        name: 'Blue',
        color: '#637FF1',
        sizes: 'XS, S, M, L'
    },
    {
        name: 'Red',
        color: '#F71C1C',
        sizes: 'S, M, L, XL'
    },
    {
        name: 'Yellow',
        color: '#FBB041',
        sizes: 'XS, M, L'
    },
    {
        name: 'Grey',
        color: '#B1B1B1',
        sizes: 'M, L, XL, XXL'
    },
    {
        name: 'Purple',
        color: '#A259FF',
        sizes: 'XS, S, XXL'
    }
];

function ModalColors({handleModalVisible}) {
    const [checkedStates, setCheckedStates] = useState(new Array(colorOptions.length).fill(false));

    const handleCheckboxChange = (index) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index];
        setCheckedStates(newCheckedStates);
    };

    const selectedCount = checkedStates.filter(Boolean).length;

    return (
        <div className="modal-colors-design">
            <ButtonClose handleModalView={handleModalVisible}/>
            <h1>Select Colours</h1>
            <p>{selectedCount} of 6 colors selected</p>

            <div className="modal-cards-colors">
                {colorOptions.map((option, i) => (
                    <div key={i} className={`block-card-color ${checkedStates[i] ? 'checked' : ''}`}>
                        <label className="modal-colors-checkbox">
                            <input
                                type="checkbox"
                                checked={checkedStates[i]}
                                onChange={() => handleCheckboxChange(i)}
                            />
                            <span className="imodal-colors-check-mark"></span>
                        </label>
                        <div
                            className="modal-colors-circle"
                            style={{ backgroundColor: option.color }}
                        ></div>
                        <div className="modal-color-info">
                            <div style={{padding: '0 0 4px 0'}}>{option.name}</div>
                            <div>
                                <p style={{ color: '#9B9AA5', fontSize: '12px' , margin: '0'}}>In stock:</p>
                                <p style={{ color: '#000', height: '5px' }}>{option.sizes}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ModalColors;
