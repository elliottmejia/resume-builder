import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ResumeContainer = ({
  children,
  className,
}: Props): React.ReactElement => {
  const ContainerClasses = `flex flex-row h-fit w-100 pt-4 gap-1 ${className}`;
  return <div className={ContainerClasses}>{children}</div>;
};

export default ResumeContainer;
