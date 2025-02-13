import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { SelectField, TextAreaField, InputField } from "@/components/form";
import { useTranslation } from "react-i18next";
import { PreviousStepButton } from "@/components/PreviousStepButton/PreviousStepButton";
import { useUserData } from "@/state/hooks/useUserData";
import { useStepper } from "@/state/hooks/useStepper";
import {
  stayPurposeOptions as baseStayPurposeOptions,
  otherPurposeValue,
  yesNoOptions as baseYesNoOptions,
  legalBaseForStayingOptions as baseLegalBaseForStayingOptions,
} from "@/constants/options";

const formSchema = z.object({
  stayPurpose: z.string(),
  stayPurposeAdditional: z.string().optional(),
  isCurrentlyInPoland: z.string(),
  lastEntryIntoPoland: z.string(),
  legalBasisForStaying: z.string(),
});

export const StayInPolandDetaisForm = () => {
  const { t } = useTranslation();
  const { userData, setUserData } = useUserData();
  const { goToNextStep } = useStepper();

  const stayPurposeOptions = baseStayPurposeOptions.map(
    ({ value, translationKey }) => ({
      value: value,
      label: t(translationKey),
    })
  );

  const yesNoOptions = baseYesNoOptions.map(({ value, translationKey }) => ({
    value: value,
    label: t(translationKey),
  }));

  const legalBaseForStayingOptions = baseLegalBaseForStayingOptions.map(
    ({ value, translationKey }) => ({
      value: value,
      label: t(translationKey),
    })
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stayPurpose: userData?.stayPurpose,
      stayPurposeAdditional: userData?.stayPurposeAdditional,
      isCurrentlyInPoland: userData?.isCurrentlyInPoland,
      lastEntryIntoPoland: userData?.lastEntryIntoPoland,
      legalBasisForStaying: userData?.legalBasisForStaying,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setUserData((data) => ({
      ...data,
      ...values,
    }));
    goToNextStep();
  };

  const selectedStayPurpose = form.watch("stayPurpose");
  const isAdditionalPurposeVisible = selectedStayPurpose === otherPurposeValue;

  return (
    <div className="text-start">
      <h3 className="mb-4 font-semibold">
        {t("main_form.step.poland_stay_details")}
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <SelectField
            controllerProps={{ control: form.control, name: "stayPurpose" }}
            label={t("main_form.field.stay_purpose.label")}
            options={stayPurposeOptions}
          />
          {isAdditionalPurposeVisible && (
            <TextAreaField
              controllerProps={{
                control: form.control,
                name: "stayPurposeAdditional",
              }}
              label={t("main_form.field.stay_purpose_additional.label")}
            />
          )}
          <SelectField
            controllerProps={{
              control: form.control,
              name: "isCurrentlyInPoland",
            }}
            label={t("main_form.field.is_currently_in_poland.label")}
            options={yesNoOptions}
          />
          <InputField
            controllerProps={{
              control: form.control,
              name: "lastEntryIntoPoland",
            }}
            label={t("main_form.field.last_entry_into_poland.label")}
            inputProps={{ type: "date" }}
          />

          <SelectField
            controllerProps={{
              control: form.control,
              name: "legalBasisForStaying",
            }}
            label={t("main_form.field.legal_basis.label")}
            options={legalBaseForStayingOptions}
          />

          <div className="flex justify-between">
            <PreviousStepButton />
            <Button type="submit">{t("common.next")}</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
