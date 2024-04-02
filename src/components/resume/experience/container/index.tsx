import ExperienceCard from "../card";
import { experienceData } from "src/data/data";

const ExperienceContainer = () => {
  const ExperienceContainerClasses =
    "bg-gray-100 p-4 md:p-8 h-full w-full min-w-8 text-left flex flex-col gap-y-2 relative";

  return (
    <div className={ExperienceContainerClasses}>
      <div
        style={{
          height: "inherit",
          width: "20px",
          position: "absolute",
          top: 0,
          left: 0,
          background:
            "linear-gradient(to right,hsl(0, 0%, 100%) 0%,hsla(0, 0%, 100%, 0.97) 9.1%,hsla(0, 0%, 100%, 0.925) 17%,hsla(0, 0%, 100%, 0.868) 23.9%,hsla(0, 0%, 100%, 0.801) 30%,hsla(0, 0%, 100%, 0.725) 35.5%,hsla(0, 0%, 100%, 0.644) 40.5%,hsla(0, 0%, 100%, 0.558) 45.4%,hsla(0, 0%, 100%, 0.471) 50.2%,hsla(0, 0%, 100%, 0.385) 55.2%,hsla(0, 0%, 100%, 0.301) 60.5%,hsla(0, 0%, 100%, 0.223) 66.5%,hsla(0, 0%, 100%, 0.151) 73.2%,hsla(0, 0%, 100%, 0.089) 80.9%,hsla(0, 0%, 100%, 0.038) 89.8%,hsla(0, 0%, 100%, 0) 100%)",
        }}
      ></div>
      {experienceData.map((data, idx) => (
        <ExperienceCard data={data} key={idx} />
      ))}
    </div>
  );
};

export default ExperienceContainer;
