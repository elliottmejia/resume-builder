import React from "react";

type Props = {
  children: React.ReactNode;
};

const ResumeContainer = ({ children }: Props): React.ReactElement => {
  const ContainerClasses = "flex flex-row h-fit w-100 pt-4 gap-1";
  return <div className={ContainerClasses}>{children}</div>;
};

export default ResumeContainer;
