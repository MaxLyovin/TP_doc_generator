import { useStepper } from "@/state/hooks/useStepper";
import { Button } from "@/components/ui/button";
import { Eye, Pencil } from "lucide-react";
import { StepIndexState } from "./StepIndex";
import { StepIndex } from "./StepIndex";

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
  const { activeStep } = useStepper();

  const isIntroduction = index === 0;
  const orderNumber = index;
  const isStepCompleted = index < activeStep;

  const getStepIndexState = (): StepIndexState => {
    if (isStepCompleted) return "completed";
    if (index > activeStep) return "inactive";
    return "active";
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
          <p className="text-lg font-semibold">{label}</p>
          {isStepCompleted && (
            <Button
              variant="outline"
              data-testid={isIntroduction ? "action-preview" : "action-edit"}
              onClick={() => {
                setActiveStep();
              }}
            >
              {isIntroduction ? <Eye /> : <Pencil />}
              {isIntroduction ? "view" : "edit"}
            </Button>
          )}
        </div>
      </div>
      {!isLast && <div className="w-[2px] ms-4 h-[24px]  bg-slate-700" />}
    </>
  );
};
