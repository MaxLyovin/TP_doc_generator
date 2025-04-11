import { PDFPage, PDFForm } from "pdf-lib";

import { addCellFields } from "../../../../../utils/addCellFields";
import { correctionFor20Cells } from "../../../../constants/corrections";

export const drawPreviousSurnameFields = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 214, y: 278 },
    dimension: 14,
    cellsAmount: 20,
    cellsSpacing: 18,
    nameBase: "previousSurname",
    cellsCorrection: correctionFor20Cells,
  });

  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 214, y: 245 },
    dimension: 14,
    cellsAmount: 20,
    cellsSpacing: 18,
    nameBase: "previousSurname",
    indexShift: 20,
    cellsCorrection: correctionFor20Cells,
  });
};
