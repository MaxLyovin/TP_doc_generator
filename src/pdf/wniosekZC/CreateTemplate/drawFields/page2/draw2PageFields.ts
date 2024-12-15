import { PDFPage, PDFForm } from "pdf-lib";

import { drawMotherName, drawMotherMaidenName, drawBirthday } from "./drawFns";

export const draw2PageFields = (page: PDFPage, form: PDFForm) => {
  drawMotherName(page, form);
  drawMotherMaidenName(page, form);
  drawBirthday(page, form);
};
