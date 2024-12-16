import { PDFPage, PDFForm } from "pdf-lib";
import { addCellFields } from "../../../../../utils/addCellFields";

export const drawCprCity = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 192, y: 691 },
    dimension: 14,
    cellsAmount: 20,
    cellsSpacing: 18,
    nameBase: "cprCity",
  });
};
