import { cn, uuid } from "lib/utils";
import { Card, CardTitle, CardContent } from "components/ui";
import { Icon } from "@iconify/react";
import { eduData, certData } from "data/data";
import type { EduType, CertType } from "data/types";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const BottomContainer = (props: Props) => {
  const { className, children } = props;
  const cardClasses = "w-full h-fit bg-white z-10 p-2 sm:pl-6 sm:pt-4";
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Card id="education" className={cn("p-8", cardClasses)}>
        <CardTitle className="flex flex-inline gap-1">
          <span>
            <Icon icon="mdi:education-outline" />
          </span>
          Education
        </CardTitle>
        <CardContent className="p-0 mt-2 mb-1 h-fit">
          {eduData.map((data: EduType, index: number) => {
            const { institution, degree, startDate, endDate } = data;

            return (
              <div key={institution + index} className="text-[10pt]">
                <strong className="font-bold">{institution}</strong>
                <br />
                <i className="text-[#3F3F3F]">{degree}</i>
                <br />
                <p className="text-[#3F3F3F]">
                  {startDate} - {endDate}
                </p>
              </div>
            );
          })}
        </CardContent>
      </Card>
      {/* 

CERTIFICATIONS

     */}
      <Card id="certifications" className={cn("sm:hidden", cardClasses)}>
        <CardTitle className="flex flex-inline gap-1">
          <span>
            <Icon icon="mdi:certificate" />
          </span>
          Certifications
        </CardTitle>
        <CardContent className="p-0 mt-2 mb-1 h-fit flex flex-col gap-2">
          {certData.map((data: CertType, index: number) => {
            const { certs, issuer } = data;
            return (
              <div key={issuer + "-" + index} className="text-[10pt]">
                <strong className="text-[11pt]">{issuer}</strong>
                <br />
                {certs.map((cert, index) => {
                  return (
                    <div key={index}>
                      <i className="text-[#3F3F3F]">
                        {cert.title} - {cert.issueDate}
                      </i>
                      <br />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </CardContent>
      </Card>
      {children}
    </div>
  );
};

export default BottomContainer;
