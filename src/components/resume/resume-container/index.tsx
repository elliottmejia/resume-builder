import { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ResumeContainer = forwardRef<HTMLDivElement, Props>(
  ({ children, className = "" }, ref) => {
    const ContainerClasses = `flex flex-row h-fit w-100 pt-4 gap-1 ${className}`;
    return (
      <div className={ContainerClasses} ref={ref}>
        {children}
      </div>
    );
  }
);

export default ResumeContainer;
