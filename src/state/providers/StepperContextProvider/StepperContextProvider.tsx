import { useState } from 'react';

import { StepperContext } from '@/state/contexts/StepperContext/StepperContext';
import { StepIndex } from '@/UserDataForm/steps';

type StepperContextProviderProps = {
  children: React.ReactNode;
  shouldSkipIntoduction: boolean;
};

export const StepperContextProvider = ({ children }: StepperContextProviderProps) => {
  const [activeStep, setActiveStep] = useState(StepIndex.introduction);
  const [lastCompletedStep, setLastCompletedStep] = useState(activeStep);
  const nextToComplete = lastCompletedStep + 1;
  const isBrokenSequence = activeStep <= lastCompletedStep && lastCompletedStep > 0;

  const goToNextStep = () => {
    if (!isBrokenSequence) {
      setLastCompletedStep(activeStep);
    }

    setActiveStep(activeStep + 1);
  };

  const goToPreviousStep = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <StepperContext.Provider
      value={{
        activeStep,
        lastCompletedStep,
        nextToComplete,
        isBrokenSequence,
        setActiveStep,
        goToNextStep,
        goToPreviousStep,
        isInroduction: activeStep === 0,
        isFirstStep: activeStep === 1,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};
