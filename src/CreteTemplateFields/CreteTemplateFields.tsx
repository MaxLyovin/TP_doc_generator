import { PDFDocument } from "pdf-lib";
import download from "downloadjs";

import pdfBase from "../assets/pdf/donors/wzorzec_1strona.pdf";

export const CreteTemplateFields = () => {
  const handleOnClick = async () => {
    const pdfBaseBytes = await fetch(pdfBase).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(pdfBaseBytes);
    const pages = pdfDoc.getPages();
    const form = pdfDoc.getForm();
    const firstPage = pages[0];
    //////
    const submittingCity = form.createTextField("submittingCity");

    submittingCity.addToPage(firstPage, {
      x: 365,
      y: 710,
      height: 16,
      width: 190,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    //////
    const dateYear = form.createTextField("dateYear");

    dateYear.addToPage(firstPage, {
      x: 365,
      y: 690,
      height: 16,
      width: 75,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    /////
    const dateMonth = form.createTextField("dateMonth");

    dateMonth.addToPage(firstPage, {
      x: 462,
      y: 690,
      height: 16,
      width: 35,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    ////

    const dateDay = form.createTextField("dateDay");

    dateDay.addToPage(firstPage, {
      x: 519,
      y: 690,
      height: 16,
      width: 35,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    ////

    const wojewoda = form.createTextField("wojewoda");

    wojewoda.addToPage(firstPage, {
      x: 130,
      y: 400,
      height: 16,
      width: 250,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    ////

    const surname = form.createTextField("surname");

    surname.addToPage(firstPage, {
      x: 214,
      y: 309,
      height: 14,
      width: 353,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    surname.setText(
      "j      j      j      j     k     k     k    f".toUpperCase()
    );

    ////

    const previousSurname = form.createTextField("previousSurname");

    previousSurname.addToPage(firstPage, {
      x: 214,
      y: 278,
      height: 14,
      width: 353,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    const previousSurnameSecondLine = form.createTextField(
      "previousSurnameSecondLine"
    );

    previousSurnameSecondLine.addToPage(firstPage, {
      x: 214,
      y: 245,
      height: 14,
      width: 353,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    /////
    const familyName = form.createTextField("familyName");

    familyName.addToPage(firstPage, {
      x: 214,
      y: 214,
      height: 14,
      width: 353,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    ////

    /////
    const name = form.createTextField("name");

    name.addToPage(firstPage, {
      x: 214,
      y: 182,
      height: 14,
      width: 353,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    const nameSecondLine = form.createTextField("nameSecondLine");

    nameSecondLine.addToPage(firstPage, {
      x: 214,
      y: 151,
      height: 14,
      width: 353,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    ////

    const previousName = form.createTextField("previousName");

    previousName.addToPage(firstPage, {
      x: 214,
      y: 120,
      height: 14,
      width: 353,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    const previousNameSecondLine = form.createTextField(
      "previousNameSecondLine"
    );

    previousNameSecondLine.addToPage(firstPage, {
      x: 214,
      y: 86,
      height: 14,
      width: 353,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    ////

    const fatherName = form.createTextField("fatherName");

    fatherName.addToPage(firstPage, {
      x: 214,
      y: 55,
      height: 14,
      width: 353,
      backgroundColor: undefined,
      borderColor: undefined,
    });

    ////

    // const fields = form.getFields();
    // fields.map((field) => {
    //   console.log(field.getName());
    // });

    download(await pdfDoc.save(), "new.pdf", "application/pdf");
  };

  return (
    <div>
      <h2>Second approach</h2>
      <p>generate pdf template with form fields - without deviding by cells</p>
      <button onClick={handleOnClick}>generate</button>
    </div>
  );
};
