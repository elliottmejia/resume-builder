import { isProd } from "src/lib/utils";
import { Exp, Info, Skills, Edu, Cert, ResumeVariant } from "data/types";

export const HOSTED_DOMAIN = isProd()
  ? "https://resume.elliottmejia.com"
  : "http://localhost:5173";

export const infoData: Info = {
  name: "Elliott Mejia",
  tel: "(206) 792-6241",
  email: "mejia.elliott@gmail.com",
  emailShort: "mejia.elliott@gmail.com",
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

const boldBeyondExp: Exp[] = [
  {
    title: "Freelance Shopify & Web Developer | Technical Consultant",
    company: "Parahumana",
    location: "Los Angeles, CA",
    startDate: "June 2023",
    endDate: "Present",
    entries: [
      "Delivered custom Shopify theme builds and modifications for clients across fashion, beauty, and CPG verticals, translating business requirements into responsive, maintainable frontend implementations",
      "Built and modified Shopify and WordPress integrations, scoping new functionality with clients and serving as technical point of contact across the full project lifecycle",
      "Developed real-time monitoring dashboards querying Shopify Admin and Storefront APIs via serverless functions, enabling clients to track KPIs and diagnose integration failures",
      "Integrated SaaS platforms (Shopify, Notion, Google Sheets) via REST APIs; architected backend middleware and documented solutions for ongoing client support",
    ],
  },
  {
    title: "Front End Developer (contract)",
    company: "Dolls Kill",
    location: "Los Angeles, CA",
    startDate: "March 2023",
    endDate: "June 2023",
    entries: [
      "Led migration of Magento-based storefront to Shopify Plus Online Store 2.0, building a modular, maintainable Liquid component architecture from the ground up",
      "Diagnosed and resolved a critical bug causing 20+ second product collection loads, delivering immediate LCP and Core Web Vitals improvements",
      "Refactored PHP systems and converted complex JavaScript logic to native Liquid rendering, reducing page weight and improving performance across collection and product pages",
      "Built a custom in-theme wishlist app using React in Shopify, pixel-perfect to design specs, without external app dependencies",
      "Modularized Mustache templates and implemented reusable Shopify components to streamline frontend development across the team",
    ],
  },
  {
    title: "Ecommerce Technical Coordinator",
    company: "Lauren Moshi",
    location: "Commerce, CA",
    startDate: "November 2021",
    endDate: "March 2023",
    entries: [
      "Designed and deployed three distinct Shopify storefronts — Lestien, Michael Lauren, and Lauren Moshi — with custom themes, unique brand identities, and modular Liquid component systems",
      "Developed a custom private Shopify app with dynamic webhook integrations for Listrak (CDP/ESP), enabling automated customer segmentation and email/SMS flows",
      "Architected API integrations between Shopify and third-party logistics providers using serverless functions, ensuring order and fulfillment data consistency across systems",
      "Managed product data pipelines across four internal departments; led metadata audit across three storefronts, identifying and resolving data inconsistencies",
    ],
  },
];

const boldBeyondSkills: Skills[] = [
  {
    title: "Shopify & WordPress",
    skills: [
      "Shopify Plus / Online Store 2.0",
      "Liquid Templating",
      "Custom & Modified Themes",
      "Shopify Scripts / Functions",
      "WordPress / PHP",
      "WP REST API",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "JavaScript (ES2015+) / TypeScript",
      "React / Next.js",
      "jQuery / AJAX",
      "HTML5 / CSS3",
      "SASS / Tailwind",
      "Responsive Design",
    ],
  },
  {
    title: "APIs & Integrations",
    skills: [
      "GraphQL (Admin & Storefront APIs)",
      "REST APIs",
      "Webhooks & Serverless Functions",
      "Node.js",
      "Third-Party Platform Integration",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git / GitHub",
      "Figma",
      "Postman",
      "Vercel",
      "Docker",
      "Jira / Asana",
    ],
  },
  {
    title: "Analytics & CRO",
    skills: [
      "Google Analytics",
      "Hotjar",
      "A/B Testing",
      "Core Web Vitals / LCP",
      "SEO/SEM",
    ],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "ElasticSearch"],
  },
];

const pizzaHutExp: Exp = {
  title: "Delivery Driver",
  company: "Pizza Hut",
  location: "Seattle, WA",
  startDate: "2015",
  endDate: "2016",
  entries: [
    "Delivered orders across assigned routes, planning efficient routes to meet tight delivery-time targets during high-traffic lunch and dinner rushes",
    "Handled cash and card payments at the door, balancing a cash bank and reconciling deliveries at the end of each shift",
    "Provided frontline customer service at every delivery, resolving order issues on the spot to maintain guest satisfaction",
    "Coordinated with kitchen and counter staff to confirm order accuracy before heading out, minimizing failed or incorrect deliveries",
  ],
};

const cantikiFohExp: Exp = {
  title: "Barback / Cook",
  company: "Cantiki LA",
  location: "North Hollywood, CA",
  startDate: "October 2024",
  endDate: "May 2026",
  entries: [
    "Supported front-of-house and bar operations at a high-volume, cocktail-forward tiki bar and restaurant, delivering fast, accurate service during full-capacity weekend rushes",
    "Ran drinks, bussed and reset tables, and communicated proactively with servers and bartenders to keep guest wait times low during peak service",
    "Cross-trained across bar support and kitchen stations, gaining a full view of the guest experience from order to table",
    "Trained and onboarded new front-of-house staff on service standards, station setup, and rush-hour workflow",
    "Maintained bar and dining area stock levels, restocking glassware, garnish, and supplies to keep service uninterrupted",
  ],
};

const cantikiBarExp: Exp = {
  title: "Barback / Cook",
  company: "Cantiki LA",
  location: "North Hollywood, CA",
  startDate: "October 2024",
  endDate: "May 2026",
  entries: [
    "Supported a cocktail-forward tiki bar program, prepping garnish, batching mixers, and maintaining bar stock to keep bartenders moving during high-volume rushes",
    "Learned cocktail recipes, build order, and ingredient specs across the full menu while restocking and resetting bar stations between rounds",
    "Managed ice, glassware, and liquor inventory, anticipating rush-hour needs to reduce bartender downtime",
    "Cross-trained on kitchen stations alongside bar support, developing a broad understanding of full-service restaurant operations",
    "Trained incoming barbacks on bar setup, breakdown, and service-flow standards",
  ],
};

const cantikiBohExp: Exp = {
  title: "Barback / Cook",
  company: "Cantiki LA",
  location: "North Hollywood, CA",
  startDate: "October 2024",
  endDate: "May 2026",
  entries: [
    "Worked line and prep stations at a high-volume tiki restaurant kitchen, executing recipes and plating to spec during full-capacity service",
    "Managed prep lists and mise en place across multiple stations, maintaining consistency and pace through dinner and weekend rushes",
    "Cross-trained across bar support and kitchen stations, building flexibility to cover call-outs and rush-hour gaps",
    "Tracked kitchen inventory and communicated par levels to leadership, supporting accurate ordering and receiving",
    "Trained new kitchen staff on station setup, prep standards, and service pacing",
  ],
};

const cantikiManagementExp: Exp = {
  title: "Barback / Cook",
  company: "Cantiki LA",
  location: "North Hollywood, CA",
  startDate: "October 2024",
  endDate: "May 2026",
  entries: [
    "Cross-trained and worked across bar and kitchen stations at a high-volume tiki bar and restaurant, gaining full operational visibility into FOH and BOH workflows",
    "Trained and onboarded new hires across both bar and kitchen roles, building repeatable standards for station setup, prep, and service pacing",
    "Coordinated inventory and ordering across bar and kitchen, tracking par levels and communicating needs to leadership to prevent service disruptions",
    "Served as a go-to cross-trained team member during high-volume weekend rushes, flexing between stations to cover gaps and maintain service speed",
    "Supported shift-level coordination between front and back of house, relaying priorities to keep service synchronized during peak hours",
  ],
};

const restaurantFohExp: Exp[] = [cantikiFohExp, pizzaHutExp, hexCladExp];
const restaurantBarExp: Exp[] = [cantikiBarExp, pizzaHutExp, hexCladExp];
const restaurantBohExp: Exp[] = [cantikiBohExp, pizzaHutExp, hexCladExp];
const restaurantManagementExp: Exp[] = [
  cantikiManagementExp,
  pizzaHutExp,
  hexCladExp,
];

const restaurantFohSkills: Skills[] = [
  {
    title: "Service & Hospitality",
    skills: [
      "Guest Service & Hospitality",
      "High-Volume Service",
      "Table Service & Bussing",
      "Upselling & Menu Knowledge",
      "Conflict Resolution",
    ],
  },
  {
    title: "Bar & Kitchen Support",
    skills: [
      "Barback Operations",
      "Kitchen/Expo Support",
      "Stock & Inventory Management",
      "Cross-Station Flexibility",
    ],
  },
  {
    title: "Operations",
    skills: [
      "POS Systems",
      "Cash Handling",
      "Team Communication",
      "Multitasking Under Pressure",
      "Staff Training & Onboarding",
    ],
  },
];

const restaurantBarSkills: Skills[] = [
  {
    title: "Bar Program",
    skills: [
      "Cocktail Prep & Garnish",
      "Bar Stocking & Inventory",
      "Speed Rail Setup",
      "Recipe & Build Knowledge",
      "Batching",
    ],
  },
  {
    title: "Service",
    skills: [
      "Guest Service",
      "High-Volume Bar Service",
      "POS Systems",
      "Cash Handling",
    ],
  },
  {
    title: "Team",
    skills: [
      "Training & Onboarding",
      "Cross-Station Flexibility",
      "Multitasking Under Pressure",
    ],
  },
];

const restaurantBohSkills: Skills[] = [
  {
    title: "Kitchen",
    skills: [
      "Line Cooking",
      "Prep & Mise en Place",
      "Knife Skills",
      "Recipe Execution & Plating",
      "Station Management",
    ],
  },
  {
    title: "Operations",
    skills: [
      "Food Safety & Sanitation",
      "Inventory & Par Levels",
      "Ordering & Receiving",
    ],
  },
  {
    title: "Team",
    skills: [
      "Training & Onboarding",
      "Cross-Station Flexibility",
      "Pace Under Pressure",
    ],
  },
];

const restaurantManagementSkills: Skills[] = [
  {
    title: "Leadership",
    skills: [
      "Staff Training & Onboarding",
      "Shift Coordination",
      "Cross-Department Communication",
      "Team Leadership",
    ],
  },
  {
    title: "Operations",
    skills: [
      "Inventory & Par Management",
      "Ordering & Receiving",
      "Food Safety & Compliance",
      "POS Systems",
    ],
  },
  {
    title: "Service",
    skills: [
      "Guest Service",
      "High-Volume Service Management",
      "Conflict Resolution",
    ],
  },
];

const restaurantCertData: Cert[] = [
  {
    issuer: "Los Angeles County",
    certs: [{ title: "Food Handler Card", issueDate: "2024" }],
  },
  {
    issuer: "ServSafe",
    certs: [
      { title: "ServSafe Food Handler / Manager Certification", issueDate: "2024" },
    ],
  },
  {
    issuer: "California ABC",
    certs: [
      {
        title: "Responsible Beverage Service (RBS) Certification",
        issueDate: "2024",
      },
    ],
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
  "bold-beyond": {
    hostedDomain: HOSTED_DOMAIN,
    info: infoData,
    experience: boldBeyondExp,
    skills: boldBeyondSkills,
    education: eduData,
    certifications: certData,
    currentProjects: currentProjects,
  },
  "restaurant-foh": {
    hostedDomain: HOSTED_DOMAIN,
    info: infoData,
    experience: restaurantFohExp,
    skills: restaurantFohSkills,
    education: eduData,
    certifications: restaurantCertData,
    currentProjects: currentProjects,
  },
  "restaurant-bar": {
    hostedDomain: HOSTED_DOMAIN,
    info: infoData,
    experience: restaurantBarExp,
    skills: restaurantBarSkills,
    education: eduData,
    certifications: restaurantCertData,
    currentProjects: currentProjects,
  },
  "restaurant-boh": {
    hostedDomain: HOSTED_DOMAIN,
    info: infoData,
    experience: restaurantBohExp,
    skills: restaurantBohSkills,
    education: eduData,
    certifications: restaurantCertData,
    currentProjects: currentProjects,
  },
  "restaurant-management": {
    hostedDomain: HOSTED_DOMAIN,
    info: infoData,
    experience: restaurantManagementExp,
    skills: restaurantManagementSkills,
    education: eduData,
    certifications: restaurantCertData,
    currentProjects: currentProjects,
  },
};

export const DEFAULT_VARIANT = "default";
