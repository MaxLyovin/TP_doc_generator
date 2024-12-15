import { PDFPage, PDFForm } from "pdf-lib";
import { drawDateFields } from "../../../../../utils/drawDateFields";

export const drawDate = (page: PDFPage, form: PDFForm) => {
  drawDateFields({
    page,
    form,
    startPoint: { x: 365, y: 690 },
    dateFieldsBaseNames: {
      year: "submissionYear",
      month: "submissionMonth",
      day: "submissionDay",
    },
    cellsSpacing: 20,
    dateCorrection: 3,
  });
};
