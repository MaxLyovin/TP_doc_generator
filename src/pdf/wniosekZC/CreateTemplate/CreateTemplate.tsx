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
import { draw6PageFields } from "./drawFields/page6/draw6PageFields";
import { draw8PageFields } from "./drawFields/page8/draw8PageFields";

export const CreateTemplate = () => {
  const generateTemplate = async () => {
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
    const page6 = pages[5];
    const page8 = pages[7];

    draw1PageFields(page1, form);
    draw2PageFields(page2, form);
    draw3PageFields(page3, form);
    draw4PageFields(page4, form);
    draw5PageFields(page5, form);
    draw6PageFields(page6, form);
    draw8PageFields(page8, form);

    const multilineFields = [
      "stayPurposeAdditional",

      "previousVisitsPoland",
      "travelsOutsidePoland",
      "meansOfSubstence",
      "medicalInsurance",
      "sentencedDescription",
      "subjectOfCriminalDescription",
      "liabilitiesResultingDescription",

      "familyMemberNameAndSurname_1",
      "familyMemberCitizenShip_1",
      "familyMemberResidence_1",

      "familyMemberNameAndSurname_2",
      "familyMemberCitizenShip_2",
      "familyMemberResidence_2",

      "familyMemberNameAndSurname_3",
      "familyMemberCitizenShip_3",
      "familyMemberResidence_3",

      "familyMemberNameAndSurname_4",
      "familyMemberCitizenShip_4",
      "familyMemberResidence_4",

      "familyMemberNameAndSurname_5",
      "familyMemberCitizenShip_5",
      "familyMemberResidence_5",

      "familyMemberNameAndSurname_6",
      "familyMemberCitizenShip_6",
      "familyMemberResidence_6",
    ];

    const getFontSize = (id: string) => {
      if (id.includes("familyMemberResidence")) {
        return 8;
      }
      if (id.includes("familyMemberCitizenShip")) {
        return 8;
      }

      if (id.includes("previousVisitsPoland")) {
        return 14;
      }

      if (id.includes("travelsOutsidePoland")) {
        return 13;
      }

      if (id.includes("sentencedDescription")) {
        return 13;
      }

      if (id.includes("subjectOfCriminalDescription")) {
        return 13;
      }
      if (id.includes("liabilitiesResultingDescription")) {
        return 13;
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
      <button onClick={generateTemplate}>generate</button>
    </div>
  );
};
