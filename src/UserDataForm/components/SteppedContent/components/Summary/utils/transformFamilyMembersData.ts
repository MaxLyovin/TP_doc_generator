import { FamilyMember } from '@/@types/userData';

export const transformFamilyMembersData = (familyMembers: FamilyMember[]) =>
  familyMembers.reduce((acc, member, index) => {
    const memberOrderNumber = index + 1;

    return {
      ...acc,
      ['familyMemberNameAndSurname_' + memberOrderNumber]: member.name,
      ['familyMemberSex_' + memberOrderNumber]: member.sex,
      ['familyMemberBirthday_' + memberOrderNumber]: member.birthday,
      ['familyMemberKinDegree_' + memberOrderNumber]: member.kinship,
      ['familyMemberCitizenShip_' + memberOrderNumber]: member.citizenship,
      ['familyMemberResidence_' + memberOrderNumber]: member.residencePlace,
      ['familyMemberIsApplyingTP_' + memberOrderNumber]: member.isApplying,
      ['familyMemberIsDependent_' + memberOrderNumber]: member.isDependent,
    };
  }, {});
