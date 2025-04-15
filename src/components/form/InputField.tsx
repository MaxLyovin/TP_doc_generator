import { FieldValues, FieldPath } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { ControlledProps } from "@/@types/form";

type InputProps = {
  label: string;
  placeholder?: string;
  description?: string;
  inputProps?: React.ComponentProps<"input">;
};

export const InputField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  controllerProps,
  label,
  placeholder,
  description,
  inputProps,
}: ControlledProps<TFieldValues, TName, InputProps>) => {
  return (
    <FormField
      {...controllerProps}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              className="w-full"
              placeholder={placeholder}
              {...field}
              {...inputProps}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
