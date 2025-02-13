import { PreviousStepButton } from "@/components/PreviousStepButton/PreviousStepButton";
import { PreviousPolandVisits } from "./components/PreviousPolandVisits";
import { TravelsOutsidePoland } from "./components/TravelsOutsidePoland";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useUserData } from "@/state/hooks/useUserData";
import { usePreviousPolandVisits } from "./components/PreviousPolandVisits/hooks/usePreviousPolandVisits";
import { useTravelsOutsidePoland } from "./components/TravelsOutsidePoland/hooks/useTravelsOutsidePoland";
import { useStepper } from "@/state/hooks/useStepper";

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
