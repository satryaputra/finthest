import { cn } from "@/lib/utils";
import { Button as _Button, type ButtonProps } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/atoms";

interface IButtonProps extends ButtonProps {
  isLoading?: boolean;
}

export default function Button(props: IButtonProps) {
  const { children, className, isLoading, ...otherProps } = props;
  return (
    <_Button
      {...otherProps}
      className={cn(
        "bg-primary hover:bg-primary/80 focus:!ring-1 focus:!ring-primary",
        className
      )}
      disabled={isLoading}
    >
      {!isLoading ? children : <LoadingSpinner />}
    </_Button>
  );
}
