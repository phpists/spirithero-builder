import {useState} from 'react';
import FullStepper from './FullStepper';
import StepperControls from './StepperControls';
import './HeaderStyle.css';
import './modals/ModalProducts.css';
import stepsData from '../../data/stepsData';
import ModalProducts from './modals/ModalProducts';
import { useNavigate } from 'react-router-dom';

function Header() {
    const totalSteps = stepsData.length;
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [modalProductsVisible , setModalProductsVisible] = useState(false);
    const navigate = useNavigate();

    const onSaveExit = () => {
        console.log('📝 Saving progress and exiting...');
    };

    const handleModalProductsView = () => setModalProductsVisible(!modalProductsVisible);

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
                handleModalProductsView={handleModalProductsView}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                totalSteps={totalSteps}
                onSaveExit={onSaveExit}
            />

            {modalProductsVisible &&
                <div className="modal-products">
                    <ModalProducts handleModalProductsView={handleModalProductsView} />
                </div>
            }
        </div>
    );
}

export default Header;
