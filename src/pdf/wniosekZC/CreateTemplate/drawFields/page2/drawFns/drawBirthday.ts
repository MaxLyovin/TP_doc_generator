import { PDFPage, PDFForm } from "pdf-lib";
import { drawDateFields } from "../../../../../utils/drawDateFields";

export const drawBirthday = (page: PDFPage, form: PDFForm) => {
  drawDateFields({
    page,
    form,
    startPoint: { x: 214, y: 715 },
    dateFieldsBaseNames: {
      year: "birthdayYear",
      month: "birthdayMonth",
      day: "birthdayDay",
    },
  });
};
