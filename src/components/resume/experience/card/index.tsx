import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  CardDescription,
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
  delimiter?: string | "-";
};

const ExperienceCard = ({ data, delimiter }: Props) => {
  //prettier-ignore
  const { title, company, location, startDate, endDate, entries }: Experience = data;

  delimiter = " " + (delimiter || "-").trim() + " ";

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {title}
          {delimiter}
          {company}
          {delimiter}
          {location}
          {delimiter}({startDate}
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
