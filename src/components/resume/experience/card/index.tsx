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
  const { title, company, location, startDate, endDate, entries }: Experience =
    data;
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
        <CardDescription>
          {entries.map((entry, idx) => (
            <p key={idx} className="py-1 text-black">
              <Icon
                icon="material-symbols:commit"
                style={{ display: "inline" }}
              />
              {entry}
            </p>
          ))}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
export default ExperienceCard;
