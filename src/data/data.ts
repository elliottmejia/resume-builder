import { isProd } from "src/lib/utils";
import { Experience, Info, Skills } from "data/types";

export const HOSTED_DOMAIN = isProd()
  ? "https://resume.elliottmejia.com"
  : "copy successful";

export const infoData: Info = {
  name: "Elliott Mejia",
  tel: "(206) 792-6241",
  email: "mejia.elliott@gmail.com",
  emailShort: "mejia.elliott@gmail",
  portfolio: "https://elliottmejia.com",
  portfolioShort: "elliottmejia.com",
  linkedin: "https://www.linkedin.com/in/elliott-mejia/",
  linkedinShort: "/in/elliott-mejia/",
};

export const experienceData: Experience[] = [
  {
    title: "Marketing Technologist",
    company: "Datamark Digital",
    location: "Los Angeles, CA",
    startDate: "June 2023",
    endDate: "Present",
    entries: [
      "Collaborated directly with CEO Joe Weaver to strategize and set competitive pricing and Service Level Agreements (SLAs), aligning with the latest market trends in the online presence marketing space.",
      "Developed and deployed innovative lead-generation automations using Python, Lead Scrape, and High Level, significantly enhancing business operations for this burgeoning startup.",
      "Enhanced email marketing strategies, warming over 5,000 cold emails via our subdomain's MX pipeline and securing 10 new clients within two months for diverse online presence services.",
      "Engineered a cron job to automatically generate a comprehensive weekly report on lead automation outcomes, utilizing R Markdown for detailed insights and alerts.",
      "Led a team of outsourced web developers, efficiently reducing the average Minimum Viable Product (MVP) staging time to one month, thus accelerating pre-revision project delivery timelines.",
      "Addressed and resolved technical debt and offered UX expertise, providing personalized support to web clients and improving client satisfaction.",
    ],
  },
  {
    title: "Front End Developer (contract)",
    company: "Dolls Kill",
    location: "Los Angeles, CA",
    startDate: "March 2023",
    endDate: "June 2023",
    entries: [
      "Spearheaded the development of a full-stack API-based wishlist app using Tailwind CSS, significantly enhancing customer experience through personalized product recommendations.",
      "Executed a strategic transition of a Magento-imported theme to Shopify 2.0, enhancing website usability and performance, thus contributing to an improved customer shopping experience.",
      "Optimized 'collection page' templating performance by replacing Mustache-rendered code with Liquid in 2 hours, eliminating load on Dolls Kill's proprietary PHP backend in favor of Shopify's (autoscaling) servers for a performance improvement of 15%.",
      "Streamlined 4000 lines of code, achieving a 20% efficiency boost in website loading times and interactive performance, which led to reduced labor costs, lower server load, and improved user engagement.",
      "Implemented industry-standard lazy loading at a component level, reducing initial page load time by 35% and significantly boosting user retention and engagement.",
    ],
  },
  {
    title: "Ecommerce Developer",
    company: "Lauren Moshi",
    location: "Commerce, CA",
    startDate: "November 2021",
    endDate: "March 2023",
    entries: [
      "Pioneered the adoption of a git-based theme management system for Shopify themes, creating a scalable and efficient framework for theme updates and collaborative development, marking a significant advancement in project management and deployment processes.",
      "Led a meticulous audit of product tags, enhancing product administration efficiency and dramatically reducing categorization inconsistencies, thereby streamlining inventory management and optimizing operational workflow.",
      "Drove a 40% increase in click-through rate (CTR) by designing and implementing a new website interface, directly contributing to heightened user engagement and demonstrating the tangible benefits of integrating user-centered design with strategic business objectives.",
      "Successfully integrated Listrak into the Shopify environment without the need for Shopify Plus by developing a custom Laravel API, and seamlessly incorporated Yotpo for customer reviews.",
      "Managed the transfer of data from previously used SAAS platforms, thereby enhancing email marketing capabilities and review management. This initiative optimized resource allocation and enriched customer engagement strategies.",
      "Took and edited hundreds of product photos as a backup photographer.",
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
      "PHP",
    ],
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js", "Astro", "Django"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Jira", "Asana", "AWS"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "SQL", "GraphQL"],
  },
  {
    title: "Design",
    skills: ["Figma", "Photoshop", "Illustrator", "Product Photography"],
  },
  {
    title: "Platforms",
    skills: ["Shopify", "Magento", "WordPress"],
  },
  {
    title: "Marketing",
    skills: [
      "SEO",
      "SEM",
      "Email Marketing",
      "Email Deliverability",
      "Email Automation",
      "SMS Marketing",
      "Lead Generation",
      "Social Media",
    ],
  },
];
