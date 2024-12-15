import { PDFDocument } from "pdf-lib";
import download from "downloadjs";

import pdfBase from "../assets/wniosek.donor.pdf";
import { draw1PageFields } from "./drawFields/page1/draw1PageFields";
import { draw2PageFields } from "./drawFields/page2/draw2PageFields";

export const CreateTemplate = () => {
  const handleOnClick = async () => {
    const pdfBaseBytes = await fetch(pdfBase).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(pdfBaseBytes);
    const pages = pdfDoc.getPages();
    const form = pdfDoc.getForm();
    const page1 = pages[0];
    const page2 = pages[1];

    draw1PageFields(page1, form);
    draw2PageFields(page2, form);

    download(await pdfDoc.save(), "new.pdf", "application/pdf");

    // const fields = form.getFields();

    // fields.map((field) => console.log(field.getName()));
  };

  return (
    <div>
      <h2>
        Generate pdf template for Wniosek o udzielenie zezwolenia pobytu
        czasowego
      </h2>
      <button onClick={handleOnClick}>generate</button>
    </div>
  );
};
