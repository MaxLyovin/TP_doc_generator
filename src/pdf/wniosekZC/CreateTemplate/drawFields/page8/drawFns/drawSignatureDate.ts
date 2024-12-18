import { PDFPage, PDFForm } from "pdf-lib";
import { drawDateFields } from "../../../../../utils/drawDateFields";

export const drawSignatureDate = (page: PDFPage, form: PDFForm) => {
  drawDateFields({
    page,
    form,
    startPoint: { x: 392, y: 745 },
    dateFieldsBaseNames: {
      year: "signatureYear",
      month: "signatureMonth",
      day: "signatureDay",
    },
    cellsSpacing: 18,
    dateCorrection: 2,
  });
};
