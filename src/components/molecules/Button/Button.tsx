import { cn } from "@/lib/utils";
import { Button as _Button, type ButtonProps } from "@/components/ui/button";

export default function Button(props: ButtonProps) {
  const { children, className } = props;
  return (
    <_Button
      {...props}
      className={cn(
        "bg-primary hover:bg-primary/80 w-full text-xl py-6 group mt-4",
        className
      )}
    >
      {children}
    </_Button>
  );
}
