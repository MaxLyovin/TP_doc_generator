import { createContext } from "react";

type StepperContextProps = {
  activeStep: number;
  lastCompletedStep: number;
  nextToComplete: number;
  isInroduction: boolean;
  isFirstStep: boolean;
  isBrokenSequence: boolean;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
};

export const StepperContext = createContext<StepperContextProps | undefined>(
  undefined
);
