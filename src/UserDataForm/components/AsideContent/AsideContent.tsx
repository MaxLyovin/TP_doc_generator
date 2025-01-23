import { SteppedNavigation } from "@/components/SteppedNavigation/SteppedNavigation";
import { steps } from "@/UserDataForm/steps";

export const AsideContent = () => {
  return (
    <div>
      <SteppedNavigation steps={steps} />
    </div>
  );
};
