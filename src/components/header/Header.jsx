import {useState} from 'react';
import FullStepper from './FullStepper';
import StepperControls from './StepperControls';
import './HeaderStyle.css';
import './modals/modal-products/ModalProducts.css';
import stepsData from '../../data/stepsData';
import ModalProducts from './modals/modal-products/ModalProducts';
import ModalDesign from './modals/modal-design/ModalDesign';
import ModalFundraising from './modals/modal-fundraising/ModalFundraising';
import ShadowBlock from '../ShadowBlock';
import buttonESC from '../ButtonESC';
import {useNavigate, useLocation} from 'react-router-dom';

function Header() {
    const totalSteps = stepsData.length;
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);

    const [modalProductsVisible, setModalProductsVisible] = useState(false);
    const [modalDesignVisible, setModalDesignVisible] = useState(false);
    const [modalFundraisingVisible, setModalFundraisingVisible] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const onSaveExit = () => {
        console.log('📝 Saving progress and exiting...');
    };

    const handleModalView = () => {
        if (location.pathname === '/Products') {
            setModalProductsVisible(!modalProductsVisible);
        } else if (location.pathname === '/Design') {
            setModalDesignVisible(!modalDesignVisible)
        } else if (location.pathname === '/Fundraising') {
            setModalFundraisingVisible(!modalFundraisingVisible);
        } else {
            console.log(location.pathname)
        }
    };

    buttonESC(() => {
        setModalProductsVisible(false);
        setModalDesignVisible(false);
        setModalFundraisingVisible(false);
    });

    return (
        <div className="header-block">
            <img onClick={() => navigate('/')}
                 src="./src/assets/1d100ec1735bd3c6ce13a7995558da124a97d691.png"
                 width={186}
                 height={41}
                 alt="Банер"
                 style={{cursor: 'pointer'}}
            />
            <FullStepper
                currentStep={currentStep}
                completedSteps={completedSteps}
                setCompletedSteps={setCompletedSteps}
            />
            <StepperControls
                handleModalView={handleModalView}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                totalSteps={totalSteps}
                onSaveExit={onSaveExit}
            />

            {
                modalProductsVisible || modalDesignVisible || modalFundraisingVisible ?
                <ShadowBlock handleModalView={handleModalView} /> : false
            }

            {modalProductsVisible &&
            <div className="modal-products">
                <ModalProducts handleModalView={handleModalView}/>
            </div>
            }
            {modalDesignVisible &&
            <div>
                <ModalDesign handleModalView={handleModalView}/>
            </div>
            }
            {modalFundraisingVisible &&
            <div>
                <ModalFundraising handleModalView={handleModalView}/>
            </div>
            }
        </div>
    );
}

export default Header;
