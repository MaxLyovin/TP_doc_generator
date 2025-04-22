import { Separator } from '@/components/ui/separator';
import { useUserData } from '@/state/hooks/useUserData';
import { useStepper } from '@/state/hooks/useStepper';
import { NavigationButtons } from '@/components/NavigationButtons/NavigationButtons';

import { PreviousPolandVisits } from './components/PreviousPolandVisits';
import { TravelsOutsidePoland } from './components/TravelsOutsidePoland';
import { usePreviousPolandVisits } from './components/PreviousPolandVisits/hooks/usePreviousPolandVisits';
import { useTravelsOutsidePoland } from './components/TravelsOutsidePoland/hooks/useTravelsOutsidePoland';

export const PrevoiusVisits = () => {
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
      <NavigationButtons onNext={handleClickNext} />
    </div>
  );
};
