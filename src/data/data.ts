import { isProd } from "src/lib/utils";
import { Exp, Info, Skills, Edu, Cert } from "data/types";

export const HOSTED_DOMAIN = isProd()
  ? "https://resume.elliottmejia.com"
  : "copy successful";

export const infoData: Info = {
  name: "Elliott Mejia",
  tel: "(206) 792-6241",
  email: "info@elliottmejia.com",
  emailShort: "info@elliottmejia",
  portfolio: "https://www.elliottmejia.com",
  portfolioShort: "elliottmejia.com",
  linkedin: "https://www.linkedin.com/in/elliott-mejia/",
  linkedinShort: "/in/elliott-mejia/",
};

export const experienceData: Exp[] = [
  {
    title: "Freelance Web Developer | API specialist",
    company: "Parahumana",
    location: "Los Angeles, CA",
    startDate: "June 2023",
    endDate: "Present",
    entries: [
      "Developed several API service paths for various clients across many verticals.",
      "Engineered and deployed lead scraping tools and automation workflows for diverse client needs, improving outreach efficiency.",
      "Built and monetized custom websites tailored for SEO and visual storytelling.",
      "Connected services such as Notion and Google Sheets; Etsy and Shopify, as a main selling point for some market segments.",
      "Wrote custom dashboards for clients using to visualize data and track KPIs in real-time, querying Shopify and Wordpress APIs through serverless functions.",
      "Designed bespoke internal software for sales workflows, improving quote speed and lead conversion.",

    ],
  },
  {
    title: "Front End Developer (contract)",
    company: "Dolls Kill",
    location: "Los Angeles, CA",
    startDate: "March 2022",
    endDate: "June 2023",
    entries: [
      "Led migration of Magento-based theme to Shopify 2.0, boosting site performance and maintainability.",
      "Refactored PHP and PostgreSQL systems to enhance performance and scalability of e-commerce logic.",
      "Fixed a critical bug that was causing 20+ second product collection loads due to improper load balancing on the fly.",
      "Wrote Shopify scripts to allowlist discounts for employee emails, destroying a path to discount fraud.",
      "Modularized migration-band-aid Mustache templates and implemented reusable Shopify components to streamline frontend development.",
      "Built a custom wishlist app, improving user engagement and retention.",
      "Improved collection page load times by 15% by converting complex JavaScript logic to native Liquid rendering.",
      "Integrated CDN-hosted React components to support dynamic content without full-page reloads.",
      "Drove large-scale refactor of frontend architecture during concurrent rebranding, aligning dev practices with product design goals.",
    ],
  },
  {
    title: "Ecommerce Coordinator",
    company: "Lauren Moshi",
    location: "Commerce, CA",
    startDate: "November 2021",
    endDate: "March 2023",
    entries: [
      "Designed and deployed three Shopify storefronts—Lestien, Michael Lauren, and Lauren Moshi—with distinct brand identities.",
      "Managed product upload pipelines between four departments.",
      "Conducted a comprehensive audit of product data, reducing misclassification and streamlining merchandising operations.",
      "Built a Shopify app integrating Listrak webhooks, saving $2,000/month by eliminating need for Shopify Plus.",
      "Created internal analytics dashboard aggregating sales, inventory, and customer data to support strategic planning.",
      "Provided backup product photography and post-production editing to maintain visual content pipeline.",
    ],
  },
];

export const skillsData: Skills[] = [
  {
    title: "Languages",
    skills: [
      "JavaScript (+ Typescript)",
      "Python",
      "HTML",
      "CSS (SASS, Tailwind)",
      "Liquid",
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      "PyTorch",
      "TensorFlow (js, py)",
      "React",
      "Next.js",
      "Astro",
      "Django",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Webflow",
      "Figma",
      "Shopify",
      "Jira",
      "Asana",
      "Photoshop",
      "Illustrator",
    ],
  },
  {
    title: "Database",
    skills: ["MongoDB", "SQL", "GraphQL", "PostgreSQL"],
  },
  {
    title: "Platforms",
    skills: [
      "Shopify",
      "WordPress",
      "Vercel",
      "Heroku",
      "Webflow",
      "VPS (Digital Ocean, Linode)",
    ],
  },
  {
    title: "Growth & Analytics",
    skills: ["SEO/SEM", "Analytics", "Email/SMS Marketing", "Lead Generation"],
  },
];

export const eduData: Edu[] = [
  {
    institution: "Icon College of Music",
    location: "Los Angeles, CA",
    degree: "Audio Engineering",
    startDate: "2019",
    endDate: "2020",
  },
  {
    institution: "North Seattle College",
    location: "Seattle, WA",
    degree: "Coursework in Computer Science",
    startDate: "2018",
    endDate: "2019",
  },
];

export const certData: Cert[] = [
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
