import { TranslationKey } from "@/@types/i18next";

export enum YesNo {
  Yes = "1",
  No = "2",
}

export type Option<T = string> = {
  value: T;
  translationKey: TranslationKey;
};

export type OptionList<T = string> = Option<T>[];

export const yesNoOptions: OptionList = [
  { value: YesNo.Yes, translationKey: "common.yes" },
  {
    value: YesNo.No,
    translationKey: "common.no",
  },
];

export const provinceOptions = [
  "mazowieckie",
  "zachodniopomorskie",
  "pomorskie",
  "warminskoMazurskie",
  "lubuskie",
  "wielkopolskie",
  "kujawskoPomorskie",
  "podlaskie",
  "dolnoslaskie",
  "lodzkie",
  "lubelskie",
  "opolskie",
  "slaskie",
  "swietokrzyskie",
  "malopolskie",
  "podkarpackie",
] as const;

export const legalBaseForStayingOptions: OptionList = [
  { value: "1", translationKey: "legal_basis.visafree_regime" },
  { value: "2", translationKey: "legal_basis.visa" },
  { value: "3", translationKey: "legal_basis.temporary_residence_permit" },
  {
    value: "4",
    translationKey: "legal_basis.other_schengen_document",
  },
];

export const sexOptions = ["K", "M"] as const;

export const otherPurposeValue = "16";

export const stayPurposeOptions: OptionList = [
  { value: "1", translationKey: "stayPurpose.paidActivity" },
  {
    value: "2",
    translationKey: "stayPurpose.highQualifications",
  },
  {
    value: "3",
    translationKey: "stayPurpose.foreignerDelegated",
  },
  {
    value: "4",
    translationKey: "stayPurpose.businessActivity",
  },
  {
    value: "5",
    translationKey: "stayPurpose.study",
  },
  {
    value: "6",
    translationKey: "stayPurpose.researchOrDevelopment",
  },
  {
    value: "7",
    translationKey: "stayPurpose.researcher",
  },
  {
    value: "8",
    translationKey: "stayPurpose.training",
  },
  {
    value: "9",
    translationKey: "stayPurpose.voluntary",
  },
  {
    value: "10",
    translationKey: "stayPurpose.citizenStay",
  },
  {
    value: "11",
    translationKey: "stayPurpose.foreignerStay",
  },
  {
    value: "12",
    translationKey: "stayPurpose.familyMemberResearcher",
  },
  {
    value: "13",
    translationKey: "stayPurpose.humanTrafficking",
  },
  {
    value: "14",
    translationKey: "stayPurpose.shortTermStay",
  },
  {
    value: "15",
    translationKey: "stayPurpose.extensionStay",
  },
  {
    value: otherPurposeValue,
    translationKey: "stayPurpose.other",
  },
];

export const stayPurposes = [
  "highQualifications",
  "foreignerDelegated",
  "businessActivity",
  "study",
  "researchOrDevelopment",
  "researcher",
  "training",
  "voluntary",
  "citizenStay",
  "foreignerStay",
  "familyMemberResearcher",
  "humanTrafficking",
  "shortTermStay",
  "extensionStay",
  "other",
] as const;
