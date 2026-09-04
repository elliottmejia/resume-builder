import { Icon } from "@iconify/react";
import type { Exp } from "data/types.ts";

type Props = {
  data: Exp;
  delimiter?: string | "-";
};

const ExperienceCard = ({ data, delimiter }: Props) => {
  //prettier-ignore
  const { title, company, location, startDate, endDate, entries }: Exp = data;

  delimiter = " " + (delimiter || "-").trim() + " ";

  return (
    <div className="experience-card relative pb-5 mb-5 border-b border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
      <h3 className="text-md font-semibold leading-none tracking-tight">
        {title}
        {delimiter}
        {company}
      </h3>
      <p className="text-sm italic opacity-75 mt-1.5">
        ({startDate}
        &nbsp;to&nbsp;
        {endDate})
        {delimiter}
        {location}
      </p>
      <div className="mt-3">
        {entries.map((entry: string, idx: number) => (
          <div
            key={idx}
            id={`description-${idx + 1}`}
            className="py-1 text-sm flex items-start gap-1.5"
          >
            <Icon
              icon="material-symbols:commit"
              className="shrink-0 mt-0.5"
            />
            <span className="text-black">{entry}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExperienceCard;
