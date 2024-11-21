import "./App.css";
import { PDFDocument } from "pdf-lib";
import download from "downloadjs";

import pdfBase from "./assets/wzorzec_1strona.pdf";
import { drawFirstPageFields } from "./drawFields/firstPage/drawFirstPageFields";

function App() {
  const handleOnClick = async () => {
    console.log("yo");

    const pdfBaseBytes = await fetch(pdfBase).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(pdfBaseBytes);

    const pages = pdfDoc.getPages();
    const form = pdfDoc.getForm();

    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();

    console.log(width, height);

    drawFirstPageFields(firstPage, form);

    const fields = form.getFields();
    console.log(fields);

    download(await pdfDoc.save(), "new.pdf", "application/pdf");
  };

  return (
    <>
      <button onClick={handleOnClick}>
        click to generate pdf template with form fields
      </button>
    </>
  );
}

export default App;
