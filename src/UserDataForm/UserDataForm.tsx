import { StepperContextProvider } from "@/state/providers/StepperContextProvider/StepperContextProvider";
import { MobileSteppedNavigation } from '@/components/MobileSteppedNavigation/MobileSteppedNavigation';
import { steps } from '@/UserDataForm/steps';

import { AsideContent } from './components/AsideContent/AsideContent';
import { SteppedContent } from './components/SteppedContent/SteppedContent';

export const UserDataForm = () => {
  return (
    <StepperContextProvider shouldSkipIntoduction={false}>
      <div className="container">
        <div className="flex gap-4">
          <div className="hidden md:block w-5/12">
            <AsideContent />
          </div>
          <div className="w-full md:w-7/12 pt-24">
            <SteppedContent />
          </div>
        </div>
        <MobileSteppedNavigation steps={steps} />
      </div>
    </StepperContextProvider>
  );
};
