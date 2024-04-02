export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  entries: string[];
};

export type Info = {
  name: string;
  tel?: string;
  email?: string;
  emailShort?: string;
  portfolio?: string;
  portfolioShort?: string;
  linkedin?: string;
  linkedinShort?: string;
};

export type Skills = {
  title: string;
  skills: string[];
};
