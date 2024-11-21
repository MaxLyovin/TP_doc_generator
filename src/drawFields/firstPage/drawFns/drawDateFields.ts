import { PDFPage, PDFForm } from "pdf-lib";

export const drawDateFields = (page: PDFPage, form: PDFForm) => {
  const xShift = 20;
  const dashShift = 17;

  const dateYear1 = form.createTextField("dateYear1");

  let dateXStartPoint = 365;

  dateYear1.addToPage(page, {
    x: dateXStartPoint,
    y: 690,
    height: 14,
    width: 14,
    backgroundColor: undefined,
    borderColor: undefined,
  });

  dateXStartPoint = dateXStartPoint + xShift;

  const dateYear2 = form.createTextField("dateYear2");

  dateYear2.addToPage(page, {
    x: dateXStartPoint,
    y: 690,
    height: 14,
    width: 14,
    backgroundColor: undefined,
    borderColor: undefined,
  });

  dateXStartPoint = dateXStartPoint + xShift;

  const dateYear3 = form.createTextField("dateYear3");

  dateYear3.addToPage(page, {
    x: dateXStartPoint,
    y: 690,
    height: 14,
    width: 14,
    backgroundColor: undefined,
    borderColor: undefined,
  });

  dateXStartPoint = dateXStartPoint + xShift;

  const dateYear4 = form.createTextField("dateYear4");

  dateYear4.addToPage(page, {
    x: dateXStartPoint,
    y: 690,
    height: 14,
    width: 14,
    backgroundColor: undefined,
    borderColor: undefined,
  });

  ////month

  dateXStartPoint = dateXStartPoint + xShift + dashShift;

  const dateMonth1 = form.createTextField("dateMonth1");

  dateMonth1.addToPage(page, {
    x: dateXStartPoint,
    y: 690,
    height: 14,
    width: 14,
    backgroundColor: undefined,
    borderColor: undefined,
  });

  dateXStartPoint = dateXStartPoint + xShift;

  const dateMonth2 = form.createTextField("dateMonth2");

  dateMonth2.addToPage(page, {
    x: dateXStartPoint,
    y: 690,
    height: 14,
    width: 14,
    backgroundColor: undefined,
    borderColor: undefined,
  });

  ////day

  dateXStartPoint = dateXStartPoint + xShift + dashShift;

  const dateDay1 = form.createTextField("dateDay1");

  dateDay1.addToPage(page, {
    x: dateXStartPoint,
    y: 690,
    height: 14,
    width: 14,
    backgroundColor: undefined,
    borderColor: undefined,
  });

  dateXStartPoint = dateXStartPoint + xShift;

  const dateDay2 = form.createTextField("dateDay2");

  dateDay2.addToPage(page, {
    x: dateXStartPoint,
    y: 690,
    height: 14,
    width: 14,
    backgroundColor: undefined,
    borderColor: undefined,
  });
};
