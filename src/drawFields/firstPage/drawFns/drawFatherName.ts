import { PDFPage, PDFForm } from "pdf-lib";
import { addCellFields } from "../../utils/addCellFields";

export const drawFatherName = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 214, y: 55 },
    dimension: 14,
    cellsAmount: 20,
    cellsSpacing: 18,
    nameBase: "fatherName",
  });
};
