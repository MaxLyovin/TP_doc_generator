import { PDFPage, PDFForm } from "pdf-lib";

import { addCellFields } from "../../../../../utils/addCellFields";
import { correctionFor20Cells } from "../../../../constants/corrections";

export const drawPlaceOfBirth = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 214, y: 640 },
    dimension: 14,
    cellsAmount: 20,
    cellsSpacing: 18,
    nameBase: "placeOfBirth",
    cellsCorrection: correctionFor20Cells,
  });
};
