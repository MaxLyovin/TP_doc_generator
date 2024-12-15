import { PDFPage, PDFForm } from "pdf-lib";

import {
  drawMotherName,
  drawMotherMaidenName,
  drawBirthday,
  drawSex,
  drawPlaceOfBirth,
  drawCountryOfBirth,
  drawNationality,
  drawCitizenship,
  drawMartialStatus,
  drawEducation,
  drawHeight,
  drawColourOfEyes,
  drawSpecialMarks,
  drawPesel,
  drawPhone,
  drawEmail,
} from "./drawFns";

export const draw2PageFields = (page: PDFPage, form: PDFForm) => {
  drawMotherName(page, form);
  drawMotherMaidenName(page, form);
  drawBirthday(page, form);
  drawSex(page, form);
  drawPlaceOfBirth(page, form);
  drawCountryOfBirth(page, form);
  drawNationality(page, form);
  drawCitizenship(page, form);
  drawMartialStatus(page, form);
  drawEducation(page, form);
  drawHeight(page, form);
  drawColourOfEyes(page, form);
  drawSpecialMarks(page, form);
  drawPesel(page, form);
  drawPhone(page, form);
  drawEmail(page, form);
};
