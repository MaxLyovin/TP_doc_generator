import { PDFPage, PDFForm } from 'pdf-lib';

import { addCellFields } from '../../../../../utils/addCellFields';

export const drawHasLiabilitiesResulting = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 83, y: 188 },
    dimension: 16,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: 'hasLiabilitiesResulting_1',
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 83, y: 75 },
    dimension: 16,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: 'hasLiabilitiesResulting_2',
  });
};
