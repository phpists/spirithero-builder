import {useState} from 'react';
import { Link } from 'react-router-dom';
import FullStepper from './FullStepper';
import StepperControls from './StepperControls';
import './HeaderStyle.css';
import stepsData from '../../data/stepsData';

function Header() {
    const totalSteps = stepsData.length;
    const [currentStep, setCurrentStep] = useState(1);
    const [completedSteps, setCompletedSteps] = useState([]);

    const onSaveExit = () => {
        console.log('📝 Saving progress and exiting...');
    };

    return (
        <div className="header-block">
            <img src="./src/assets/1d100ec1735bd3c6ce13a7995558da124a97d691.png" width={186} height={41} alt="Банер" />
            <FullStepper
                currentStep={currentStep}
                completedSteps={completedSteps}
                setCompletedSteps={setCompletedSteps}
            />
            <StepperControls
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                totalSteps={totalSteps}
                onSaveExit={onSaveExit}
            />
            {/*<nav>*/}
                {/*<Link to="/">Main</Link>*/}
                {/*<Link to="/Details">Details</Link>*/}
                {/*<Link to="/Products">Products</Link>*/}
            {/*</nav>*/}
        </div>
    );
}

export default Header;
