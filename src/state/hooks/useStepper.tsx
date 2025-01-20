import { useContext } from "react";

import { StepperContext } from "../contexts/StepperContext/StepperContext";

export const useStepper = () => {
  const context = useContext(StepperContext);

  if (context === undefined) {
    throw new Error(
      "useStepper must be used within the StepperContextProvider"
    );
  }

  return context;
};
