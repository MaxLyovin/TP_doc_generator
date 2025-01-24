import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";

export type ControlledProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TComponentProps = unknown
> = {
  controllerProps: Omit<ControllerProps<TFieldValues, TName>, "render">;
} & TComponentProps;
