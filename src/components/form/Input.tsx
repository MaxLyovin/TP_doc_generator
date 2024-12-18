import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  id: string;
  label: string;
  register: UseFormRegisterReturn;
};

export const Input = ({ id, label, register }: InputProps) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <label
        htmlFor={id}
        className="block  text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        id={id}
        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        {...register}
      />
    </div>
  );
};
