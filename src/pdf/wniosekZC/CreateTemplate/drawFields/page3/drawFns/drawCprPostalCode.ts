import { PDFPage, PDFForm } from "pdf-lib";
import { addCellFields } from "../../../../../utils/addCellFields";

export const drawCprPostalCode = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 192, y: 562 },
    dimension: 14,
    cellsAmount: 6,
    cellsSpacing: 18,
    nameBase: "cprPostalCode",
  });
};
