import { useState } from 'react';
import './HeaderStyle.css';
import stepsData from '../../data/stepsData';
import { useNavigate } from 'react-router-dom';


function FullStepper({currentStep , completedSteps, setCompletedSteps}) {
    const navigate = useNavigate();

    const toggleStep = (id) => {
        setCompletedSteps((prev) =>
            prev.includes(id)
                ? prev.filter((stepId) => stepId !== id)
                : [...prev, id]
        );
        setCurrentStep(id); // позначити як поточний
    };

    return (
        <div className="stepper-container">
            {stepsData.map((step, index) => {
                let className = 'checkmark ';
                let content = step.id;

                const isCompleted = completedSteps.includes(step.id);
                const isCurrent = currentStep === step.id;

                if (isCompleted) {
                    className += 'done';
                    content = '✔';
                } else if (isCurrent) {
                    className += 'current';
                } else {
                    className += 'upcoming';
                }

                return (
                    <label key={step.id} className="step-block" onClick={() => navigate(`/${step.label}`)}>
                        <input
                            type="checkbox"
                            checked={isCompleted}
                            onChange={() => toggleStep(step.id)}
                        />
                        <span className={className}>{content}</span>
                        <span className="step-label">{step.label}</span>
                    </label>
                );
            })}
        </div>

    );
}

export default FullStepper;
