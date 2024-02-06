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
import { Eye, EyeOff } from "lucide-react";
import React from "react";

interface FormFieldProps extends InputProps {
  name: string;
  label: string;
}

export default function FormField(props: FormFieldProps) {
  const { name, label, placeholder, className, ...otherInputProps } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [isEyeOpen, setIsEyeOpen] = React.useState<boolean>(false);
  return (
    <_FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="!font-normal !text-xs">{label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                {...otherInputProps}
                placeholder={placeholder}
                className={cn(
                  "!ring-offset-0 !ring-0 focus:!ring-0 border-2 !border-neutral-300 focus:!border-neutral-500",
                  className,
                  Object.keys(errors).includes(name) && "!border-red-300"
                )}
                type={isEyeOpen ? "text" : otherInputProps.type}
              />
              {otherInputProps.type === "password" &&
                (isEyeOpen ? (
                  <Eye
                    className="absolute top-1/2 -translate-y-1/2 right-4 h-5 w-5 text-neutral-700 cursor-pointer"
                    onClick={() => {
                      setIsEyeOpen(false);
                    }}
                  />
                ) : (
                  <EyeOff
                    className="absolute top-1/2 -translate-y-1/2 right-4 h-5 w-5 text-neutral-700 cursor-pointer"
                    onClick={() => {
                      setIsEyeOpen(true);
                    }}
                  />
                ))}
            </div>
          </FormControl>
          <FormMessage className="text-xs font-normal !mt-[.3rem] pl-1" />
        </FormItem>
      )}
    />
  );
}
