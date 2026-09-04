import { cn } from "lib/utils";
import { Card } from "components/ui/card";
import { Skills as SkillsType, Cert } from "data/types";

type Props = {
  className?: string;
  instance: "bottom" | "sidebar";
  skillsData: SkillsType[];
  certData: Cert[];
  currentProjects?: string[];
};

const Skills = (props: Props) => {
  const { className, instance, skillsData, certData, currentProjects } = props;
  return (
    <div
      id={`skills-${instance}`}
      className={cn("sm:pt-4 sm:pl-4 flex flex-col", className)}
    >
      {instance === "sidebar" &&
        skillsData.map((category: SkillsType, idx) => (
          <div key={idx} className="text-left mb-3">
            <h3 className="font-bold">{category.title}</h3>
            <ul className="pl-1 text-xs space-y-0.5">
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      {instance === "sidebar" && (
        <h3 className="text-left font-bold mt-1 mb-1">Certifications</h3>
      )}
      {instance === "sidebar" &&
        certData.map((data: Cert, idx: number) => (
          <div key={idx} className="text-left mb-2">
            <h3 className="font-bold text-[14px]">{data.issuer}</h3>
            {data.certs.map((cert, idx) => (
              <div key={idx} className="pl-1 text-xs">
                <p key={idx}>
                  {cert.title} - {cert.issueDate}
                </p>
              </div>
            ))}
          </div>
        ))}
      {instance === "sidebar" && currentProjects && currentProjects.length > 0 && (
        <>
          <h3 className="text-left font-bold mt-2 mb-1">Current Projects</h3>
          <ul className="pl-1 text-xs text-left space-y-0.5">
            {currentProjects.map((project, idx) => (
              <li
                key={idx}
                className="hover:translate-x-1 animate duration-300 ease-out"
              >
                {project}
              </li>
            ))}
          </ul>
        </>
      )}
      {instance === "bottom" &&
        skillsData.map((category: SkillsType, idx) => (
          <Card key={idx} className="text-left p-2 bg-white z-10">
            <h3 className="font-bold">{category.title}</h3>
            <ul className="pl-1 text-xs">
              {category.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </Card>
        ))}
    </div>
  );
};

export default Skills;
