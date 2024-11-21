import { PDFPage, PDFForm } from "pdf-lib";

import {
  drawSubmittingCity,
  drawDateFields,
  drawWojewodaField,
  drawSurnameFields,
  drawPreviousSurnameFields,
  drawFamilyNameFields,
  drawNameFields,
  drawPreviousName,
  drawFatherName,
} from "./drawFns";

export const drawFirstPageFields = (firstPage: PDFPage, form: PDFForm) => {
  drawSubmittingCity(firstPage, form);
  drawDateFields(firstPage, form);
  drawWojewodaField(firstPage, form);
  drawSurnameFields(firstPage, form);
  drawPreviousSurnameFields(firstPage, form);
  drawFamilyNameFields(firstPage, form);
  drawNameFields(firstPage, form);
  drawPreviousName(firstPage, form);
  drawFatherName(firstPage, form);
};
