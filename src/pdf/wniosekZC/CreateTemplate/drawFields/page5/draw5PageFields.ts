import { PDFPage, PDFForm } from "pdf-lib";

import {
  drawIsCurrentlyInPoland,
  drawLastEntryIntoPolandYear,
  drawLegalBasisForStaying,
} from "./drawFns";

export const draw5PageFields = (page: PDFPage, form: PDFForm) => {
  drawIsCurrentlyInPoland(page, form);
  drawLastEntryIntoPolandYear(page, form);
  drawLegalBasisForStaying(page, form);
};
