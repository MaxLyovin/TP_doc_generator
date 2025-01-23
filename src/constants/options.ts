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

export const provinceTranslationKeys = [
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

export const stayPurposeOptions: { value: string; label: string }[] = [
  { value: "1", label: "wykonywanie pracy" },
  {
    value: "2",
    label: "wykonywanie pracy w zawodzie wymagającym wysokich kwalifikacji",
  },
  {
    value: "3",
    label:
      "wykonywanie pracy przez cudzoziemca delegowanego przez pracodawcę zagranicznego na terytorium Rzeczypospolitej Polskiej",
  },
  {
    value: "4",
    label: "prowadzenie działalności gospodarczej",
  },
  {
    value: "5",
    label: "podjęcie lub kontynuacja stacjonarnych",
  },
  {
    value: "6",
    label: "prowadzenie badań naukowych lub prac rozwojowych",
  },
  {
    value: "7",
    label: "mobilność długoterminowa naukowca",
  },
  {
    value: "8",
    label: "odbycie stażu",
  },
  {
    value: "9",
    label: "udział w programie wolontariatu europejskiego",
  },
  {
    value: "10",
    label: "pobyt z obywatelem Rzeczypospolitej Polskiej",
  },
  {
    value: "11",
    label: "pobyt z cudzoziemcem",
  },
  {
    value: "12",
    label: "mobilność długoterminowa członka rodziny naukowca/",
  },
  {
    value: "13",
    label: "okoliczności związane z byciem ofiarą handlu ludźmi",
  },
  {
    value: "14",
    label:
      "okoliczności wymagające krótkotrwałego pobytu na terytorium Rzeczypospolitej Polskiej",
  },
  {
    value: "15",
    label:
      "przedłużenie pobytu na terytorium Rzeczypospolitej Polskiej ze względu na pracę sezonową",
  },
  {
    value: "16",
    label: "inne",
  },
];
