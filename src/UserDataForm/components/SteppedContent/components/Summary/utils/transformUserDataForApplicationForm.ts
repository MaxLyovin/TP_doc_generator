import { UserData } from '@/@types/userData';

import { transformFamilyMembersData } from './transformFamilyMembersData';
import { transformAttachmentsList } from './transformAttachmentsList';
import { transformPreviousVisitsPoland } from './transformPreviousVisitsPoland';
import { transformTravelsOutsidePoland } from './transformTravelsOutsidePoland';

export const transformUserDataForApplicationForm = (data: UserData) => {
  const { familyMemebers, attachmentsList, ...rest } = data;
  const transformedFamilyMembers = transformFamilyMembersData(data.familyMemebers ?? []);
  const transformedAttachmentsList = transformAttachmentsList(data.attachmentsList ?? []);
  return {
    ...rest,
    ...transformedFamilyMembers,
    ...transformedAttachmentsList,
    previousVisitsPoland: transformPreviousVisitsPoland(data.previousVisitsPoland ?? []),
    travelsOutsidePoland: transformTravelsOutsidePoland(data.travelsOutsidePoland ?? []),
    signatureDate: data.submitDate,
  };
};
