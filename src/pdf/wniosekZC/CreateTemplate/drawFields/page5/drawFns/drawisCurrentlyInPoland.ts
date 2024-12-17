import { PDFPage, PDFForm } from "pdf-lib";
import { addCellFields } from "../../../../../utils/addCellFields";

export const drawIsCurrentlyInPoland = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 367, y: 735 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "isCurrentlyInPoland_1",
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 456, y: 735 },
    dimension: 14,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "isCurrentlyInPoland_2",
  });
};
