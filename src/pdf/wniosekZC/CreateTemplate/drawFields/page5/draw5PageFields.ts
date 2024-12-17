import { PDFPage, PDFForm } from "pdf-lib";

import {
  drawIsCurrentlyInPoland,
  drawLastEntryIntoPolandYear,
  drawLegalBasisForStaying,
  drawTravelsOutsidePoland,
  drawMeansOfSubstence,
  drawMedicalInsurance,
} from "./drawFns";

export const draw5PageFields = (page: PDFPage, form: PDFForm) => {
  drawIsCurrentlyInPoland(page, form);
  drawLastEntryIntoPolandYear(page, form);
  drawLegalBasisForStaying(page, form);
  drawTravelsOutsidePoland(page, form);
  drawMeansOfSubstence(page, form);
  drawMedicalInsurance(page, form);
};
