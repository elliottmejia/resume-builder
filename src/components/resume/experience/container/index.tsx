import ExperienceCard from "../card";
import { experienceData } from "src/data/data";
import { forwardRef } from "react";
import { cn, isIos } from "lib/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
};
const agentIos = isIos();

const ExperienceContainer = forwardRef<HTMLDivElement, Props>(
  ({ children, className }: Props, ref) => {
    let ExperienceContainerClasses =
      "bg-gray-100 p-4 md:p-8 h-full w-full min-w-8 text-left flex flex-col gap-y-2 relative sm:top-[0.5rem] ";

    if (agentIos) {
      ExperienceContainerClasses += " no-clip";
    }

    return (
      <>
        <div className="relative">
          {!agentIos && (
            <div
              id="experience-mobile-trans-bg"
              className=" block sm:hidden w-full h-[20px] absolute self-start top-0"
              style={{
                background: "linear-gradient(180deg, #fff 20%, #f8f8f8 100%)",
              }}
            />
          )}
        </div>
        <div
          className={cn(ExperienceContainerClasses, className)}
          id="experience"
          ref={ref}
        >
          <div id="experience-container-gradient" />
          {experienceData.map((data, idx) => (
            <ExperienceCard data={data} key={idx} />
          ))}
          {children}
        </div>
      </>
    );
  }
);

export default ExperienceContainer;
