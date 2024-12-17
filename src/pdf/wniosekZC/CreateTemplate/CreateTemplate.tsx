import { PDFDocument } from "pdf-lib";
import download from "downloadjs";
import fontkit from "@pdf-lib/fontkit";
import pdfBase from "../assets/wniosek.donor.pdf";
import fontBase from "../../../assets/fonts/Ubuntu-R.ttf";
import { draw1PageFields } from "./drawFields/page1/draw1PageFields";
import { draw2PageFields } from "./drawFields/page2/draw2PageFields";
import { draw3PageFields } from "./drawFields/page3/draw3PageFields";
import { draw4PageFields } from "./drawFields/page4/draw4PageFields";
import { draw5PageFields } from "./drawFields/page5/draw5PageFields";

export const CreateTemplate = () => {
  const handleOnClick = async () => {
    const ubuntuFontBytes = await fetch(fontBase).then((res) =>
      res.arrayBuffer()
    );
    const pdfBaseBytes = await fetch(pdfBase).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(pdfBaseBytes);

    pdfDoc.registerFontkit(fontkit);
    const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes);

    const pages = pdfDoc.getPages();
    const form = pdfDoc.getForm();
    const page1 = pages[0];
    const page2 = pages[1];
    const page3 = pages[2];
    const page4 = pages[3];
    const page5 = pages[4];

    draw1PageFields(page1, form);
    draw2PageFields(page2, form);
    draw3PageFields(page3, form);
    draw4PageFields(page4, form);
    draw5PageFields(page5, form);

    const multilineFields = [
      "stayPurposeAdditional",
      "familyMemberNameAndSurname_1",
      "familyMemberCitizenShip_1",
      "familyMemberResidence_1",
      "previousVisitsPoland",
      "travelsOutsidePoland",
      "meansOfSubstence",
      "medicalInsurance",
    ];

    const getFontSize = (id: string) => {
      if (id.includes("familyMemberResidence")) {
        return 8;
      }

      if (id.includes("previousVisitsPoland")) {
        return 14;
      }

      if (id.includes("travelsOutsidePoland")) {
        return 13;
      }

      if (id.includes("meansOfSubstence")) {
        return 12;
      }

      return 12;
    };
    multilineFields.forEach((fieldId) => {
      const textField = form.getTextField(fieldId);
      textField.updateAppearances(ubuntuFont);

      textField.setFontSize(getFontSize(fieldId));
    });

    download(await pdfDoc.save(), "new.pdf", "application/pdf");

    const fields = form.getFields();

    fields.map((field) => console.log(field.getName()));
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
