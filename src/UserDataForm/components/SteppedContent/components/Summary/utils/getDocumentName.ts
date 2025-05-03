import { formatDate } from '@/utils/dates/formatDate';

const documentName = 'application_form';

export const getDocumentName = (name?: string, surname?: string) => {
  return `${documentName}_${name ?? ''}_${surname ?? ''}_${formatDate(new Date())}.pdf`;
};
