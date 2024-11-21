import { PDFDocument } from "pdf-lib";
import download from "downloadjs";

import pdfBase from "../assets/wzorzec_1strona.pdf";
import { drawFirstPageFields } from "../drawFields/firstPage/drawFirstPageFields";

export const CreateTemplate = () => {
  const handleOnClick = async () => {
    const pdfBaseBytes = await fetch(pdfBase).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(pdfBaseBytes);
    const pages = pdfDoc.getPages();
    const form = pdfDoc.getForm();
    const firstPage = pages[0];

    drawFirstPageFields(firstPage, form);

    const fields = form.getFields();
    fields.map((field) => {
      console.log(field.getName());
    });

    download(await pdfDoc.save(), "new.pdf", "application/pdf");
  };

  return (
    <div>
      <h2>First approach</h2>
      <p>
        generate pdf template with form fields - every cell is separeted form
      </p>
      <button onClick={handleOnClick}>generate</button>
    </div>
  );
};
