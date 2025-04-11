import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/form/InputField";
import { SelectField } from "@/components/form";
import { formatDate } from "@/utils/dates/formatDate";
import { provinceOptions } from "@/constants/options";
import { PreviousStepButton } from "@/components/PreviousStepButton/PreviousStepButton";
import { useUserData } from "@/state/hooks/useUserData";
import { useStepper } from "@/state/hooks/useStepper";

const formSchema = z.object({
  submitDate: z.string(),
  submitPlace: z.string(),
  submitAuthority: z.string(),
});

export const SubmittionInformationForm = () => {
  const { t } = useTranslation();
  const { userData, setUserData } = useUserData();
  const { goToNextStep } = useStepper();

  const submitAuthorityList = provinceOptions.map((province) => ({
    value: province,
    label: t(`province.${province}`),
  }));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      submitDate: formatDate(new Date()),
      submitPlace: userData?.submitPlace,
      submitAuthority: userData?.submitAuthority,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setUserData((data) => ({
      ...data,
      submitAuthority: values.submitAuthority,
      submitPlace: values.submitPlace,
    }));
    goToNextStep();
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <InputField
            controllerProps={{ control: form.control, name: "submitDate" }}
            label={t("main_form.field.submit_date.label")}
          />
          <InputField
            controllerProps={{ control: form.control, name: "submitPlace" }}
            label={t("main_form.field.submit_place.label")}
          />
          <SelectField
            controllerProps={{ control: form.control, name: "submitAuthority" }}
            label={t("main_form.field.submit_authority.label")}
            options={submitAuthorityList}
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
