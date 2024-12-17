import { PDFPage, PDFForm } from "pdf-lib";

export const drawLiabilitiesResultingDescription = (
  page: PDFPage,
  form: PDFForm
) => {
  const liabilitiesResultingDescription = form.createTextField(
    "liabilitiesResultingDescription"
  );

  liabilitiesResultingDescription.enableMultiline();

  liabilitiesResultingDescription.addToPage(page, {
    x: 55,
    y: 103,
    height: 60,
    width: 520,
    backgroundColor: undefined,
    borderColor: undefined,
  });
};
