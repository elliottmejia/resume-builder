import { Icon } from "@iconify/react";

import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "components/ui/card";
import type { ExpType } from "data/types.ts";

type Props = {
  data: ExpType;
  delimiter?: string | "-";
};

const ExperienceCard = ({ data, delimiter }: Props) => {
  //prettier-ignore
  const { title, company, location, startDate, endDate, entries }: ExpType =
    data;

  delimiter = " " + (delimiter || "-").trim() + " ";

  // type mouseEvent = React.MouseEvent<HTMLDivElement>;
  // const cardRef = useRef<HTMLDivElement>(null);

  // const handleModalOpen = (ref: HTMLDivElement | null) => {
  //   ref;
  //   return null;
  // };

  // const handleEditClick = (e: mouseEvent) => {
  //   const clickRef = cardRef.current ? cardRef.current : null;
  //   handleModalOpen(clickRef);
  //   console.log(e);
  //   return null;

  // };

  return (
    <Card
      // ref={cardRef}
      className="experience-card z-10 relative"
    >
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
        {entries.map((entry: string, idx: number) => (
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
