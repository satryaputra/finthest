import { useFormContext } from "react-hook-form";
import { Input, type InputProps } from "@/components/ui/input";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField as _FormField,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

interface FormFieldProps extends InputProps {
  name: string;
  label: string;
  error?: string;
}

export default function FormField(props: FormFieldProps) {
  const { name, label, placeholder, className, error, ...otherInputProps } = props;
  const { control } = useFormContext();
  return (
    <_FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              className={cn("!ring-offset-0 !ring-0 focus:!ring-1", className)}
              {...otherInputProps}
            />
          </FormControl>
          <FormMessage className="text-sm font-normal italic !mt-[.3rem] pl-1">
            {error}
          </FormMessage>
        </FormItem>
      )}
    />
  );
}
