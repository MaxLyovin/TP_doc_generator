import { PDFDocument } from "pdf-lib";
import download from "downloadjs";
import { getCellName } from "../drawFields/utils/getCellName";
import fontkit from "@pdf-lib/fontkit";

import { Input } from "../components/form/Input";

import { useForm, SubmitHandler } from "react-hook-form";
import pdfBase from "../assets/pdf/templates/firstPageTemplate.pdf";
import fontBase from "../assets/fonts/Ubuntu-R.ttf";

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

  const readTemplateAndFill: SubmitHandler<Inputs> = async (data) => {
    const pdfBaseBytes = await fetch(pdfBase).then((res) => res.arrayBuffer());
    const ubuntuFontBytes = await fetch(fontBase).then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(pdfBaseBytes);
    pdfDoc.registerFontkit(fontkit);
    const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes);

    const pages = pdfDoc.getPages();
    const form = pdfDoc.getForm();
    const firstPage = pages[0];

    const cellsData: [string, string][] = [];

    console.log(data);

    for (const [nameBase, value] of Object.entries(data)) {
      if (notCellsValues.includes(nameBase)) {
        cellsData.push([nameBase, value]);
      } else {
        const splitedValue = value.split("");
        splitedValue.forEach((cellValue, index) =>
          cellsData.push([getCellName(nameBase, index), cellValue])
        );
      }
    }

    cellsData.forEach(([cellId, value]) => {
      const cell = form.getTextField(cellId);

      cell.setText(value.toUpperCase());
      cell.updateAppearances(ubuntuFont);
      console.log(cell.getText());
    });

    download(await pdfDoc.save(), "filledPdf.pdf", "application/pdf");
  };

  return (
    <div>
      <h3>ReadAndFillFirstPage</h3>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(readTemplateAndFill)}
      >
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

        <button type="submit">Fill pdf</button>
      </form>
    </div>
  );
};
