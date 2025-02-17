import { useStepper } from "@/state/hooks/useStepper";
import { Button } from "@/components/ui/button";
import { StepIndex } from "@/UserDataForm/steps";
import { SubmittionInformationForm } from "./components/SubmittionInformationForm/SubmittionInformationForm";
import { PersonalInformationNamesForm } from "./components/PersonalInformationForm/PersonalInformationNamesForm";
import { PersonalInformationDetailsForm } from "./components/PersonalInformationDetailsForm/PersonalInformationDetailsForm";
import { ContactsForm } from "./components/ContactsForm/ContactsForm";
import { ResidencePlaceForm } from "./components/ResidencePlaceForm/ResidencePlaceForm";
import { AdditionalInformationForm } from "./components/AdditionalInformationForm/AdditionalInformationForm";
import { FamilyMembersForm } from "./components/FamilyMembers/FamilyMembersForm";
import { StayInPolandDetaisForm } from "./components/StayInPolandDetaisForm/StayInPolandDetaisForm";
import { PrevoiusVisits } from "./components/PreviousVisits/PrevoiusVisits";

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

	if (activeStep === StepIndex.residencePlace) {
		return <ResidencePlaceForm />;
	}

	if (activeStep === StepIndex.additionalInformation) {
		return <AdditionalInformationForm />;
	}

	if (activeStep === StepIndex.familyMembers) {
		return <FamilyMembersForm />;
	}
	if (activeStep === StepIndex.stayInPolandDetails) {
		return <StayInPolandDetaisForm />;
	}

	if (activeStep === StepIndex.previousVisits) {
		return <PrevoiusVisits />;
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
