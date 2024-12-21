export const fields = {
  // Section 0
  submitPlace: "0.S.P",
  submitYear: "0.S.Y",
  submitMonth: "0.S.M",
  submitDay: "0.S.D",
  submitAuthority: "0.S.D",

  // Section A
  surname: "A.1",
  previousSurname: "A.2",
  familyName: "A.3",
  name: "A.4",
  previousName: "A.5",
  fatherName: "A.6",
  motherName: "A.7",
  motherMaidenName: "A.8",
  birthdayYear: "A.9.Y",
  birthdayMonth: "A.9.M",
  birthdayDay: "A.9.D",
  sex: "A.10",
  placeOfBirth: "A.11",
  countryOfBirth: "A.12",
  nationality: "A.13",
  citizenship: "A.14",
  martialStatus: "A.15",
  education: "A.16",
  heigh: "A.17.H",
  colourOfEyes: "A.17.E",
  specialMarks: "A.17.S",
  pesel: "A.18",
  phone: "A.19",
  email: "A.20",

  // Section B  cpr - current place of residence
  isFamilyMemberOutsidePoland: "B.?",
  cprVoivodship: "B.1",
  cprCity: "B.2",
  cprStreet: "B.3",
  cprHouseNumber: "B.4",
  cprApartmentNumber: "B.5",
  cprPostalCode: "B.6",

  // Section C
  stayPurpose: "C.I",
  stayPurposeAdditional: "C.I.A",

  // familyMembers - start

  //first
  familyMemberNameAndSurname_1: "1.M.NS",
  familyMemberSex_1: "1.M.S",
  familyMemberBirthday_1: "1.M.B",
  familyMemberKinDegree_1: "1.M.KD",
  familyMemberCitizenShip_1: "1.M.C",
  familyMemberResidence_1: "1.M.R",
  familyMemberIsApplyingTP_1: "1.M.?.A",
  familyMemberIsDependent_1: "1.M.?.D",

  //first
  familyMemberNameAndSurname_2: "2.M.NS",
  familyMemberSex_2: "2.M.S",
  familyMemberBirthday_2: "2.M.B",
  familyMemberKinDegree_2: "2.M.KD",
  familyMemberCitizenShip_2: "2.M.C",
  familyMemberResidence_2: "2.M.R",
  familyMemberIsApplyingTP_2: "2.M.?.A",
  familyMemberIsDependent_2: "2.M.?.D",

  //first
  familyMemberNameAndSurname_3: "3.M.NS",
  familyMemberSex_3: "3.M.S",
  familyMemberBirthday_3: "3.M.B",
  familyMemberKinDegree_3: "3.M.KD",
  familyMemberCitizenShip_3: "3.M.C",
  familyMemberResidence_3: "3.M.R",
  familyMemberIsApplyingTP_3: "3.M.?.A",
  familyMemberIsDependent_3: "3.M.?.D",

  //first
  familyMemberNameAndSurname_4: "4.M.NS",
  familyMemberSex_4: "4.M.S",
  familyMemberBirthday_4: "4.M.B",
  familyMemberKinDegree_4: "4.M.KD",
  familyMemberCitizenShip_4: "4.M.C",
  familyMemberResidence_4: "4.M.R",
  familyMemberIsApplyingTP_4: "4.M.?.A",
  familyMemberIsDependent_4: "4.M.?.D",

  //first
  familyMemberNameAndSurname_5: "5.M.NS",
  familyMemberSex_5: "5.M.S",
  familyMemberBirthday_5: "5.M.B",
  familyMemberKinDegree_5: "5.M.KD",
  familyMemberCitizenShip_5: "5.M.C",
  familyMemberResidence_5: "5.M.R",
  familyMemberIsApplyingTP_5: "5.M.?.A",
  familyMemberIsDependent_5: "5.M.?.D",

  //first
  familyMemberNameAndSurname_6: "6.M.NS",
  familyMemberSex_6: "6.M.S",
  familyMemberBirthday_6: "6.M.B",
  familyMemberKinDegree_6: "6.M.KD",
  familyMemberCitizenShip_6: "6.M.C",
  familyMemberResidence_6: "6.M.R",
  familyMemberIsApplyingTP_6: "6.M.?.A",
  familyMemberIsDependent_6: "6.M.?.D",

  // familyMembers - end

  previousVisitsPoland: "C.3.A",
  isCurrentlyInPoland: "C.3.B.1",
  lastEntryIntoPolandYear: "C.3.B.2.Y",
  lastEntryIntoPolandMonth: "C.3.B.2.M",
  lastEntryIntoPolandDay: "C.3.B.2.D",

  legalBasisForStaying: "C.3.B.3",
  travelsOutsidePoland: "C.4",
  meansOfSubstence: "C.5",
  medicalInsurance: "C.6",
  clauseDLRS: "C.7", // DLRS-  Detention or Legal Restrictions Status
  isSentenced: "C.8.?",
  sentencedDescription: "C.8.D",
  isSubjectOfCriminal: "C.9.?",
  subjectOfCriminalDescription: "C.9.D",
  hasLiabilitiesResulting: "C.10.?",
  liabilitiesResultingDescription: "C.10.D",

  // Signature
  signatureYear: "S.Y",
  signatureMonth: "S.M",
  signatureDay: "S.D",

  // Attachments
  attachment_1: "+_1",
  attachment_2: "+_2",
  attachment_3: "+_3",
  attachment_4: "+_4",
  attachment_5: "+_5",
  attachment_6: "+_6",
  attachment_7: "+_7",
  attachment_8: "+_8",
  attachment_9: "+_9",
  attachment_10: "+_10",
  attachment_11: "+_11",
  attachment_12: "+_12",
  attachment_13: "+_13",
  attachment_14: "+_14",
  attachment_15: "+_15",
};

export type FieldNames = keyof typeof fields;
