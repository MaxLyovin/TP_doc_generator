import { TranslationKey } from "@/@types/i18next";

export enum YesNo {
  Yes = "1",
  No = "2",
}

export const yesNoOptions = [
  { value: YesNo.Yes, label: "yes" },
  {
    value: YesNo.No,
    label: "no",
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

export const legalBaseForStayingOptions: { value: string; label: string }[] = [
  { value: "1", label: "ruchu bezwizowego" },
  { value: "2", label: "wizy" },
  { value: "3", label: "zezwolenia na pobyt czasowy" },
  {
    value: "4",
    label:
      "dokumentu uprawniającego do wjazdu i pobytu wydanego przez inne państwo obszaru Schengen",
  },
];

export const sexOptions = ["K", "M"] as const;

export const otherPurposeValue = "16";

export const stayPurposeOptions: {
  value: string;
  translationKey: TranslationKey;
}[] = [
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
