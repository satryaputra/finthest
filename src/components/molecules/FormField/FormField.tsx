import React from "react";
import { useFormContext } from "react-hook-form";
import { Input, type InputProps } from "@/components/ui/input";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField as _FormField,
} from "@/components/ui/form";

interface FormFieldProps extends InputProps {
  name: string;
  label: string;
}

export default function FormField(props: FormFieldProps) {
  const { name, label, placeholder, ...otherInputProps } = props;
  const { control } = useFormContext();
  return (
    <_FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} placeholder={placeholder} {...otherInputProps} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
