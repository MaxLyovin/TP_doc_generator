import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { InputField, SelectField } from "@/components/form";
import { PreviousStepButton } from "@/components/PreviousStepButton/PreviousStepButton";
import { useUserData } from "@/state/hooks/useUserData";
import { stayPurposes } from "@/constants/options";
import { useStepper } from "@/state/hooks/useStepper";


const formSchema = z.object({
  stayPurpose: z.string(),
  stayPurposeAdditional: z.string(),
});

export const AdditionalInformationForm = () => {
  const { t } = useTranslation();
  const { userData, setUserData } = useUserData();
  const { goToNextStep } = useStepper();
  const [isOtherPurposeSelected, setIsOtherPurposeSelected] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stayPurpose: userData?.stayPurpose,
      stayPurposeAdditional: userData?.stayPurposeAdditional
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setUserData((data) => ({
      ...data,
      ...values,
    }));
    goToNextStep();
  };

  const stayPurposeOptions = stayPurposes.map((purpose) => ({
    value: purpose,
    label: t(`stayPurpose.${purpose}`),
  }))

  const watchStayPurpose = form.watch('stayPurpose');

  useEffect(() => {
    const lastOption = stayPurposeOptions[stayPurposeOptions.length - 1].value;
    const isLastOptionSelected = watchStayPurpose === lastOption;

    setIsOtherPurposeSelected(isLastOptionSelected);

  }, [watchStayPurpose, stayPurposeOptions, form]);


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <SelectField
            options={stayPurposeOptions}
            controllerProps={{ control: form.control, name: "stayPurpose" }}
            label={t("main_form.field.stay_purpose.label")}
          />
          <InputField
            controllerProps={{ control: form.control, name: "stayPurposeAdditional" }}
            label={t("main_form.field.stay_purpose_additional.label")}
            inputProps={{ disabled: !isOtherPurposeSelected }}
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
