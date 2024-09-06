import { isProd } from "src/lib/utils";
import { ExpType, InfoType, SkillsType, EduType, CertType } from "data/types";

export const HOSTED_DOMAIN = isProd()
  ? "https://resume.elliottmejia.com"
  : "copy successful";

export const infoData: InfoType = {
  name: "Elliott Mejia",
  tel: "(206) 792-6241",
  email: "mailto:info@elliottmejia.com",
  emailShort: "info@elliottmejia.com",
  // portfolio: "https://www.elliottmejia.com",
  // portfolioShort: "elliottmejia.com",
  linkedin: "https://www.linkedin.com/in/elliott-mejia/",
  linkedinShort: "/in/elliott-mejia/",
};

export const experienceData: ExpType[] = [
  {
    title: "Producer / Mix Engineer",
    company: "Labyrinth Services (self-employed)",
    location: "North Hollywood, CA",
    startDate: "2020",
    endDate: "Present",
    entries: [
      "Worked with artists such as PF Liars, Magda Halina, Gijo, Fruit Snac, Ronnie Jake, and Mirr Img.",
      "Demonstrated competency in several DAWs, including Logic Pro, Ableton, FL Studio, Bitwig, and Pro Tools.",
      "Created and maintained a professional home studio environment, ensuring optimal recording conditions.",
    ],
  },
  {
    title: "Stagehand",
    company: "Showbox Presents",
    location: "Seattle, WA",
    startDate: "2015",
    endDate: "2019",
    entries: [
      "Specialized in backline setup and operation, including guitar and bass amplifiers, drum kits, keyboards, CDJs, Monitors, and Beck's Sitar Guitar (crazy!)",
      "Set up artists such as Jungle, The Flaming Lips, Beck, and JPEG Mafia.",
      "Mixed monitors",
      "Additionally, set up lighting, sound, and video wall for shows.",
      "Always retained a professional demeanor and made sure artists and crews always had what they needed.",
    ],
  },
  {
    title: "Stagehand",
    company: "Pyramid Staging and Events",
    location: "Seattle, WA",
    startDate: "2015",
    endDate: "2019",
    entries: [
      "Worked on arena-sized events, mostly in the country and Christian Rock space.",
      "Set up and operated lighting, sound, and video wall for shows.",
      "Ran cables, set up truss, built stages from the ground up.",
    ],
  },
];

export const skillsData: SkillsType[] = [
  {
    title: "Languages",
    skills: [
      "JavaScript (+ Typescript)",
      "Python",
      "HTML",
      "CSS (SASS, Tailwind)",
      "R",
      "Liquid",
    ],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Astro", "Django"],
  },
  {
    title: "Tools",
    skills: [
      "GitHub",
      "Jira",
      "Asana",
      "Figma",
      "Photoshop",
      "Illustrator",
      "Vi/Vim/Neovim",
    ],
  },
  {
    title: "Database",
    skills: ["MongoDB", "SQL", "GraphQL"],
  },
  {
    title: "Platforms",
    skills: ["Shopify", "WordPress", "AWS", "Netlify", "Vercel", "Heroku"],
  },
  {
    title: "Marketing",
    skills: [
      "SEO/SEM",
      "Analytics",
      "Email Marketing",
      "SMS Marketing",
      "Lead Generation",
    ],
  },
];

export const eduData: EduType[] = [
  {
    institution: "Icon College of Music",
    degree: "Audio Engineering",
    startDate: "2019",
    endDate: "2020",
  },
];

export const certData: CertType[] = [
  {
    issuer: "Shopify",
    certs: [
      {
        title: "Liquid Storefronts for Theme Developers",
        issueDate: "2022",
      },
    ],
  },
  {
    issuer: "Google",
    certs: [
      {
        title: "Google Data Analytics",

        issueDate: "2024",
      },
    ],
  },
];