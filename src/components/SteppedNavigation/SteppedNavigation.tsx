import { useTranslation } from "react-i18next";

import { useStepper } from "@/state/hooks/useStepper";
import { TranslationKey } from "@/@types/i18next";

import { Wrapper } from "./components/Wrapper";
import { Step } from "./components/Step";

type SteppedNavigationProps = {
  steps: TranslationKey[];
};

export const SteppedNavigation = ({ steps }: SteppedNavigationProps) => {
  const { activeStep, setActiveStep } = useStepper();
  const { t } = useTranslation();

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
              label={t(step)}
              isLast={index === steps.length - 1}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};
