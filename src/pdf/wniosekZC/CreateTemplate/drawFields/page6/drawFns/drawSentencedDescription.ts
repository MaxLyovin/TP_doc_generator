import { PDFPage, PDFForm } from "pdf-lib";

export const drawSentencedDescription = (page: PDFPage, form: PDFForm) => {
  const sentencedDescription = form.createTextField("sentencedDescription");

  sentencedDescription.enableMultiline();

  sentencedDescription.addToPage(page, {
    x: 55,
    y: 545,
    height: 45,
    width: 520,
    backgroundColor: undefined,
    borderColor: undefined,
  });
};
