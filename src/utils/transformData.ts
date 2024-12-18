export const dataMapFullToShort = {
  surname: "A.S",
  name: "A.N",
  familyName: "A.SF",
};

export const dataMapShortToFull = {
  "A.S": "surname",
  "A.N": "name",
  "A.SF": "familyName",
};

export const dataMap = Object.assign(dataMapFullToShort, dataMapShortToFull);

export const transformData = (data: Partial<typeof dataMap>) =>
  Object.fromEntries(
    Object.entries(data).map(([key, value]) => [dataMap[key] || key, value])
  );

export const dataMapWithMeta = {
  submittingCity: { shortName: "", cellsAmount: 1 },
  wojewoda: { shortName: "", cellsAmount: 1 },
  surname: { shortName: "A.S", cellsAmount: 20 },
  previousSurname: { shortName: "", cellsAmount: 40 },
  familyName: { shortName: "A.SF", cellsAmount: 20 },
  name: { shortName: "A.N", cellsAmount: 20 },
  previousName: { shortName: "", cellsAmount: 40 },
  fatherName: { shortName: "", cellsAmount: 20 },
  motherName: { shortName: "", cellsAmount: 20 },
  motherMaidenName: { shortName: "", cellsAmount: 20 },
  birthdayYear: { shortName: "", cellsAmount: 4 },
  birthdayMonth: { shortName: "", cellsAmount: 2 },
  birthdayDay: { shortName: "", cellsAmount: 2 },
  sex: { shortName: "", cellsAmount: 1 },
  placeOfBirth: { shortName: "", cellsAmount: 20 },
  countryOfBirth: { shortName: "", cellsAmount: 20 },
  nationality: { shortName: "", cellsAmount: 20 },
  citizenship: { shortName: "", cellsAmount: 20 },
  martialStatus: { shortName: "", cellsAmount: 20 },
  education: { shortName: "", cellsAmount: 20 },
  heigh: { shortName: "", cellsAmount: 3 },
  colourOfEyes: { shortName: "", cellsAmount: 20 },
  specialMarks: { shortName: "", cellsAmount: 20 },
  pesel: { shortName: "", cellsAmount: 1 },
  phone: { shortName: "", cellsAmount: 20 },
  email: { shortName: "", cellsAmount: 20 },
  isFamilyMemberOutsidePoland: { shortName: "", cellsAmount: 1 },
  cprVoivodship: { shortName: "", cellsAmount: 20 },
  cprCity: { shortName: "", cellsAmount: 20 },
  cprStreet: { shortName: "", cellsAmount: 20 },
  cprHouseNumber: { shortName: "", cellsAmount: 7 },
  cprApartmentNumber: { shortName: "", cellsAmount: 7 },
  cprPostalCode: { shortName: "", cellsAmount: 6 },
  stayPurpose: { shortName: "", cellsAmount: 1, type: "select" },
  stayPurposeAdditional: { shortName: "", cellsAmount: 1 },
  familyMemberNameAndSurname_1: { shortName: "", cellsAmount: 1 },
  familyMemberSex_1: { shortName: "", cellsAmount: 1 },
  familyMemberBirthday_1: { shortName: "", cellsAmount: 1 },
  familyMemberKinDegree_1: { shortName: "", cellsAmount: 1 },
  familyMemberCitizenShip_1: { shortName: "", cellsAmount: 1 },
  familyMemberResidence_1: { shortName: "", cellsAmount: 1 },
  familyMemberIsApplyingTP_1: { shortName: "", cellsAmount: 1 },
  familyMemberIsDependent_1: { shortName: "", cellsAmount: 1 },
} as const;

export const docxCells = Object.values(dataMapWithMeta).reduce(
  (acc: string[], { cellsAmount, shortName }) => {
    const cells: string[] = [];
    for (let index = 0; index <= cellsAmount; index++) {
      cells.push(`${shortName}_${index}`);
    }
    return [...acc, ...cells];
  },
  []
);
