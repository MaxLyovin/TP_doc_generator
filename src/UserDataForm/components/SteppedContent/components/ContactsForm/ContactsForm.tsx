import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/form";
import { useTranslation } from "react-i18next";
import { PreviousStepButton } from "@/components/PreviousStepButton/PreviousStepButton";
import { useUserData } from "@/state/hooks/useUserData";
import { useStepper } from "@/state/hooks/useStepper";

const formSchema = z.object({
  email: z.string(),
  phone: z.string(),
});

export const ContactsForm = () => {
  const { t } = useTranslation();
  const { userData, setUserData } = useUserData();
  const { goToNextStep } = useStepper();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: userData?.email,
      phone: userData?.phone,
    },
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
          <InputField
            controllerProps={{ control: form.control, name: "email" }}
            label={t("main_form.field.email.label")}
          />
          <InputField
            controllerProps={{ control: form.control, name: "phone" }}
            label={t("main_form.field.phone.label")}
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
