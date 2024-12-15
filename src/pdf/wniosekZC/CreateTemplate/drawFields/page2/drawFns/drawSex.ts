import { PDFPage, PDFForm } from "pdf-lib";

import { addCellFields } from "../../../../../utils/addCellFields";

export const drawSex = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 214, y: 670 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "sex",
  });
};
