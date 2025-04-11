import { PDFPage, PDFForm } from "pdf-lib";

import { addCellFields } from "../../../../../utils/addCellFields";

export const drawCprApartmentNumber = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 192, y: 594 },
    dimension: 14,
    cellsAmount: 7,
    cellsSpacing: 18,
    nameBase: "cprApartmentNumber",
  });
};
