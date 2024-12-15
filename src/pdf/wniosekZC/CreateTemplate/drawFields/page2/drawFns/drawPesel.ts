import { PDFPage, PDFForm } from "pdf-lib";
import { addCellFields } from "../../../../../utils/addCellFields";
import { correctionFor20Cells } from "../../../../constants/corrections";

export const drawPesel = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 214, y: 322 },
    dimension: 14,
    cellsAmount: 11,
    cellsSpacing: 18,
    nameBase: "pesel",
    cellsCorrection: correctionFor20Cells,
  });
};
