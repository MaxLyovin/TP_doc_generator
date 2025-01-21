import { StepperContextProvider } from "@/state/providers/StepperContextProvider/StepperContextProvider";
import { AsideContent } from "./components/AsideContent/AsideContent";
import { SteppedContent } from "./components/SteppedContent/SteppedContent";

export const UserDataForm = () => {
  return (
    <StepperContextProvider shouldSkipIntoduction={false}>
      <div className="container">
        <div className="flex gap-4">
          <div className="w-5/12 min-h-[100px]">
            <AsideContent />
          </div>
          <div className="w-7/12 min-h-[100px] bg-slate-300">
            <SteppedContent />
          </div>
        </div>
      </div>
    </StepperContextProvider>
  );
};
