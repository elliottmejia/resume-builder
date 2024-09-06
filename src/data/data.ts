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
      "Consistently update tooling based on industry trends, but tend to stick to what works.",
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
    title: "DAW competency (desc)",
    skills: ["Ableton Live", "Logic Pro", "FL Studio", "Bitwig", "Pro Tools"],
  },
  {
    title: "Console competency",
    skills: [
      "SSL(A-Z)",
      "Behringer X32",
      "Midas M32",
      "Yamaha DM7",
      "Soundcraft EFX / Si Impact",
      "Allen & Heath SQ-5",
    ],
  },
  {
    title: "Skills",
    skills: [
      "Mixing",
      "Mastering",
      "Recording",
      "Production",
      "Vocal Coaching",
      "Guitar / Bass / Drums / Keys",
      "Advanced Sound Design",
      "Live Sound",
      "Backline",
      "Lighting",
      "A/V",
      "Software Troubleshooting",
    ],
  },
  {
    title: "Available Plugins",
    skills: [
      "Plugin Alliance (full)",
      "FabFilter (full)",
      "Soundtoys (full)",
      "Waves",
      "Antares",
      "iZotope",
      "Soothe",
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