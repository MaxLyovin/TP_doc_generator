import { PDFPage, PDFForm } from "pdf-lib";

import {
  drawStayPurpose,
  drawStayPurposeAdditional,
  drawFamilyMembers,
  drawPreviousVisitsPoland,
} from "./drawFns";

export const draw4PageFields = (page: PDFPage, form: PDFForm) => {
  drawStayPurpose(page, form);
  drawStayPurposeAdditional(page, form);
  drawFamilyMembers(page, form);
  drawPreviousVisitsPoland(page, form);
};
