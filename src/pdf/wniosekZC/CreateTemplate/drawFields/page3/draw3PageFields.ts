import { PDFPage, PDFForm } from "pdf-lib";

import {
  drawIsMemberOutside,
  drawCprVoivodship,
  drawCprCity,
  drawCprStreet,
  drawCprHouseNumber,
  drawCprApartmentNumber,
  drawCprPostalCode,
  drawStayPurpose,
} from "./drawFns";

export const draw3PageFields = (page: PDFPage, form: PDFForm) => {
  drawIsMemberOutside(page, form);
  drawCprVoivodship(page, form);
  drawCprCity(page, form);
  drawCprStreet(page, form);
  drawCprHouseNumber(page, form);
  drawCprApartmentNumber(page, form);
  drawCprPostalCode(page, form);
  drawStayPurpose(page, form);
};
