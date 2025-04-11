import { TranslationKey } from "@/@types/i18next";

export enum StepIndex {
  introduction = 0,
  submittionInformation = 1,
  personalInformationNames = 2,
  personalInformationDetails = 3,
  contacts = 4,
  residencePlace = 5,
  additionalInformation = 6,
  familyMembers = 7,
  stayInPolandDetails = 8,
  previousVisits = 9,
}

export const steps: TranslationKey[] = [
  "common.introduction",
  "main_form.step.submittion_information",
  "main_form.step.personal_information_names",
  "main_form.step.personal_information_details",
  "main_form.step.contacts",
  "main_form.step.residence_place",
  "main_form.step.additional_information",
  "main_form.step.family_members",
  "main_form.step.poland_stay_details",
  "main_form.step.previous_visits",
];
