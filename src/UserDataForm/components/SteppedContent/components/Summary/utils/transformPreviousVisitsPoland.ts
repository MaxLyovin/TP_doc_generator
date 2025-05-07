import { Visit } from '../../PreviousVisits/components/PreviousPolandVisits/PreviousPolandVisits';

export const transformPreviousVisitsPoland = (visits: Visit[]) => {
  return visits.reduce((acc, visit) => `${acc} ${visit.from} ${visit.to} ${visit.legalBase};`, '');
};
