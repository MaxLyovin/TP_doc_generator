import { TranslationKey } from "@/@types/i18next";

export enum StepIndex {
  introduction = 0,
  submittionInformation = 1,
  personalInformationNames = 2,
  PersonalInformationDetails = 3,
}

export const steps: TranslationKey[] = [
  "common.introduction",
  "main_form.step.submittion_information",
  "main_form.step.personal_information_names",
  "main_form.step.personal_information_details",
];
