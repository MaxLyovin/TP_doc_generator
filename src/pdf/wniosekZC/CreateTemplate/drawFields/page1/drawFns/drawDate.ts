import { PDFPage, PDFForm } from "pdf-lib";

import { drawDateFields } from "../../../../../utils/drawDateFields";

export const drawSubmittingDate = (page: PDFPage, form: PDFForm) => {
  drawDateFields({
    page,
    form,
    startPoint: { x: 365, y: 690 },
    dateFieldsBaseNames: {
      year: "submitYear",
      month: "submitMonth",
      day: "submitDay",
    },
    cellsSpacing: 20,
    dateCorrection: 3,
  });
};
