import download from 'downloadjs';

import { getDocumentName } from './getDocumentName';

export const downloadApplicationForm = (pdf: Blob, name?: string, surname?: string) => {
  download(pdf, getDocumentName(name, surname));
};
