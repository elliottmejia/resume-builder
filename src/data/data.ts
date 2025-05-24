import { isProd } from "src/lib/utils";
import { ExpType, InfoType, SkillsType, EduType, CertType } from "data/types";

export const HOSTED_DOMAIN = isProd()
  ? "https://resume.elliottmejia.com"
  : "copy successful";

export const infoData: InfoType = {
  name: "Elliott Mejia",
  tel: "(206) 792-6241",
  email: "info@elliottmejia.com",
  emailShort: "info@elliottmejia",
  portfolio: "https://www.elliottmejia.com",
  portfolioShort: "elliottmejia.com",
  linkedin: "https://www.linkedin.com/in/elliott-mejia/",
  linkedinShort: "/in/elliott-mejia/",
};

export const experienceData: ExpType[] = [
  {
    title: "Freelance Developer",
    company: "Parahumana",
    location: "Los Angeles, CA",
    startDate: "June 2023",
    endDate: "Present",
    entries: [
      "Engineered and deployed lead scraping tools and automation workflows for diverse client needs, improving outreach efficiency.",
      "Built and monetized custom Astro.js templates tailored for SEO and visual storytelling.",
      "Designed bespoke internal software for solar sales workflows, improving quote speed and lead conversion.",
      "Provided expert code reviews and architectural guidance to client development teams, elevating technical standards and stakeholder satisfaction.",
    ],
  },
  {
    title: "Front End Developer (contract)",
    company: "Dolls Kill",
    location: "Los Angeles, CA",
    startDate: "March 2023",
    endDate: "June 2023",
    entries: [
      "Led migration of Magento-based theme to Shopify 2.0, boosting site performance and maintainability.",
      "Refactored backend PHP and PostgreSQL systems to enhance performance and scalability of e-commerce logic.",
      "Modularized Mustache templates and implemented reusable Shopify components to streamline frontend development.",
      "Built a custom wishlist app using Tailwind CSS, improving user engagement and retention.",
      "Improved collection page load times by 15% by converting complex JavaScript logic to native Liquid rendering.",
      "Integrated CDN-hosted React components to support dynamic content without full-page reloads.",
      "Drove large-scale refactor of frontend architecture during concurrent rebranding, aligning dev practices with product design goals.",
    ],
  },
  {
    title: "Ecommerce Developer",
    company: "Lauren Moshi",
    location: "Commerce, CA",
    startDate: "November 2021",
    endDate: "March 2023",
    entries: [
      "Introduced Git-based theme version control system, enhancing dev team collaboration and deployment reliability.",
      "Designed and deployed three Shopify storefronts—Lestien, Michael Lauren, and Lauren Moshi—with distinct brand identities.",
      "Conducted a comprehensive audit of product data, reducing misclassification and streamlining merchandising operations.",
      "Built a Shopify app integrating Listrak webhooks, saving $2,000/month by eliminating need for Shopify Plus.",
      "Created internal analytics dashboard aggregating sales, inventory, and customer data to support strategic planning.",
      "Provided backup product photography and post-production editing to maintain visual content pipeline.",
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
