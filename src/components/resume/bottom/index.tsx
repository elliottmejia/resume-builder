import { cn } from "lib/utils";
import { Icon } from "@iconify/react";
import type { Edu, Cert } from "data/types";

type Props = {
  children?: React.ReactNode;
  className?: string;
  eduData: Edu[];
  certData: Cert[];
};

const BottomContainer = (props: Props) => {
  const { className, children, eduData, certData } = props;
  const sectionClasses = "w-full h-fit pt-5 mt-5 border-t border-gray-200";
  return (
    <div className={cn("flex flex-col", className)}>
      <div id="education" className={sectionClasses}>
        <h3 className="flex flex-inline gap-1 font-semibold leading-none tracking-tight">
          <span>
            <Icon icon="mdi:education-outline" />
          </span>
          Education
        </h3>
        <div className="mt-2 h-fit">
          {eduData.map((data: Edu, index: number) => {
            const { institution, degree, location, startDate, endDate } = data;

            return (
              <div key={institution + index} className="text-[10pt] pt-2">
                <strong className="font-bold">{institution}</strong>
                <br />
                <i className="text-[#3F3F3F]">{degree}</i>
                <br />
                <p className="text-[#3F3F3F]">{location}</p>
                <p className="text-[#3F3F3F]">
                  {startDate} - {endDate}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/*

CERTIFICATIONS

     */}
      <div id="certifications" className={cn("sm:hidden", sectionClasses)}>
        <h3 className="flex flex-inline gap-1 font-semibold leading-none tracking-tight">
          <span>
            <Icon icon="mdi:certificate" />
          </span>
          Certifications
        </h3>
        <div className="mt-2 mb-1 h-fit flex flex-col gap-2">
          {certData.map((data: Cert, index: number) => {
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
        </div>
      </div>
      {children}
    </div>
  );
};

export default BottomContainer;
