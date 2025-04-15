import { useTranslation } from "react-i18next";

import { PreviousStepButton } from "@/components/PreviousStepButton/PreviousStepButton";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useUserData } from "@/state/hooks/useUserData";
import { useStepper } from "@/state/hooks/useStepper";

import { PreviousPolandVisits } from "./components/PreviousPolandVisits";
import { TravelsOutsidePoland } from "./components/TravelsOutsidePoland";
import { usePreviousPolandVisits } from "./components/PreviousPolandVisits/hooks/usePreviousPolandVisits";
import { useTravelsOutsidePoland } from "./components/TravelsOutsidePoland/hooks/useTravelsOutsidePoland";


export const PrevoiusVisits = () => {
  const { t } = useTranslation();
  const { goToNextStep } = useStepper();
  const { setUserData } = useUserData();
  const previousPolandVisits = usePreviousPolandVisits();
  const travelsOutsidePoland = useTravelsOutsidePoland();

  const handleClickNext = () => {
    setUserData((data) => ({
      ...data,
      previousVisitsPoland: previousPolandVisits.visits,
      travelsOutsidePoland: travelsOutsidePoland.travels,
    }));
    goToNextStep();
  };

  return (
    <div className="text-start">
      <PreviousPolandVisits {...previousPolandVisits} />
      <Separator className="my-8" />
      <TravelsOutsidePoland {...travelsOutsidePoland} />
      <div className="flex justify-between mt-8">
        <PreviousStepButton />
        <Button onClick={handleClickNext}>{t("common.next")}</Button>
      </div>
    </div>
  );
};
