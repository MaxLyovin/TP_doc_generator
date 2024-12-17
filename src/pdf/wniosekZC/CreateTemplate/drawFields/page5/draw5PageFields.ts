import { PDFPage, PDFForm } from "pdf-lib";

import { drawIsCurrentlyInPoland } from "./drawFns";

export const draw5PageFields = (page: PDFPage, form: PDFForm) => {
  drawIsCurrentlyInPoland(page, form);
};
