import { skillsData } from "src/data/data";

type CategoryType = {
  title: string;
  skills: string[];
};

const Skills = () => {
  return (
    <div id="skills" className="pt-4 pl-4">
      {skillsData.map((category: CategoryType, idx) => (
        <div key={idx} className="text-left">
          <h3 className="font-bold">{category.title}</h3>
          <ul className="pl-1 text-sm">
            {category.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
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
