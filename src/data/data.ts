import { isProd } from "src/lib/utils";
import { Experience, Info, Skills } from "data/types";

export const HOSTED_DOMAIN = isProd()
  ? "https://resume.elliottmejia.com"
  : "copy successful";

export const infoData: Info = {
  name: "Elliott Mejia",
  tel: "(206) 792-6241",
  email: "mailto:mejia.elliott@gmail.com",
  emailShort: "mejia.elliott@gmail",
  portfolio: "https://www.elliottmejia.com",
  portfolioShort: "elliottmejia.com",
  linkedin: "https://www.linkedin.com/in/elliott-mejia/",
  linkedinShort: "/in/elliott-mejia/",
};

export const experienceData: Experience[] = [
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
      "Optimized collection page templating performance by replacing Mustache-rendered code with Liquid, reducing usage of Dolls Kill's own servers in favor of Shopify's for a local performance improvement of 15%.",
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

      "Led a meticulous audit of product tags, enhancing product administration efficiency and dramatically reducing categorization inconsistencies, thereby streamlining inventory management and optimizing operational workflow.",

      "Drove a 40% increase in click-through rate (CTR) by designing and implementing a new website interface, directly contributing to heightened user engagement and demonstrating the tangible benefits of integrating user-centered design with strategic business objectives.",

      "Successfully integrated Listrak into the Shopify environment without the need for Shopify Plus by developing a custom Laravel API, and seamlessly incorporated Yotpo for customer reviews.",

      "Managed the transfer of data from previously used SAAS platforms, thereby enhancing email marketing capabilities and review management. This initiative optimized resource allocation and enriched customer engagement strategies.",

      "Took and edited product photos in our professional studio as a backup photographer.",
    ],
  },
];

export const skillsData: Skills[] = [
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
    skills: ["React", "Next.js", "Astro"],
  },
  {
    title: "Tools",
    skills: ["GitHub", "Jira", "Asana"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "SQL", "GraphQL"],
  },
  {
    title: "Design",
    skills: ["Figma", "Photoshop", "Illustrator"],
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
