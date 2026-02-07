import { isProd } from "src/lib/utils";
import { Exp, Info, Skills, Edu, Cert, ResumeVariant } from "data/types";

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
    // CHANGE TITLE: Emphasize API support aspect. Consider: "API Integration Specialist | Technical Consultant"
    // This better aligns with "Technical Support Engineer" framing
    title: "Freelance API Integration Specialist | Technical Consultant",
    company: "Parahumana",
    location: "Los Angeles, CA",
    startDate: "June 2023",
    endDate: "Present",
    entries: [
      // REORDER: Lead with API/integration support work. Suggested order below:

      "Provided technical consultation and API integration support for clients across multiple verticals, troubleshooting complex integration issues and documenting solutions",

      "Integrated SaaS platforms (Notion, Google Sheets, Etsy, Shopify) via REST APIs, providing ongoing technical support for client implementations and resolving integration issues",
      "Built real-time monitoring dashboards querying Shopify and WordPress APIs via serverless functions, enabling clients to track KPIs and diagnose issues",
      "Designed internal sales workflow tools and lead tracking systems, gaining deep understanding of sales processes and CRM integrations",
      "Designed bespoke internal software for sales workflows and lead tracking.",
    ],
  },
  {
    // CHANGE TITLE: Consider "Platform Engineer (contract)" or "Technical Developer (contract)"
    title: "Front End Developer (contract)",
    company: "Dolls Kill",
    location: "Los Angeles, CA",
    startDate: "March 2023",
    endDate: "June 2023",
    entries: [
      // REORDER: Lead with troubleshooting/debugging wins - critical for Tier 3 support

      // 1st - MOVE TO TOP (currently 3rd): Best bullet for support role. Shows root cause analysis. REWRITE:
      // "Diagnosed and resolved critical performance bug causing 20+ second page loads by identifying improper load balancing, deploying production fix under time pressure"
      "Fixed a critical bug that was causing 20+ second product collection loads due to improper load balancing on the fly.",

      // 2nd - MOVE UP: PostgreSQL is in Outreach's stack. REWRITE:
      // "Troubleshot and optimized PHP/PostgreSQL backend systems, resolving performance bottlenecks in enterprise e-commerce platform"
      "Refactored PHP and PostgreSQL systems to enhance performance and scalability of e-commerce logic.",

      // 3rd - KEEP: Enterprise platform migration = scale experience
      "Led migration of Magento-based theme to Shopify 2.0, boosting site performance and maintainability.",

      // 4th - MOVE UP: Shows scripting + security awareness. REWRITE:
      // "Developed custom validation scripts to prevent discount fraud, collaborating with security team to protect revenue integrity"
      "Wrote Shopify scripts to allowlist discounts for employee emails, destroying a path to discount fraud.",

      // 5th - KEEP: Performance debugging
      "Converted complex JavaScript logic to native Liquid rendering, improving page load times.",

      // REMOVE for this application - pure frontend work, less relevant:
      "Modularized migration-band-aid Mustache templates and implemented reusable Shopify components to streamline frontend development.",
      "Built a custom in-theme wishlist app using React CDN in Shopify, pixel perfect to design specs.",
      "Integrated CDN-hosted React components to support dynamic content without full-page reloads.",
      // "Drove large-scale refactor of frontend architecture during concurrent rebranding, aligning dev practices with product design goals.",
    ],
  },
  {
    title: "Ecommerce Technical Coordinator",
    company: "Lauren Moshi",
    location: "Commerce, CA",
    startDate: "November 2021",
    endDate: "March 2023",
    entries: [
      "Developed custom Shopify app with dynamic webhook integrations for Listrak, providing cost-effective alternative to Shopify Plus.",
      "Built and maintained API integrations between Shopify and third-party logistics providers using serverless functions, troubleshooting sync issues across systems",
      "Managed product management and upload pipelines between four departments.",
      "Led comprehensive audit of product data across three storefronts, identifying and resolving data inconsistencies",
      "Conducted a comprehensive audit of product data, reducing misclassification and streamlining merchandising operations.",
      "Designed and deployed three Shopify storefronts—Lestien, Michael Lauren, and Lauren Moshi—with distinct brand identities.",
    ],
  },
];

// SKILLS SECTION - MAJOR RESTRUCTURE NEEDED for Outreach role
// Their tech stack: Ruby on Rails, Node.js, Elixir/Golang, ElasticSearch, MySQL, AWS, Docker, Kubernetes
// Their tools: Salesforce/Dynamics, Gmail, Zendesk, Slack, VOIP, Jira, Tableau, DataDog, Kibana, Splunk

export const skillsData: Skills[] = [
  {
    title: "Languages",
    skills: [
      "JavaScript (+ Typescript)",
      "Python",
      "Ruby",
      "Go",
      "C++",
      "CSS (SASS, Tailwind)",
      "Liquid",
    ],
  },
  {
    // RENAME: Consider "APIs & Frameworks" to emphasize API work
    title: "Libraries & Frameworks",
    skills: [
      "Node.js",
      "Next.js",
      "Django",
      "Rest APIs",
      "GraphQL",
      "PyTorch",
      "TensorFlow (js, py)",
      "Astro",
    ],
  },
  {
    // RENAME: Consider "Support & Collaboration Tools"
    title: "Tools",
    skills: [
      "Jira",
      "Postman",
      "Zendesk",
      "Slack",
      "Shopify",
      "Asana",
      "Webflow",
      "Figma",
      "Photoshop",
      "Illustrator",
    ],
  },
  {
    title: "Database",
    skills: ["SQL | PostgreSQL | MySQL", "ElasticSearch", "MongoDB", "GraphQL"],
  },
  {
    // RENAME: Consider "Cloud & Infrastructure"
    title: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Vercel",
      "Heroku",
      "VPS (Digital Ocean, Linode)",
      "Shopify",
    ],
  },
  {
    // RENAME: Consider "Monitoring & Analytics" - more relevant to support
    title: "Growth & Analytics",
    skills: [
      "Analytics",
      "Data Dog",
      "Google Analytics",
      "Tableau",
      "Hotjar",
      "SEO/SEM",
      "Email/SMS Marketing",
      "Lead Generation",
    ],
  },
];

// EDUCATION - Consider reordering or minimizing for this application
export const eduData: Edu[] = [
  {
    institution: "North Seattle College",
    location: "Seattle, WA",
    degree: "Coursework in Computer Science",
    startDate: "2018",
    endDate: "2019",
  },
];

export const currentProjects: string[] = [
  "Restaurant-style ticket printer task-management integration with ClickUp and an old Raspberry Pi",
  "A spectrogram plugin that detects RMS values across draggable frequency bands using JUCE framework in C++",
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

const corkGeniusExp: Exp = {
  title: "Customer Service Support / E-Commerce Administrator",
  company: "Cork Genius",
  location: "Los Angeles, CA",
  startDate: "June 2019",
  endDate: "June 2021",
  entries: [
    "Served as senior point of escalation for complex customer issues, diagnosing root causes across storefront, payment, and fulfillment systems before engaging vendor support",
    "Maintained service continuity and customer satisfaction through the 2020 global supply chain disruption, adapting fulfillment workflows to navigate carrier delays and inventory shortages",
    "Troubleshot order and inventory sync discrepancies between e-commerce platform, third-party integrations, and payment processors, identifying data flow breakdowns across systems",
    "Analyzed customer-reported issues to identify platform-level bugs and integration failures, compiling reproducible steps for development team resolution",
  ],
};
const cvExp: Exp[] = [...experienceData, corkGeniusExp];

export const resumeConfig: Record<string, ResumeVariant> = {
  default: {
    hostedDomain: HOSTED_DOMAIN,
    info: infoData,
    experience: experienceData,
    skills: skillsData,
    education: eduData,
    certifications: certData,
    currentProjects: currentProjects,
  },
  cv: {
    hostedDomain: HOSTED_DOMAIN,
    info: infoData,
    experience: cvExp,
    skills: skillsData,
    education: eduData,
    certifications: certData,
    currentProjects: currentProjects,
  },
};

export const DEFAULT_VARIANT = "default";
