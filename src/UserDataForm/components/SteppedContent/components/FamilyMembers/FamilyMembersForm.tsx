import { useFieldArray, useForm } from "react-hook-form";
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

const formSchema = z.object({
  hasFamilyInPoland: z.enum(["yes", "no"]),
  familyMemebers: z.array(familyMemberSchema).optional(),
}).superRefine((data, ctx) => {
  if (data.hasFamilyInPoland === "yes" && (!data.familyMemebers || data.familyMemebers.length === 0)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "At least one family member is required if you have family in Poland",
      path: ["familyMemebers"],
    });
  }
});

export const FamilyMembersForm = () => {
  const { t } = useTranslation();
  const { userData, setUserData } = useUserData();
  const { goToNextStep } = useStepper();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      familyMemebers: userData?.familyMemebers || [],
      hasFamilyInPoland: (userData?.familyMemebers && userData.familyMemebers.length > 0) ? 'yes' : 'no'
    }
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "familyMemebers",
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setUserData((data) => ({
      ...data,
      ...values,
    }));
    goToNextStep();
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <SelectField
            options={[{ value: "yes", label: t("common.yes") }, { value: "no", label: t("common.no") }]}
            controllerProps={{ control: form.control, name: "hasFamilyInPoland" }}
            label={t("main_form.field.has_family_in_poland.label")}
          />
          {form.watch("hasFamilyInPoland") === "yes" && (
            <div className="space-y-4">
              {fields.map((field, index) => (
                <div key={field.id} className="border p-4 rounded-md">
                  <button type="button" className="w-full text-left" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
                    {form.watch(`familyMemebers.${index}.name`) || t("common.unnamed")}
                  </button>
                  {expandedIndex === index && (
                    <div className="mt-2 space-y-2">
                      <InputField controllerProps={{ control: form.control, name: `familyMemebers.${index}.name` }} label={t("main_form.field.family_member.name_surname")} />
                      <InputField controllerProps={{ control: form.control, name: `familyMemebers.${index}.sex` }} label={t("main_form.field.family_member.sex")} />
                      <InputField controllerProps={{ control: form.control, name: `familyMemebers.${index}.birthday` }} label={t("main_form.field.family_member.birthday")} />
                      <InputField controllerProps={{ control: form.control, name: `familyMemebers.${index}.kinship` }} label={t("main_form.field.family_member.kinship")} />
                      <InputField controllerProps={{ control: form.control, name: `familyMemebers.${index}.citizenship` }} label={t("main_form.field.family_member.citizenship")} />
                      <InputField controllerProps={{ control: form.control, name: `familyMemebers.${index}.residencePlace` }} label={t("main_form.field.family_member.residence_place")} />
                      <SelectField
                        options={[{ value: "yes", label: t("common.yes") }, { value: "no", label: t("common.no") }]}
                        controllerProps={{ control: form.control, name: `familyMemebers.${index}.isApplying` }}
                        label={t("main_form.field.family_member.is_applying")}
                      />
                      <SelectField
                        options={[{ value: "yes", label: t("common.yes") }, { value: "no", label: t("common.no") }]}
                        controllerProps={{ control: form.control, name: `familyMemebers.${index}.isDependent` }}
                        label={t("main_form.field.family_member.is_dependent")}
                      />
                      <Button type="button" onClick={() => remove(index)}>{t("common.remove")}</Button>
                    </div>
                  )}
                </div>
              ))}
              {fields.length < 6 && (
                <Button variant='default' type="button" onClick={() => append({ name: "", sex: "", birthday: "", kinship: "", citizenship: "", residencePlace: "", isApplying: "no", isDependent: "no" })}>
                  {t("common.add")}
                </Button>
              )}
            </div>
          )}
          <div className="flex justify-between">
            <PreviousStepButton />
            <Button type="submit">{t("common.next")}</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};