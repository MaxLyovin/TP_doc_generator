import { PDFPage, PDFForm } from "pdf-lib";
import { addCellFields } from "../../../../../utils/addCellFields";
import { correctionFor20Cells } from "../../../../constants/corrections";

export const drawPreviousName = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 214, y: 120 },
    dimension: 14,
    cellsAmount: 20,
    cellsSpacing: 18,
    nameBase: "previousName",
    cellsCorrection: correctionFor20Cells,
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 214, y: 86 },
    dimension: 14,
    cellsAmount: 20,
    cellsSpacing: 18,
    nameBase: "previousName",
    indexShift: 20,
    cellsCorrection: correctionFor20Cells,
  });
};
