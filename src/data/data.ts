import { isProd } from "src/lib/utils";
import { Exp, Info, Skills, Edu, Cert, ResumeVariant } from "data/types";

export const HOSTED_DOMAIN = isProd()
  ? "https://resume.elliottmejia.com"
  : "http://localhost:5173";

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
    title: "Freelance API Integration Specialist | Technical Consultant",
    company: "Parahumana",
    location: "Los Angeles, CA",
    startDate: "June 2023",
    endDate: "Present",
    entries: [
      "Provided technical consultation and API integration support for clients across multiple verticals, troubleshooting complex integration issues and documenting solutions",
      "Integrated SaaS platforms (Notion, Google Sheets, Etsy, Shopify) via REST APIs, providing ongoing technical support for client implementations and resolving integration issues",
      "Built real-time monitoring dashboards querying Shopify and WordPress APIs via serverless functions, enabling clients to track KPIs and diagnose issues",
      "Designed internal sales workflow tools and lead tracking systems, gaining deep understanding of sales processes and CRM integrations",
      "Designed bespoke internal software for sales workflows and lead tracking.",
    ],
  },
  {
    title: "Front End Developer (contract)",
    company: "Dolls Kill",
    location: "Los Angeles, CA",
    startDate: "March 2023",
    endDate: "June 2023",
    entries: [
      "Fixed a critical bug that was causing 20+ second product collection loads due to improper load balancing on the fly.",
      "Refactored PHP and PostgreSQL systems to enhance performance and scalability of e-commerce logic.",
      "Led migration of Magento-based theme to Shopify 2.0, boosting site performance and maintainability.",
      "Wrote Shopify scripts to allowlist discounts for employee emails, destroying a path to discount fraud.",
      "Converted complex JavaScript logic to native Liquid rendering, improving page load times.",
      "Modularized migration-band-aid Mustache templates and implemented reusable Shopify components to streamline frontend development.",
      "Built a custom in-theme wishlist app using React CDN in Shopify, pixel perfect to design specs.",
    ],
  },
  {
    title: "Ecommerce Technical Coordinator",
    company: "Lauren Moshi",
    location: "Commerce, CA",
    startDate: "November 2021",
    endDate: "March 2023",
    entries: [
      "Developed custom Shopify app with dynamic webhook integrations for Listrak, providing a cost-effective alternative to Shopify Plus.",
      "Built and maintained API integrations between Shopify and third-party logistics providers using serverless functions, troubleshooting sync issues across systems",
      "Managed product management and upload pipelines between four departments.",
      "Led a comprehensive, detailed audit of product metadata across three storefronts, identifying and resolving data inconsistencies",
      "Designed and deployed three Shopify storefronts—Lestien, Michael Lauren, and Lauren Moshi—with distinct brand identities.",
    ],
  },
];


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
    "Began in sales, transitioning to customer support and e-commerce administration as the company scaled, gaining comprehensive understanding of the full customer journey and technical ecosystem",
  ],
};

const hexCladExp: Exp = {
  title: "Salesman",
  company: "HexClad",
  location: "Seattle, WA + National",
  startDate: "2018",
  endDate: "2019",
  entries: [
    "Drove $2M in sales in 2018 by providing in-depth product demonstrations",
    "Modified demonstration techniques to adapt to different store layouts and customer demographics, optimizing engagement and conversion rates",
    "Traveled nationally to support sales efforts across 20+ Costco locations, collaborating with regional managers to identify high-traffic stores and tailor demonstrations to local customer preferences",
    "Collaborated with marketing team to provide customer feedback and insights from in-store interactions, informing future campaign strategies",
  ],
};

const cvExp: Exp[] = [...experienceData, corkGeniusExp, hexCladExp];

const shopifyExp: Exp[] = [
  {
    title: "Freelance Shopify Developer | Technical Consultant",
    company: "Parahumana",
    location: "Los Angeles, CA",
    startDate: "June 2023",
    endDate: "Present",
    entries: [
      "Designed and implemented Shopify webhook listeners and serverless middleware to sync order and inventory events with third-party platforms, applying event-driven patterns including retry logic and idempotency",
      "Built real-time monitoring dashboards querying Shopify Admin and Storefront GraphQL APIs via serverless functions, enabling clients to track KPIs and diagnose integration failures",
      "Integrated SaaS platforms (Shopify, Notion, Google Sheets) via REST APIs, architecting backend middleware for e-commerce clients across multiple verticals",
      "Designed internal CRM-connected sales workflow tools, gaining deep expertise in data flows between e-commerce systems and business platforms",
    ],
  },
  {
    title: "Front End Developer (contract)",
    company: "Dolls Kill",
    location: "Los Angeles, CA",
    startDate: "March 2023",
    endDate: "June 2023",
    entries: [
      "Led migration of Magento-based storefront to Shopify Online Store 2.0, improving theme architecture, maintainability, and storefront performance",
      "Diagnosed and resolved a critical bug causing 20+ second product collection loads, delivering immediate LCP and Core Web Vitals improvements",
      "Developed Shopify Scripts to enforce employee discount allowlists, eliminating a fraud vector — directly analogous to Shopify Functions-based discount logic",
      "Converted complex JavaScript logic to native Liquid rendering, reducing page weight and improving load performance across collection and product pages",
      "Built a custom in-theme wishlist app using React in Shopify, pixel-perfect to design specs, without external app dependencies",
    ],
  },
  {
    title: "Ecommerce Technical Coordinator",
    company: "Lauren Moshi",
    location: "Commerce, CA",
    startDate: "November 2021",
    endDate: "March 2023",
    entries: [
      "Developed a custom private Shopify app with dynamic webhook integrations for Listrak (CDP/ESP), enabling automated customer segmentation and email/SMS flows without a Shopify Plus subscription",
      "Architected and maintained API integrations between Shopify and third-party logistics providers using serverless functions, ensuring order and fulfillment data consistency across systems",
      "Designed and deployed three Shopify storefronts — Lestien, Michael Lauren, and Lauren Moshi — with distinct brand identities, custom themes, and modular Liquid component systems",
      "Managed product data pipelines across four internal departments; audited metadata across three storefronts, identifying and resolving data inconsistencies",
    ],
  },
];

const shopifySkills: Skills[] = [
  {
    title: "Languages",
    skills: [
      "JavaScript (+ TypeScript)",
      "Liquid",
      "Python",
      "Ruby",
      "CSS (SASS, Tailwind)",
    ],
  },
  {
    title: "Shopify Platform",
    skills: [
      "Shopify Plus / Online Store 2.0",
      "Shopify Scripts / Functions",
      "Custom Private Apps",
      "Checkout Extensibility",
      "App Bridge",
    ],
  },
  {
    title: "APIs & Integrations",
    skills: [
      "GraphQL (Admin & Storefront APIs)",
      "REST APIs",
      "Webhooks & Event-Driven Systems",
      "Node.js",
      "Next.js / Headless Commerce",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "GitHub Actions / CI/CD",
      "Docker",
      "Vercel",
      "AWS",
      "Postman",
      "Jira",
      "Figma",
    ],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "ElasticSearch", "MySQL"],
  },
  {
    title: "Analytics & Marketing",
    skills: [
      "Klaviyo / Listrak (CDP/ESP)",
      "Google Analytics",
      "Datadog",
      "Hotjar",
      "SEO/SEM",
    ],
  },
];

const sophiaInfo: Info = {
  name: "Sophia de Vito",
  tel: "(818) 919-3145",
  email: "sophiadvt@gmail.com",
  emailShort: "sophiadvt@gmail.com",
  linkedin: "https://www.linkedin.com/in/sophiadevito/",
  linkedinShort: "/in/sophiadevito/",
};

const sophiaExp: Exp[] = [
  {
    title: "Account Executive",
    company: "RPA",
    location: "Santa Monica, CA",
    startDate: "January 2023",
    endDate: "Present",
    entries: [
      "Manage multiple digital, TV, and streaming campaigns for La-Z-Boy Corporate and 35+ independent dealers, trafficking creative on schedule with close attention to detail",
      "Assist with creative development for La-Z-Boy's organic social pages, including writing project briefs, participating in internal reviews, and facilitating feedback and approvals between clients and creatives",
      "Coordinate VO recording sessions with clients and producers for TV and radio customizations, and assist with content capture at scheduled shoots",
      "Manage yearly media planning for independent dealers, collaborating with media teams to build budget recommendations and facilitate campaign set-up",
      "Assist with yearly competitive presentations, pulling research, building decks, and presenting findings to clients",
      "Set up regular and ad hoc meetings with Corporate clients, dealers, and internal teams; transcribe notes for team reference",
      "Handle admin tasks including expense reports, travel booking, and event planning for in-office client visits",
    ],
  },
  {
    title: "Backend Administrator",
    company: "One Health Labs",
    location: "Los Angeles, CA",
    startDate: "March 2021",
    endDate: "January 2023",
    entries: [
      "Managed and reported Covid-19 results for 30+ TV, film, and commercial productions; sent email result reports to patients with strong attention to accuracy and patient information integrity",
      "Used SharePoint daily to track results, patient information, and internal records",
      "Reported positive results to Covid Compliance Officers and maintained clear daily case records",
      "Monitored customer service email account to assist with service inquiries, patient results, and new business requests",
      "Completed daily tasks on tight deadlines while maintaining composure under pressure",
      "Handled confidential patient information in compliance with HIPAA guidelines",
    ],
  },
];

const sophiaSkills: Skills[] = [
  {
    title: "Account & Campaign Management",
    skills: [
      "Campaign trafficking (digital, TV, streaming)",
      "Media planning & budget recommendations",
      "Client communication & relationship management",
      "Creative brief writing & internal reviews",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Microsoft Word, PowerPoint & Excel",
      "SharePoint",
      "Google Workspace",
    ],
  },
  {
    title: "Core Strengths",
    skills: [
      "Highly organized and detail-oriented",
      "Strong written and verbal communication",
      "Project planning and execution",
      "Adaptable to fast-changing priorities",
      "HIPAA-compliant data handling",
    ],
  },
];

const sophiaEdu: Edu[] = [
  {
    institution: "University of California, Irvine",
    location: "Irvine, CA",
    degree: "B.A. in Business Economics & Political Science",
    startDate: "September 2016",
    endDate: "June 2020",
  },
];

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
  shopify: {
    hostedDomain: HOSTED_DOMAIN,
    info: infoData,
    experience: shopifyExp,
    skills: shopifySkills,
    education: eduData,
    certifications: certData,
    currentProjects: currentProjects,
  },
  sophia: {
    hostedDomain: HOSTED_DOMAIN,
    info: sophiaInfo,
    experience: sophiaExp,
    skills: sophiaSkills,
    education: sophiaEdu,
    certifications: [],
    currentProjects: [],
  },
};

export const DEFAULT_VARIANT = "default";
