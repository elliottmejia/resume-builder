import ExperienceCard from "../card";
import { experienceData } from "src/data/data";

const ExperienceContainer = () => {
  const ExperienceContainerClasses =
    "bg-slate-100 p-4 md:p-8 h-full w-full min-w-8 text-left flex flex-col gap-y-2";

  return (
    <div className={ExperienceContainerClasses}>
      {experienceData.map((data, idx) => (
        <ExperienceCard data={data} key={idx} />
      ))}
    </div>
  );
};

export default ExperienceContainer;
