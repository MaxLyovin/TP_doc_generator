import { PDFPage, PDFForm } from "pdf-lib";

const familyMembersAmount = 6;
const yShiftBetweenMembers = 36;
const getYshift = (n: number) => yShiftBetweenMembers * (n - 1);
const firstMemberStartPoint = { x: 56, y: 419 };

export const drawFamilyMembers = (page: PDFPage, form: PDFForm) => {
  const familyFieldIdsBase = {
    nameAndSurname: "familyMemberNameAndSurname",
    sex: "familyMemberSex",
    birthday: "familyMemberBirthday",
    kinDegree: "familyMemberKinDegree",
    citizenShip: "familyMemberCitizenShip",
    residence: "familyMemberResidence",
    isApplyingTP: "familyMemberIsApplyingTP",
    issDependent: "familyMemberIsDependent",
  };

  const drawFamilyMember = (orderNumber: number) => {
    const yShift = getYshift(orderNumber);
    const nameAndSurname = form.createTextField(
      `${familyFieldIdsBase.nameAndSurname}_${orderNumber}`
    );

    nameAndSurname.enableMultiline();

    nameAndSurname.addToPage(page, {
      x: firstMemberStartPoint.x,
      y: firstMemberStartPoint.y - yShift,
      height: 30,
      width: 80,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    const sex = form.createTextField(
      `${familyFieldIdsBase.sex}_${orderNumber}`
    );

    sex.addToPage(page, {
      x: firstMemberStartPoint.x + 90,
      y: firstMemberStartPoint.y - yShift,
      height: 16,
      width: 16,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    const birthday = form.createTextField(
      `${familyFieldIdsBase.birthday}_${orderNumber}`
    );

    birthday.addToPage(page, {
      x: firstMemberStartPoint.x + 115,
      y: firstMemberStartPoint.y - yShift,
      height: 16,
      width: 54,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    const kinDegree = form.createTextField(
      `${familyFieldIdsBase.kinDegree}_${orderNumber}`
    );

    kinDegree.addToPage(page, {
      x: firstMemberStartPoint.x + 173,
      y: firstMemberStartPoint.y - yShift,
      height: 16,
      width: 50,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    const citizenShip = form.createTextField(
      `${familyFieldIdsBase.citizenShip}_${orderNumber}`
    );

    citizenShip.enableMultiline();

    citizenShip.addToPage(page, {
      x: firstMemberStartPoint.x + 228,
      y: firstMemberStartPoint.y - yShift,
      height: 30,
      width: 53,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    const residence = form.createTextField(
      `${familyFieldIdsBase.residence}_${orderNumber}`
    );

    residence.enableMultiline();

    residence.addToPage(page, {
      x: firstMemberStartPoint.x + 287,
      y: firstMemberStartPoint.y - yShift,
      height: 30,
      width: 58,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    const isApplyingTP = form.createTextField(
      `${familyFieldIdsBase.isApplyingTP}_${orderNumber}`
    );

    isApplyingTP.addToPage(page, {
      x: firstMemberStartPoint.x + 365,
      y: firstMemberStartPoint.y - yShift,
      height: 16,
      width: 50,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    const issDependent = form.createTextField(
      `${familyFieldIdsBase.issDependent}_${orderNumber}`
    );

    issDependent.addToPage(page, {
      x: firstMemberStartPoint.x + 445,
      y: firstMemberStartPoint.y - yShift,
      height: 16,
      width: 50,
      backgroundColor: undefined,
      borderColor: undefined,
    });
  };

  for (let index = 1; index <= familyMembersAmount; index++) {
    drawFamilyMember(index);
  }
};
