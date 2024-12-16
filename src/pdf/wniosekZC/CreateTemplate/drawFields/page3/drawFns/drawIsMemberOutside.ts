import { PDFPage, PDFForm } from "pdf-lib";
import { addCellFields } from "../../../../../utils/addCellFields";

export const drawIsMemberOutside = (page: PDFPage, form: PDFForm) => {
  addCellFields({
    page: page,
    form: form,
    startPoint: { x: 63, y: 782 },
    dimension: 13,
    cellsAmount: 1,
    cellsSpacing: 18,
    nameBase: "isFamilyMemberOutsidePoland",
  });
};
