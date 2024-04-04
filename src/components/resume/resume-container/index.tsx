import { forwardRef } from "react";
import { cn } from "lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ResumeContainer = forwardRef<HTMLDivElement, Props>(
  ({ children, className = "" }, ref) => {
    return (
      <div
        className={cn(
          `flex flex-col sm:flex-row h-fit w-100 pt-4 gap-0`,
          className
        )}
        id="resume-container"
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default ResumeContainer;
