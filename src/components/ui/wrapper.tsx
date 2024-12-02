import { cn } from "@/lib/utils";
import { ReactNode, FC } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        "w-[95%] lg:w-[90%] 4xl:w-[80%] 5xl:w-[70%] 6xl:w-[50%] mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
};
