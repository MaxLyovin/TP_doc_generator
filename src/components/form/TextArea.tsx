import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { FieldValues, FieldPath } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { ControlledProps } from "@/@types/form";

type TextAreaProps = {
  label: string;
  placeholder?: string;
  description?: string;
  textAriaProps?: React.ComponentProps<"textarea">;
};

export const TextAreaField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  controllerProps,
  label,
  placeholder,
  description,
  textAriaProps,
}: ControlledProps<TFieldValues, TName, TextAreaProps>) => {
  return (
    <FormField
      {...controllerProps}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              className="w-full"
              placeholder={placeholder}
              {...field}
              {...textAriaProps}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
