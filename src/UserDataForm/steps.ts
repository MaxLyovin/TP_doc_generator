import { TranslationKey } from '@/@types/i18next';

export enum StepIndex {
  introduction = 0,
  submittionInformation = 1,
  personalInformationNames = 2,
  personalInformationDetails = 3,
  contacts = 4,
  residencePlace = 5,
  stayInPolandDetails = 6,
  previousVisits = 7,
  familyMembers = 8,
  additionalInformation = 9,
  attachments = 10,
}

const stepsTranslations: Record<StepIndex, TranslationKey> = {
  [StepIndex.introduction]: 'common.introduction',
  [StepIndex.submittionInformation]: 'main_form.step.submittion_information',
  [StepIndex.personalInformationNames]: 'main_form.step.personal_information_names',
  [StepIndex.personalInformationDetails]: 'main_form.step.personal_information_details',
  [StepIndex.contacts]: 'main_form.step.contacts',
  [StepIndex.residencePlace]: 'main_form.step.residence_place',
  [StepIndex.stayInPolandDetails]: 'main_form.step.poland_stay_details',
  [StepIndex.previousVisits]: 'main_form.step.previous_visits',
  [StepIndex.familyMembers]: 'main_form.step.family_members',
  [StepIndex.additionalInformation]: 'main_form.step.additional_information',
  [StepIndex.attachments]: 'main_form.step.attachments',
};

export const steps: TranslationKey[] = Object.values(stepsTranslations);
