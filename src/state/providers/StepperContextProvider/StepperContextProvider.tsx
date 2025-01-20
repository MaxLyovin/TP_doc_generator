import { useState } from "react";

import { StepperContext } from "@/state/contexts/StepperContext/StepperContext";

type StepperContextProviderProps = {
  children: React.ReactNode;
  shouldSkipIntoduction: boolean;
};

export const StepperContextProvider = ({
  children,
}: StepperContextProviderProps) => {
  const [activeStep, setActiveStep] = useState(0);

  const goToNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const goToPreviousStep = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <StepperContext.Provider
      value={{
        activeStep,
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
