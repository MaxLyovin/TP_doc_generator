import { useStepper } from '@/state/hooks/useStepper';
import { StepIndex } from '@/UserDataForm/steps';

import { SubmittionInformationForm } from './components/SubmittionInformationForm/SubmittionInformationForm';
import { PersonalInformationNamesForm } from './components/PersonalInformationForm/PersonalInformationNamesForm';
import { PersonalInformationDetailsForm } from './components/PersonalInformationDetailsForm/PersonalInformationDetailsForm';
import { ContactsForm } from './components/ContactsForm/ContactsForm';
import { ResidencePlaceForm } from './components/ResidencePlaceForm/ResidencePlaceForm';
import { FamilyMembersForm } from './components/FamilyMembers/FamilyMembersForm';
import { StayInPolandDetaisForm } from './components/StayInPolandDetaisForm/StayInPolandDetaisForm';
import { PrevoiusVisits } from './components/PreviousVisits/PrevoiusVisits';

export const SteppedContent = () => {
  const { activeStep } = useStepper();

  const renderStep = () => {
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
      </div>
    );
  };

  return <div>{renderStep()}</div>;
};
