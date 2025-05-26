import { skillsData, certData } from "data/data";
import { cn } from "lib/utils";
import { Card } from "components/ui/card";
import { Skills as SkillsType, Cert } from "data/types";

type Props = {
  className?: string;
  instance: "bottom" | "sidebar";
};

const Skills = (props: Props) => {
  const { className, instance } = props;
  return (
    <div
      id={`skills-${instance}`}
      className={cn("sm:pt-4 sm:pl-4 flex flex-col", className)}
    >
      {instance === "sidebar" &&
        skillsData.map((category: SkillsType, idx) => (
          <div key={idx} className="text-left">
            <h3 className="font-bold">{category.title}</h3>
            <ul className="pl-1 text-xs">
              {category.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="hover:translate-x-1 animate duration-300 ease-out"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      {instance === "sidebar" && (
        <>
          <br />
          <h3 className="text-left font-bold">Certifications</h3>
        </>
      )}
      {instance === "sidebar" &&
        certData.map((data: Cert, idx: number) => (
          <div key={idx} className="text-left">
            <h3 className="font-bold text-[14px]">{data.issuer}</h3>
            {data.certs.map((cert, idx) => (
              <div key={idx} className="pl-1 text-xs">
                <p
                  key={idx}
                  className="hover:translate-x-1 animate duration-300 ease-out"
                >
                  {cert.title} - {cert.issueDate}
                </p>
              </div>
            ))}
          </div>
        ))}
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

// export const skillsData = [
//   {
//     title: "Languages",
//     skills: [
//       "JavaScript",
//       "TypeScript",
//       "React",
//       "Python",
//       "HTML",
//       "CSS",
//       "R",
//       "Liquid",
//       "Jekyl",
//       "Ruby",
//       "PHP",
//       "Java",
//     ],
//   },
//   {
//     title: "Frameworks",
//     skills: ["React", "Next.js", "Gatsby", "Node.js", "Express"],
//   },
//   {
//     title: "Tools",
//     skills: ["Git", "GitHub", "GitLab", "Jira", "Asana", "AWS"],
//   },
//   {
//     title: "Databases",
//     skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
//   },
//   {
//     title: "Design",
//     skills: ["Figma", "Photoshop", "Illustrator", "InDesign"],
//   },
//   {
//     title: "Platforms",
//     skills: ["Shopify", "Magento", "WordPress"],
//   },
//   {
//     title: "Marketing",
//     skills: [
//       "SEO",
//       "SEM",
//       "Email Marketing",
//       "Lead Generation",
//       "Social Media Marketing",
//     ],
//   },
// ];
