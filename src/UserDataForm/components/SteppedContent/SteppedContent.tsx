import { useStepper } from "@/state/hooks/useStepper";
import { Button } from "@/components/ui/button";

const Buttons = () => {
  const { goToNextStep, goToPreviousStep } = useStepper();

  return (
    <div>
      <Button onClick={goToPreviousStep}>previous</Button>
      <Button onClick={goToNextStep}>next</Button>
    </div>
  );
};

export const SteppedContent = () => {
  const { activeStep } = useStepper();

  if (activeStep === 1) {
    return (
      <div className="flex flex-col gap-4">
        <div>First step</div>
        <div>
          <Buttons />
        </div>
      </div>
    );
  }

  if (activeStep === 2) {
    return (
      <div className="flex flex-col gap-4">
        <div>Second step</div>
        <div>
          <Buttons />
        </div>
      </div>
    );
  }

  if (activeStep === 3) {
    return (
      <div className="flex flex-col gap-4">
        <div>Third step</div>
        <div>
          <Buttons />
        </div>
      </div>
    );
  }

  if (activeStep === 4) {
    return (
      <div className="flex flex-col gap-4">
        <div>Summary</div>
        <div>
          <Buttons />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div>Intro</div>
      <div>
        <Buttons />
      </div>
    </div>
  );
};
