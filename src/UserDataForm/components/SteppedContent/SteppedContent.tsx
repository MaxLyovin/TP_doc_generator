import { useStepper } from "@/state/hooks/useStepper";
import { Button } from "@/components/ui/button";
import { StepIndex } from "@/UserDataForm/steps";
import { SubmittionInformationForm } from "./components/SubmittionInformationForm/SubmittionInformationForm";

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

  if (activeStep === StepIndex.submittionInformation) {
    return <SubmittionInformationForm />;
  }

  if (activeStep === StepIndex.summary) {
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
