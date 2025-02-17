import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { InputField, SelectField } from "@/components/form";
import { useTranslation } from "react-i18next";
import { PreviousStepButton } from "@/components/PreviousStepButton/PreviousStepButton";
import { useUserData } from "@/state/hooks/useUserData";
import { useStepper } from "@/state/hooks/useStepper";
import { useState } from "react";
import { FamilyMember } from "@/@types/userData";

const familyMemberSchema = z.object({
  name: z.string().min(1, "Required"),
  sex: z.string().min(1, "Required"),
  birthday: z.string().min(1, "Required"),
  kinship: z.string().min(1, "Required"),
  citizenship: z.string().min(1, "Required"),
  residencePlace: z.string().min(1, "Required"),
  isApplying: z.string().min(1, "Required"),
  isDependent: z.string().min(1, "Required"),
});

const formSchema = z
  .object({
    hasFamilyInPoland: z.enum(["yes", "no"]),
    familyMemeber: familyMemberSchema,
  })
  .superRefine((data, ctx) => {
    if (data.hasFamilyInPoland === "yes" && !data.familyMemeber) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "At least one family member is required if you have family in Poland",
        path: ["familyMemebers"],
      });
    }
  });

export const FamilyMembersForm = () => {
  const { t } = useTranslation();
  const { userData, setUserData } = useUserData();
  const { goToNextStep } = useStepper();
  // const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>(
  //   userData?.familyMemebers || []
  // );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      familyMemeber: {
        name: "Arat",
        birthday: "22/02/2020",
        citizenship: "Good",
        isApplying: "yes",
        isDependent: "no",
        kinship: "Umm",
        residencePlace: "Su",
        sex: "K",
      },
      hasFamilyInPoland:
        userData?.familyMemebers && userData.familyMemebers.length > 0
          ? "yes"
          : "no",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const member = values.familyMemeber as FamilyMember
    const isExistIndex =
      userData?.familyMemebers?.findIndex((item) => item.id === member.id) ||
      -1;
    let newData = {...userData}

    if (isExistIndex > -1) {
      newData!.familyMemebers![isExistIndex] = member;
      return;
    }
    newData.familyMemebers = [member];
    setUserData(newData)
  };

  console.log(userData?.familyMemebers);
  

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit(onSubmit);
          }}
          className="space-y-8"
        >
          <SelectField
            options={[
              { value: "yes", label: t("common.yes") },
              { value: "no", label: t("common.no") },
            ]}
            controllerProps={{
              control: form.control,
              name: "hasFamilyInPoland",
            }}
            label={t("main_form.field.has_family_in_poland.label")}
          />
          {form.watch("hasFamilyInPoland") === "yes" && (
            <div className="space-y-4">
              <div className="border p-4 rounded-md">
                <div className="mt-2 space-y-2">
                  <InputField
                    controllerProps={{
                      control: form.control,
                      name: `familyMemeber.name`,
                    }}
                    label={t("main_form.field.family_member.name_surname")}
                  />
                  <InputField
                    controllerProps={{
                      control: form.control,
                      name: `familyMemeber.sex`,
                    }}
                    label={t("main_form.field.family_member.sex")}
                  />
                  <InputField
                    controllerProps={{
                      control: form.control,
                      name: `familyMemeber.birthday`,
                    }}
                    label={t("main_form.field.family_member.birthday")}
                  />
                  <InputField
                    controllerProps={{
                      control: form.control,
                      name: `familyMemeber.kinship`,
                    }}
                    label={t("main_form.field.family_member.kinship")}
                  />
                  <InputField
                    controllerProps={{
                      control: form.control,
                      name: `familyMemeber.citizenship`,
                    }}
                    label={t("main_form.field.family_member.citizenship")}
                  />
                  <InputField
                    controllerProps={{
                      control: form.control,
                      name: `familyMemeber.residencePlace`,
                    }}
                    label={t("main_form.field.family_member.residence_place")}
                  />
                  <SelectField
                    options={[
                      { value: "yes", label: t("common.yes") },
                      { value: "no", label: t("common.no") },
                    ]}
                    controllerProps={{
                      control: form.control,
                      name: `familyMemeber.isApplying`,
                    }}
                    label={t("main_form.field.family_member.is_applying")}
                  />
                  <SelectField
                    options={[
                      { value: "yes", label: t("common.yes") },
                      { value: "no", label: t("common.no") },
                    ]}
                    controllerProps={{
                      control: form.control,
                      name: `familyMemeber.isDependent`,
                    }}
                    label={t("main_form.field.family_member.is_dependent")}
                  />
                  <div className="flex justify-end p-4 pb-0">
                    <Button
                      variant="default"
                      type="submit"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-between">
            <PreviousStepButton />
            <Button type="button" onClick={goToNextStep}>{t("common.next")}</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
