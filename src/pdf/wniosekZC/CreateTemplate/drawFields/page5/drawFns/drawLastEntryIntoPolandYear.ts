import { PDFPage, PDFForm } from "pdf-lib";

import { drawDateFields } from "../../../../../utils/drawDateFields";

export const drawLastEntryIntoPolandYear = (page: PDFPage, form: PDFForm) => {
  drawDateFields({
    page,
    form,
    startPoint: { x: 360, y: 705 },
    dateCorrection: 1,
    dateFieldsBaseNames: {
      day: "lastEntryIntoPolandDay",
      month: "lastEntryIntoPolandMonth",
      year: "lastEntryIntoPolandYear",
    },
  });
};
