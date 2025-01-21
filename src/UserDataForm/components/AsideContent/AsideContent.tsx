import { SteppedNavigation } from "@/components/SteppedNavigation/SteppedNavigation";

const steps = ["intro", "first step", "second step", "third step", "summary"];

export const AsideContent = () => {
  return (
    <div>
      <SteppedNavigation steps={steps} />
    </div>
  );
};
