import { Check, Star } from "lucide-react";

export type StepIndexState = "active" | "inactive" | "completed";

type StepIndexProps = {
  state: StepIndexState;
  orderNumber: number;
};

export const StepIndex = ({ state, orderNumber }: StepIndexProps) => {
  if (state === "completed") {
    return (
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-primary shrink-0 border-2 border-primary">
        <Check className="w-5 h-5" />
      </div>
    );
  }

  if (state === "inactive") {
    return (
      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 text-gray-600 shrink-0">
        {orderNumber}
      </div>
    );
  }

  return (
    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary text-white shrink-0">
      <p className="font-bold">{orderNumber || <Star size={16} />}</p>
    </div>
  );
};
