import { PDFPage, PDFForm } from "pdf-lib";

import {
  drawSubmittingCity,
  drawSubmittingDate,
  drawWojewodaField,
  drawSurnameFields,
  drawPreviousSurnameFields,
  drawFamilyNameFields,
  drawNameFields,
  drawPreviousName,
  drawFatherName,
} from "./drawFns";

export const draw1PageFields = (page: PDFPage, form: PDFForm) => {
  drawSubmittingCity(page, form);
  drawSubmittingDate(page, form);
  drawWojewodaField(page, form);
  drawSurnameFields(page, form);
  drawPreviousSurnameFields(page, form);
  drawFamilyNameFields(page, form);
  drawNameFields(page, form);
  drawPreviousName(page, form);
  drawFatherName(page, form);
};
