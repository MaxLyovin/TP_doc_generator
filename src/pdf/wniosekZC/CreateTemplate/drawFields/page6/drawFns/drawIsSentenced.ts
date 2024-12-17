import { PDFPage, PDFForm } from "pdf-lib";
import { addCellFields } from "../../../../../utils/addCellFields";

export const drawIsSentenced = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 83, y: 620 },
    dimension: 16,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "isSentenced_1",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 83, y: 515 },
    dimension: 16,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "isSentenced_2",
  });
};
