import { UseFormRegisterReturn } from "react-hook-form";

type RadioGroupProps = {
  groupDescription: string;
  options: { value: string; label: string }[];
  register: UseFormRegisterReturn;
};

export const RadioGroup = ({
  options,
  register,
  groupDescription,
}: RadioGroupProps) => {
  return (
    <fieldset className="flex flex-col items-start gap-2">
      <p>{groupDescription}</p>

      {options.map(({ value, label }) => {
        const optionId = `${label}-${value}`;
        return (
          <div
            key={optionId}
            className="flex flex-row-reverse gap-2 justify-end"
          >
            <label
              htmlFor={optionId}
              className="block  text-sm font-medium text-gray-900 dark:text-white"
            >
              {label}
            </label>
            <input type="radio" id={optionId} value={value} {...register} />
          </div>
        );
      })}
    </fieldset>
  );
};
