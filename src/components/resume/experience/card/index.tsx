import { Icon } from "@iconify/react";
import { useRef } from "react";
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "components/ui/card";

type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  entries: string[];
};

type Props = {
  data: Experience;
  id: string;
  delimiter?: string | "-";
};

const ExperienceCard = ({ data, delimiter, id }: Props) => {
  //prettier-ignore
  const { title, company, location, startDate, endDate, entries }: Experience = data;

  delimiter = " " + (delimiter || "-").trim() + " ";

  type mouseEvent = React.MouseEvent<HTMLDivElement>;
  const cardRef = useRef<HTMLDivElement>(null);

  const handleModalOpen = (ref: HTMLDivElement | null) => {
    ref;
    return null;
  };

  const handleDoubleClick = (e: mouseEvent) => {
    const clickRef = cardRef.current ? cardRef.current : null;
    handleModalOpen(clickRef);
    console.log(e);
    return null;
  };

  return (
    <Card
      id="experience-card"
      ref={cardRef}
      className=""
      onDoubleClick={(e) => handleDoubleClick(e)}
    >
      <CardHeader>
        <CardTitle>
          {title}
          {delimiter}
          {company}
          {delimiter}
          {location}
        </CardTitle>
        <CardTitle className="text-md italic opacity-75">
          ({startDate}
          &nbsp;to&nbsp;
          {endDate})
        </CardTitle>
      </CardHeader>
      <CardContent>
        {entries.map((entry, idx) => (
          <div key={idx} id={`description-${idx + 1}`} className="py-1 text-sm">
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
