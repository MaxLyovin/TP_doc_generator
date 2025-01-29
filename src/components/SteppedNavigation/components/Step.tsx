import { useStepper } from "@/state/hooks/useStepper";
import { StepIndexState } from "./StepIndex";
import { StepIndex } from "./StepIndex";
import { ActionButton } from "./ActionButton/ActionButton";

type StepProps = {
  index: number;
  activeStepIndex: number;
  label: string;
  setActiveStep: () => void;
  isLast?: boolean;
};

export const Step = ({
  index,
  label,
  setActiveStep,
  isLast = false,
}: StepProps) => {
  const { activeStep, lastCompletedStep, nextToComplete, isBrokenSequence } =
    useStepper();

  const isIntroduction = index === 0;
  const orderNumber = index;
  const isStepCompleted = index <= lastCompletedStep;
  const isNextToComplete = nextToComplete === index;
  const shouldShowContinueButton = isBrokenSequence && isNextToComplete;
  const isActive = index === activeStep;

  console.log(isBrokenSequence);

  const getStepIndexState = (): StepIndexState => {
    if (isActive) return "active";
    if (isStepCompleted) return "completed";
    return "inactive";
  };

  return (
    <>
      <div className="flex content-center gap-4">
        <StepIndex
          data-testid={`stepIndex-${getStepIndexState()}`}
          state={getStepIndexState()}
          orderNumber={orderNumber}
        />
        <div className="flex justify-between items-center flex-grow">
          <p
            className={`text-lg font-semibold ${
              isActive ? "underline underline-offset-4" : ""
            }`}
          >
            {label}
          </p>
          <ActionButton
            action={setActiveStep}
            isIntroduction={isIntroduction}
            isStepCompleted={isStepCompleted}
            shouldShowContinueButton={shouldShowContinueButton}
          />
        </div>
      </div>
      {!isLast && <div className="w-[2px] ms-4 h-[24px]  bg-slate-700" />}
    </>
  );
};
