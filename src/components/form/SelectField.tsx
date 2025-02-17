import { ControlledProps } from "@/@types/form";
import type { FieldPath, FieldValues } from "react-hook-form";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type SelectProps = {
	label: string;
	options: { value: string; label: string }[];
	description?: string;
	placeholder?: string;
};

export const SelectField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
	controllerProps,
	label,
	options,
	description,
	placeholder,
}: ControlledProps<TFieldValues, TName, SelectProps>) => {
	return (
		<FormField
			{...controllerProps}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<Select value={field.value} onValueChange={field.onChange}>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							{options.map(option => (
								<SelectItem key={option.value} value={option.value}>
									{option.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					{description && <FormDescription>{description}</FormDescription>}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
