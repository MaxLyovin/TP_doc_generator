import { PDFPage, PDFForm } from "pdf-lib";

export const drawSubjectOfCriminalDescription = (
  page: PDFPage,
  form: PDFForm
) => {
  const sentencedDescription = form.createTextField(
    "subjectOfCriminalDescription"
  );

  sentencedDescription.enableMultiline();

  sentencedDescription.addToPage(page, {
    x: 55,
    y: 345,
    height: 45,
    width: 520,
    backgroundColor: undefined,
    borderColor: undefined,
  });
};
