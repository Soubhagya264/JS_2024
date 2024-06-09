
/* eslint-disable  */
import { useEffect, useRef, useState } from "react";
const CheckoutStepper = ({ stepConfig = [] }) => {
    const [currentStep, setCurrentStep] = useState(2);
    const [isComplete, setIsComplete] = useState(false);
    const ActiveComponent = stepConfig[currentStep - 1]?.Component;
    const [margins, setMargins] = useState({
        marginLeft: 0,
        marginRight: 0,
    });
    const stepRef = useRef([]); 
    if (!stepConfig.length) {
        return null
    }
    const handleNext = () => {
        setCurrentStep(previousStep => {
            if (previousStep === stepConfig.length) {
                setIsComplete(true);
                return previousStep
            }
            else {
                return previousStep + 1
            }
        })
    }
    const calculateProgressBarWidth = () => {
        return ((currentStep - 1) / (stepConfig.length - 1)) * 100;
    }
    return (
        <>
            <div className="stepper">
                {
                    stepConfig.map((step, index) => {
                        return (
                            <div className={`step ${currentStep > index + 1 || isComplete ? "complete" : ""} ${currentStep === index + 1 ? "active" : ""}`} key={step.name}>
                                <div className="step-number">
                                    {currentStep > index + 1 || isComplete ? (
                                        <span>&#10003;</span>
                                    ) : (
                                        index + 1
                                    )}
                                </div>
                                <div className="step-name">{step.name}</div>
                            </div>
                        )
                    })
                }
                <div className="progress-bar"
                    style={{
                        width: `calc(100%-${margins.marginLeft + margins.marginRight}px)`,
                        marginLeft: margins.marginLeft,
                        marginRight: margins.marginRight,
                    }}
                >
                    <div
                        className="progress"
                        style={{ width: `${calculateProgressBarWidth()}%` }}></div>
                </div>
            </div>
            <ActiveComponent />
            <br />
            <button className="btn" onClick={handleNext} >{currentStep === stepConfig.length ? "Finished" : "Next"}</button>
        </>
    );
}

export default CheckoutStepper;
