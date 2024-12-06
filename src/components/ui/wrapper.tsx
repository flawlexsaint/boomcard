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
        "w-[95%] md:w-[90%] lg:w-[80%] xl:w-[1408px] 4xl:w-[1408px] 5xl:w-[1408px] 6xl:w-[1408px] mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
};
