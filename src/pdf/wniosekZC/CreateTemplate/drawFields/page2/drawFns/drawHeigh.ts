import { PDFPage, PDFForm } from 'pdf-lib';

import { addCellFields } from '../../../../../utils/addCellFields';

export const drawHeight = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 214, y: 410 },
    dimension: 14,
    cellsAmount: 3,
    cellsSpacing: 18,
    nameBase: 'height',
  });
};
