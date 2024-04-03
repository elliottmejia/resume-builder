import { Icon } from "@iconify/react";
import { useRef } from "react";

import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "components/ui/card";
import type { Experience } from "data/types.ts";

type Props = {
  data: Experience;
  delimiter?: string | "-";
};

const ExperienceCard = ({ data, delimiter }: Props) => {
  //prettier-ignore
  const { title, company, location, startDate, endDate, entries }: Experience = data;

  delimiter = " " + (delimiter || "-").trim() + " ";

  type mouseEvent = React.MouseEvent<HTMLDivElement>;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleModalOpen = (ref: HTMLDivElement | null) => {
    ref;
    return null;
  };

  const handleEditClick = (e: mouseEvent) => {
    const clickRef = cardRef.current ? cardRef.current : null;
    handleModalOpen(clickRef);
    console.log(e);
    return null;
  };

  return (
    <Card id="experience-card" ref={cardRef} className="z-10 relative">
      <CardHeader className="pb-2 pt-4">
        <CardTitle className="text-md pt-0">
          {title}
          {delimiter}
          {company}
          {delimiter}
          {location}
        </CardTitle>
        <CardTitle className="text-sm italic opacity-75">
          ({startDate}
          &nbsp;to&nbsp;
          {endDate})
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        {entries.map((entry, idx) => (
          <div
            key={idx}
            id={`description-${idx + 1}`}
            className="py-[0.5] text-sm"
          >
            <Icon
              icon="material-symbols:commit"
              style={{ display: "inline" }}
            />
            <span className="text-black">{entry}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
export default ExperienceCard;
