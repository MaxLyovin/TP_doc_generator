import { PDFDocument } from "pdf-lib";
import download from "downloadjs";
import { getCellName } from "../pdf/utils/getCellName";
import fontkit from "@pdf-lib/fontkit";

import { Input, RadioGroup, Select } from "../components/form";

import { useForm, SubmitHandler } from "react-hook-form";
import pdfBase from "../assets/pdf/templates/wniosekZC_template.pdf";
import fontBase from "../assets/fonts/Ubuntu-R.ttf";
import { dataMapWithMeta } from "../utils/transformData";
import { useState } from "react";

const stayOptions: { value: string; label: string }[] = [
  { value: "1", label: "wykonywanie pracy" },
  {
    value: "2",
    label: "wykonywanie pracy w zawodzie wymagającym wysokich kwalifikacji",
  },
  {
    value: "3",
    label:
      "wykonywanie pracy przez cudzoziemca delegowanego przez pracodawcę zagranicznego na terytorium Rzeczypospolitej Polskiej",
  },
  {
    value: "4",
    label: "prowadzenie działalności gospodarczej",
  },
  {
    value: "5",
    label: "podjęcie lub kontynuacja stacjonarnych",
  },
  {
    value: "6",
    label: "prowadzenie badań naukowych lub prac rozwojowych",
  },
  {
    value: "7",
    label: "mobilność długoterminowa naukowca",
  },
  {
    value: "8",
    label: "odbycie stażu",
  },
  {
    value: "9",
    label: "udział w programie wolontariatu europejskiego",
  },
  {
    value: "10",
    label: "pobyt z obywatelem Rzeczypospolitej Polskiej",
  },
  {
    value: "11",
    label: "pobyt z cudzoziemcem",
  },
  {
    value: "12",
    label: "mobilność długoterminowa członka rodziny naukowca/",
  },
  {
    value: "13",
    label: "okoliczności związane z byciem ofiarą handlu ludźmi",
  },
  {
    value: "14",
    label:
      "okoliczności wymagające krótkotrwałego pobytu na terytorium Rzeczypospolitej Polskiej",
  },
  {
    value: "15",
    label:
      "przedłużenie pobytu na terytorium Rzeczypospolitej Polskiej ze względu na pracę sezonową",
  },
  {
    value: "16",
    label: "inne",
  },
];

type Inputs = {
  submittingCity: string;
  wojewoda: string;
  surname: string;
  previousSurname: string;
  familyName: string;
  name: string;
  previousName: string;
  fatherName: string;
  motherName: string;
  motherMaidenName: string;
  birthdayYear: string;
  birthdayMonth: string;
  birthdayDay: string;
  sex: string;
  placeOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  citizenship: string;
  martialStatus: string;
  education: string;
  heigh: string;
  colourOfEyes: string;
  specialMarks: string;
  pesel: string;
  phone: string;
  email: string;
  isFamilyMemberOutsidePoland: string;
  cprVoivodship: string;
  cprCity: string;
  cprStreet: string;
  cprHouseNumber: string;
  cprApartmentNumber: string;
  cprPostalCode: string;

  stayPurpose: string;
  stayPurposeAdditional: string;
  familyMemberNameAndSurname_1: string;
  familyMemberSex_1: string;
  familyMemberBirthday_1: string;
  familyMemberKinDegree_1: string;
  familyMemberCitizenShip_1: string;
  familyMemberResidence_1: string;
  familyMemberIsApplyingTP_1: string;
  familyMemberIsDependent_1: string;
};

export const ReadAndFillPdf = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      submittingCity: "Warszawa",
      wojewoda: "Mazowiecki",
      surname: "Kowalski",
      previousSurname: "Kozłowski",
      familyName: "Kozłowski",
      name: "Jan",
      previousName: "Janek",
      fatherName: "Sylwestr",
      motherName: "string",
      motherMaidenName: "string",
      birthdayYear: "string",
      birthdayMonth: "string",
      birthdayDay: "string",
      sex: "string",
      placeOfBirth: "string",
      countryOfBirth: "string",
      nationality: "string",
      citizenship: "string",
      martialStatus: "string",
      education: "string",
      heigh: "string",
      colourOfEyes: "string",
      specialMarks: "string",
      pesel: "string",
      phone: "string",
      email: "string",
      isFamilyMemberOutsidePoland: "",
      cprVoivodship: "string",
      cprCity: "string",
      cprStreet: "string",
      cprHouseNumber: "string",
      cprApartmentNumber: "string",
      cprPostalCode: "string",

      stayPurpose: "string",
      stayPurposeAdditional: "string",
      familyMemberNameAndSurname_1: "string",
      familyMemberSex_1: "string",
      familyMemberBirthday_1: "string",
      familyMemberKinDegree_1: "string",
      familyMemberCitizenShip_1: "string",
      familyMemberResidence_1: "string",
      familyMemberIsApplyingTP_1: "string",
      familyMemberIsDependent_1: "string",
    },
  });

  const notCellsValues = [
    "submittingCity",
    "wojewoda",
    "sex",
    "isFamilyMemberOutsidePoland",
  ];
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
    console.log(data);

    for (const [nameBase, value] of Object.entries(data)) {
      const docFieldMeta =
        dataMapWithMeta[nameBase as keyof typeof dataMapWithMeta];

      if (docFieldMeta === undefined) {
        continue;
      }

      if (nameBase === "stayPurpose") {
        cellsData.push([`${nameBase}_${value}`, "X"]);
        continue;
      }

      if (notCellsValues.includes(nameBase)) {
        cellsData.push([nameBase, value]);
      } else {
        const splitedValue = value.split("");

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

    return cellsData;
  };

  const readPdfTemplateAndFill: SubmitHandler<Inputs> = async (data) => {
    setIsProcessing(true);
    const startTime = new Date();
    const pdfBaseBytes = await fetch(pdfBase).then((res) => res.arrayBuffer());
    const ubuntuFontBytes = await fetch(fontBase).then((res) =>
      res.arrayBuffer()
    );
    const pdfDoc = await PDFDocument.load(pdfBaseBytes);
    pdfDoc.registerFontkit(fontkit);
    const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes);

    const form = pdfDoc.getForm();

    // form.getFields().forEach((field) => console.log(field.getName()));

    const cellsData = prepareCellsData({
      data,
      withBracketsWrapper: false,
      shouldTransformToShort: false,
    });

    // form.getFields().forEach((field) => console.log(field.getName()));

    cellsData.forEach(([cellId, value]) => {
      try {
        const cell = form.getTextField(cellId);
        cell.setText(value.toUpperCase());
        cell.updateAppearances(ubuntuFont);
      } catch (error) {
        console.log(error);
      }
    });

    const endTime = new Date();

    console.log(startTime, endTime);
    setIsProcessing(false);

    download(await pdfDoc.save(), "filledPdf.pdf", "application/pdf");
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
          id="familyName"
          label="Family Name"
          register={register("familyName")}
        />

        <Input id="name" label="Name" register={register("name")} />

        <Input
          id="previousName"
          label="Previous Name"
          register={register("previousName")}
        />

        <Input
          id="fatherName"
          label="Father Name"
          register={register("fatherName")}
        />

        <Input
          id="motherName"
          label="Mother Name"
          register={register("motherName")}
        />

        <Input
          id="motherMaidenName"
          label="Mother maiden Name"
          register={register("motherMaidenName")}
        />

        <Input
          id="birthdayYear"
          label="birthday year"
          register={register("birthdayYear")}
        />

        <Input
          id="birthdayMonth"
          label="birthday month"
          register={register("birthdayMonth")}
        />

        <Input
          id="birthdayDay"
          label="birthday day"
          register={register("birthdayDay")}
        />

        <Input id="sex" label="sex" register={register("sex")} />

        <Input
          id="placeOfBirth"
          label="placeOfBirth"
          register={register("placeOfBirth")}
        />

        <Input
          id="countryOfBirth"
          label="countryOfBirth"
          register={register("countryOfBirth")}
        />

        <Input
          id="nationality"
          label="nationality"
          register={register("nationality")}
        />

        <Input
          id="citizenship"
          label="citizenship"
          register={register("citizenship")}
        />

        <Input
          id="martialStatus"
          label="martialStatus"
          register={register("martialStatus")}
        />

        <Input id="heigh" label="heigh" register={register("heigh")} />

        <Input
          id="colourOfEyes"
          label="colourOfEyes"
          register={register("colourOfEyes")}
        />

        <Input
          id="specialMarks"
          label="specialMarks"
          register={register("specialMarks")}
        />

        <Input id="pesel" label="pesel" register={register("pesel")} />

        <Input id="email" label="email" register={register("email")} />

        <RadioGroup
          groupDescription="isFamilyMemberOutsidePoland"
          options={[
            { value: "X", label: "Yes" },
            { value: "", label: "No" },
          ]}
          register={register("isFamilyMemberOutsidePoland")}
        />

        <Input
          id="cprVoivodship"
          label="cprVoivodship"
          register={register("cprVoivodship")}
        />

        <Input id="cprCity" label="cprCity" register={register("cprCity")} />

        <Input
          id="cprStreet"
          label="cprStreet"
          register={register("cprStreet")}
        />

        <Input
          id="cprHouseNumber"
          label="cprHouseNumber"
          register={register("cprHouseNumber")}
        />

        <Input
          id="cprApartmentNumber"
          label="cprApartmentNumber"
          register={register("cprApartmentNumber")}
        />

        <Input
          id="cprPostalCode"
          label="cprPostalCode"
          register={register("cprPostalCode")}
        />

        <Select
          selectDescription="stayPurpose"
          register={register("stayPurpose")}
          options={stayOptions}
        />

        <button onClick={handleSubmit(readPdfTemplateAndFill)}>
          {isProcessing ? "processing..." : "fill pdf"}
        </button>
      </form>
    </div>
  );
};
