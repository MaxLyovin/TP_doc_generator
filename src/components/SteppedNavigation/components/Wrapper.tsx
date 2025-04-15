import { ChevronDown, ChevronUp } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useToggle } from "@/hooks/useToggle";

type WrapperProps = {
  children: JSX.Element | JSX.Element[];
  stepsAmount: number;
  activeStepIndex: number;
};

export const Wrapper = ({
  children,
  stepsAmount,
  activeStepIndex,
}: WrapperProps) => {
  const { state, toggle } = useToggle(true);

  const stepsAmountWithoutIntoduction = stepsAmount - 1;

  const getProgress = () =>
    (activeStepIndex * 100) / stepsAmountWithoutIntoduction;

  return (
    <Collapsible
      className="p-4 border-2 rounded"
      data-testid="collapseSteppedNavigation"
      id="introduction"
      open={state}
      onOpenChange={toggle}
    >
      <div>
        <div className="flex flex-row items-center justify-between">
          <p className="text-xl font-semibold">Process Summary</p>
          <div className="flex flex-row items-center justify-between">
            <p className="text-lg font-semibold">
              {`Step ${activeStepIndex}/${stepsAmountWithoutIntoduction}`}
            </p>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                {state ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
        </div>
        <div className="my-6">
          <Progress value={getProgress()} />
        </div>
      </div>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
};
