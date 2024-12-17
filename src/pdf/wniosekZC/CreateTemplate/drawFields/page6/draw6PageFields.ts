import { PDFPage, PDFForm } from "pdf-lib";

import {
  drawClauseDLRS,
  drawIsSentenced,
  drawSentencedDescription,
  drawIsSubjectOfCriminal,
  drawSubjectOfCriminalDescription,
  drawHasLiabilitiesResulting,
  drawLiabilitiesResultingDescription,
} from "./drawFns";

export const draw6PageFields = (page: PDFPage, form: PDFForm) => {
  drawClauseDLRS(page, form);
  drawIsSentenced(page, form);
  drawSentencedDescription(page, form);
  drawIsSubjectOfCriminal(page, form);
  drawSubjectOfCriminalDescription(page, form);
  drawHasLiabilitiesResulting(page, form);
  drawLiabilitiesResultingDescription(page, form);
};
