import { PDFPage, PDFForm } from "pdf-lib";
import { addCellFields } from "../../utils/addCellFields";

export const drawFamilyNameFields = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 214, y: 214 },
    dimension: 14,
    cellsAmount: 20,
    cellsSpacing: 18,
    nameBase: "familyName",
  });
};
