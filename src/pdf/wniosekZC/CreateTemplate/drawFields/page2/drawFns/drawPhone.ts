import { PDFPage, PDFForm } from "pdf-lib";
import { addCellFields } from "../../../../../utils/addCellFields";
import { correctionFor20Cells } from "../../../../constants/corrections";

export const drawPhone = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 214, y: 277 },
    dimension: 14,
    cellsAmount: 20,
    cellsSpacing: 18,
    nameBase: "phone",
    cellsCorrection: correctionFor20Cells,
  });
};
