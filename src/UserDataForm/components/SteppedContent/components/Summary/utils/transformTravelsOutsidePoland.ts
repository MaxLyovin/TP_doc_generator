import { Travel } from '../../PreviousVisits/components/TravelsOutsidePoland/TravelsOutsidePoland';

export const transformTravelsOutsidePoland = (travels: Travel[]) => {
  return travels.reduce((acc, visit) => `${acc} ${visit.from} ${visit.to} ${visit.country};`, '');
};
