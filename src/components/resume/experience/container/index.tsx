import ExperienceCard from "../card";
import { experienceData } from "src/data/data";
import { forwardRef } from "react";

type Props = {
  children?: React.ReactNode;
};

const ExperienceContainer = forwardRef<HTMLDivElement, Props>(
  ({ children }: Props, ref) => {
    const ExperienceContainerClasses =
      "bg-gray-100 p-4 md:p-8 h-full w-full min-w-8 text-left flex flex-col gap-y-2 relative";

    return (
      <div id="experience-wrap">
        <div className={ExperienceContainerClasses} id="experience" ref={ref}>
          <div id="experience-container-gradient" />
          {children}
          {experienceData.map((data, idx) => (
            <ExperienceCard data={data} key={idx} />
          ))}
        </div>
      </div>
    );
  }
);

export default ExperienceContainer;
