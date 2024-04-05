export type ExpType = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  entries: string[];
};

export type InfoType = {
  name: string;
  tel?: string;
  email?: string;
  emailShort?: string;
  portfolio?: string;
  portfolioShort?: string;
  linkedin?: string;
  linkedinShort?: string;
};

export type SkillsType = {
  title: string;
  skills: string[];
};

export type EduType = {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
};

export type CertType = {
  issuer: string;
  certs: {
    title: string;
    issueDate: string;
  }[];
};
