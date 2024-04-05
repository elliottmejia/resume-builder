import { isProd } from "src/lib/utils";
import { ExpType, InfoType, SkillsType, EduType, CertType } from "data/types";

export const HOSTED_DOMAIN = isProd()
  ? "https://resume.elliottmejia.com"
  : "copy successful";

export const infoData: InfoType = {
  name: "Elliott Mejia",
  tel: "(206) 792-6241",
  email: "mailto:mejia.elliott@gmail.com",
  emailShort: "mejia.elliott@gmail",
  portfolio: "https://www.elliottmejia.com",
  portfolioShort: "elliottmejia.com",
  linkedin: "https://www.linkedin.com/in/elliott-mejia/",
  linkedinShort: "/in/elliott-mejia/",
};

export const experienceData: ExpType[] = [
  {
    title: "Marketing Technology Consultant",
    company: "Datamark Digital",
    location: "Los Angeles, CA",
    startDate: "June 2023",
    endDate: "Present",
    entries: [
      "Developed and deployed several lead-generation automations in Python utilizing the Lead Scrape, D7, and High Level APIs. This resulted in a ~1200% increase in lead generation efficiency.",

      "Collaborated directly with CEO Joe Weaver in defining data structures, developing custom data pipelines, and implementing data-driven marketing strategies.",

      "Led a team of outsourced web developers, efficiently reducing the average MVP staging time to one month, thus accelerating pre-revision project delivery timelines.",

      "Offered my expertise towards revisions, providing professional, personalized support to development-oriented projects and improving client satisfaction.",
    ],
  },
  {
    title: "Front End Developer (contract)",
    company: "Dolls Kill",
    location: "Los Angeles, CA",
    startDate: "March 2023",
    endDate: "June 2023",
    entries: [
      "Under scope of contract, executed a strategic transition of a Magento-imported theme to Shopify 2.0, enhancing website usability and performance.",
      "Spearheaded the development of a bespoke wishlist app using Tailwind CSS.",
      "Improved collection page performance by 15% by refactoring Javascript to Liquid.",
      "Significantly refactored Dolls Kill's codebase.",
    ],
  },
  {
    title: "Ecommerce Developer",
    company: "Lauren Moshi",
    location: "Commerce, CA",
    startDate: "November 2021",
    endDate: "March 2023",
    entries: [
      "Pioneered the adoption of a git-based theme management system for Shopify themes, creating a scalable and efficient framework with stability as a KPI.",
      "Designed and created three new storefronts in use by the company: Lestien, Michael Lauren, and Lauren Moshi.",
      "Led a meticulous audit of business data, enhancing product administration efficiency and dramatically reducing categorization inconsistencies.",
      "Created a custom Shopify app to attach webhooks to Listrak, eliminating the need for Shopify Plus and saving the company $2,000 per month.",
      "Created an internal database of product inventory, sales, and customer data, enabling the company to make data-driven decisions and optimize marketing strategies.",
      "Took and edited product photos in our professional studio as a backup photographer.",
    ],
  },
];

export const skillsData: SkillsType[] = [
  {
    title: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Python",
      "HTML",
      "CSS",
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
    skills: ["GitHub", "Jira", "Asana", "Figma", "Photoshop", "Illustrator"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "SQL", "GraphQL"],
  },
  {
    title: "Platforms",
    skills: ["Shopify", "WordPress", "AWS"],
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