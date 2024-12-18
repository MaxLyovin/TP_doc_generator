import { UseFormRegisterReturn } from "react-hook-form";

type RadioGroupProps = {
  selectDescription: string;
  options: { value: string; label: string }[];
  register: UseFormRegisterReturn;
};

export const Select = ({
  options,
  register,
  selectDescription,
}: RadioGroupProps) => (
  <div className="flex flex-col items-start gap-2">
    <label className="block text-sm/6 font-medium text-gray-900">
      {selectDescription}
    </label>
    <select
      {...register}
      className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
    >
      {options.map(({ value, label }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
);
