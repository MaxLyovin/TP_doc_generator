import { useStepper } from "@/state/hooks/useStepper";

import { Wrapper } from "./components/Wrapper";
import { Step } from "./components/Step";

type SteppedNavigationProps = {
  steps: string[];
};

export const SteppedNavigation = ({ steps }: SteppedNavigationProps) => {
  const { activeStep, setActiveStep } = useStepper();

  return (
    <Wrapper stepsAmount={steps.length} activeStepIndex={activeStep}>
      <div className="flex flex-col gap-6">
        {steps.map((step, index) => {
          return (
            <Step
              key={step}
              activeStepIndex={activeStep}
              setActiveStep={() => setActiveStep(index)}
              index={index}
              label={step}
              isLast={index === steps.length - 1}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};
