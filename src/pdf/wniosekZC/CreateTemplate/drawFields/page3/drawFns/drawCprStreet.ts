import { PDFPage, PDFForm } from "pdf-lib";
import { addCellFields } from "../../../../../utils/addCellFields";

export const drawCprStreet = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 192, y: 660 },
    dimension: 14,
    cellsAmount: 20,
    cellsSpacing: 18,
    nameBase: "cprStreet",
  });
};
