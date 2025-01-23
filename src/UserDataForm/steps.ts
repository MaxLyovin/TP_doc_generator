import { TranslationKey } from "@/@types/i18next";

export enum StepIndex {
  introduction = 0,
  submittionInformation = 1,
  summary = 2,
}

export const steps: TranslationKey[] = [
  "common.introduction",
  "main_form.step.submittion_information",
  "common.summary",
];
