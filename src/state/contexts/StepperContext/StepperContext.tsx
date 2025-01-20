import { createContext } from "react";

type StepperContextProps = {
  activeStep: number;
  isInroduction: boolean;
  isFirstStep: boolean;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
};

export const StepperContext = createContext<StepperContextProps | undefined>(
  undefined
);
