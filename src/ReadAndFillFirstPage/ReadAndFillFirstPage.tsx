import { PDFDocument } from "pdf-lib";
import download from "downloadjs";
import { getCellName } from "../pdf/utils/getCellName";
import fontkit from "@pdf-lib/fontkit";

import { Input } from "../components/form/Input";

import { useForm, SubmitHandler } from "react-hook-form";
import pdfBase from "../assets/pdf/templates/firstPageTemplate.pdf";
import fontBase from "../assets/fonts/Ubuntu-R.ttf";
import { dataMapWithMeta } from "../utils/transformData";
import JSZipUtils from "jszip-utils";

import docTemplate from "../assets/docx/wniosek.docx";
import PizZip from "pizzip";

type Inputs = {
  submittingCity: string;
  wojewoda: string;
  surname: string;
  previousSurname: string;
  ["previousSurname--SecondLine"]: string;
  familyName: string;
  name: string;
  ["name--SecondLine"]: string;
  previousName: string;
  ["previousName--SecondLine"]: string;
  fatherName: string;
};

export const ReadAndFillFirstPage = () => {
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      submittingCity: "Warszawa",
      wojewoda: "Mazowiecki",
      surname: "Kowalski",
      previousSurname: "Kozłowski",
      "previousSurname--SecondLine": "-",
      familyName: "Kozłowski",
      name: "Jan",
      "name--SecondLine": "-",
      previousName: "Janek",
      "previousName--SecondLine": "-",
      fatherName: "Sylwestr",
    },
  });

  const notCellsValues = ["submittingCity", "wojewoda"];
  type PrepareCellsDataOption = {
    data: Inputs;
    withBracketsWrapper?: boolean;
    shouldTransformToShort?: boolean;
  };
  const prepareCellsData = ({
    data,
    withBracketsWrapper = true,
    shouldTransformToShort = true,
  }: PrepareCellsDataOption) => {
    const cellsData: [string, string][] = [];

    for (const [nameBase, value] of Object.entries(data)) {
      if (notCellsValues.includes(nameBase)) {
        cellsData.push([nameBase, value]);
      } else {
        const splitedValue = value.split("");

        const docFieldMeta =
          dataMapWithMeta?.[nameBase as keyof typeof dataMapWithMeta];

        if (docFieldMeta) {
          for (let index = 0; index < docFieldMeta.cellsAmount; index++) {
            const cellName = getCellName(
              shouldTransformToShort ? docFieldMeta.shortName : nameBase,
              index
            );

            cellsData.push([
              withBracketsWrapper ? `{${cellName}}` : cellName,
              (splitedValue[index] ?? "").toUpperCase(),
            ]);
          }
        }
      }
    }

    return cellsData;
  };

  const readPdfTemplateAndFill: SubmitHandler<Inputs> = async (data) => {
    const pdfBaseBytes = await fetch(pdfBase).then((res) => res.arrayBuffer());
    const ubuntuFontBytes = await fetch(fontBase).then((res) =>
      res.arrayBuffer()
    );
    const pdfDoc = await PDFDocument.load(pdfBaseBytes);
    pdfDoc.registerFontkit(fontkit);
    const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes);

    const form = pdfDoc.getForm();

    const cellsData = prepareCellsData({
      data,
      withBracketsWrapper: false,
      shouldTransformToShort: false,
    });

    form.getFields().forEach((field) => console.log(field.getName()));

    cellsData.forEach(([cellId, value]) => {
      try {
        const cell = form.getTextField(cellId);
        cell.setText(value.toUpperCase());
        cell.updateAppearances(ubuntuFont);
      } catch (error) {
        console.log(error);
      }
    });

    download(await pdfDoc.save(), "filledPdf.pdf", "application/pdf");
  };

  const readDocTemplateAndFill: SubmitHandler<Inputs> = async (data) => {
    const cellsData = prepareCellsData({ data });

    const fileBuffer = await JSZipUtils.getBinaryContent(docTemplate);

    const zip = new PizZip(fileBuffer);
    const content = zip.file("word/document.xml").asText();

    const newContent = cellsData.reduce((acc, [cellId, newValue]) => {
      console.log(cellId, newValue, content.search(cellId));
      return acc.replace(cellId, newValue);
    }, content);

    zip.file("word/document.xml", newContent);
    const blob = zip.generate({
      type: "blob",
      compression: "DEFLATE",
    });

    download(blob, "doc.docx", "text/html");
  };

  return (
    <div>
      <h3>ReadAndFillFirstPage</h3>
      <form className="flex flex-col gap-4">
        <Input
          id="submittingCity"
          label="City"
          register={register("submittingCity")}
        />
        <Input id="wojewoda" label="Wojewoda" register={register("wojewoda")} />
        <Input id="surname" label="Surname" register={register("surname")} />
        <Input
          id="previousSurname"
          label="Previous Surname"
          register={register("previousSurname")}
        />

        <Input
          id="previousSurname--SecondLine"
          label="Previous Surname Second Line"
          register={register("previousSurname--SecondLine")}
        />

        <Input
          id="familyName"
          label="Family Name"
          register={register("familyName")}
        />

        <Input id="name" label="Name" register={register("name")} />

        <Input
          id="name--SecondLine"
          label="Name Second Line"
          register={register("name--SecondLine")}
        />

        <Input
          id="previousName"
          label="Previous Name"
          register={register("previousName")}
        />

        <Input
          id="previousName--SecondLine"
          label="Previous Name Second Line"
          register={register("previousName--SecondLine")}
        />

        <Input
          id="fatherName"
          label="Father Name"
          register={register("fatherName")}
        />
        <button onClick={handleSubmit(readDocTemplateAndFill)}>
          genereate doc
        </button>

        <button onClick={handleSubmit(readPdfTemplateAndFill)}>
          genereate pdf
        </button>
      </form>
    </div>
  );
};
