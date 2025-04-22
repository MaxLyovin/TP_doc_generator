import { StepperContextProvider } from "@/state/providers/StepperContextProvider/StepperContextProvider";
import { MobileSteppedNavigation } from '@/components/MobileSteppedNavigation/MobileSteppedNavigation';
import { Footer } from '@/components/Footer/Footer';
import { steps } from '@/UserDataForm/steps';

import { AsideContent } from './components/AsideContent/AsideContent';
import { SteppedContent } from './components/SteppedContent/SteppedContent';

export const UserDataForm = () => {
  return (
    <StepperContextProvider shouldSkipIntoduction={false}>
      <div className=" flex flex-col py-3">
        <div className="flex-1 container mx-auto px-4">
          <div className="flex gap-4 py-4">
            <div className="hidden md:block w-5/12">
              <AsideContent />
            </div>
            <div className="w-full md:w-7/12 pt-4 md:pt-0">
              <SteppedContent />
            </div>
          </div>
        </div>
        <Footer />
        <MobileSteppedNavigation steps={steps} />
      </div>
    </StepperContextProvider>
  );
};
