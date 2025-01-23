import { useStepper } from "@/state/hooks/useStepper";
import { Button } from "@/components/ui/button";
import { StepIndex } from "@/UserDataForm/steps";
import { SubmittionInformationForm } from "./components/SubmittionInformationForm/SubmittionInformationForm";
import { PersonalInformationNamesForm } from "./components/PersonalInformationForm/PersonalInformationNamesForm";
import { PersonalInformationDetailsForm } from "./components/PersonalInformationDetailsForm/PersonalInformationDetailsForm";
import { ContactsForm } from "./components/ContactsForm/ContactsForm";

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

  if (activeStep === StepIndex.personalInformationNames) {
    return <PersonalInformationNamesForm />;
  }

  if (activeStep === StepIndex.personalInformationDetails) {
    return <PersonalInformationDetailsForm />;
  }

  if (activeStep === StepIndex.contacts) {
    return <ContactsForm />;
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
