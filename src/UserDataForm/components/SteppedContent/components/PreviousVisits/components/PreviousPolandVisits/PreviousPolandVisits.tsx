import { Button } from "@/components/ui/button";
import { InputField } from "@/components/form";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useTranslation } from "react-i18next";

import { PolandVisitsTable } from "./PolandVisitsTable";

const formSchema = z.object({
  from: z.string(),
  to: z.string(),
  legalBase: z.string(),
});

export type Visit = {
  from: string;
  to: string;
  legalBase: string;
};

type PreviousPolandVisitsProps = {
  visits: Visit[];
  addVisit: (visit: Visit) => void;
  removeVisit: (visitIndex: number) => void;
};

export const PreviousPolandVisits = ({
  visits,
  addVisit,
  removeVisit,
}: PreviousPolandVisitsProps) => {
  const { t } = useTranslation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: "",
      to: "",
      legalBase: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    addVisit(values);
  };

  return (
    <div>
      <div>
        <h3 className="font-semibold mb-4">
          {t("common.previous_poland_stay")}
        </h3>
        <div className="mb-6">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 text-start"
            >
              <InputField
                controllerProps={{ control: form.control, name: "legalBase" }}
                label={t(
                  "main_form.field.previous_poland_stay_legalBase.label"
                )}
              />
              <div className="flex gap-4 items-end justify-between">
                <InputField
                  controllerProps={{ control: form.control, name: "from" }}
                  label={t("main_form.field.previous_poland_stay_from.label")}
                  inputProps={{ type: "date" }}
                />
                <InputField
                  controllerProps={{ control: form.control, name: "to" }}
                  label={t("main_form.field.previous_poland_stay_to.label")}
                  inputProps={{ type: "date" }}
                />

                <Button className="grow" type="submit">
                  {t("common.add")}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      {!!visits.length && (
        <PolandVisitsTable visits={visits} removeVisit={removeVisit} />
      )}
    </div>
  );
};
