export type Exp = {
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

export type Edu = {
  institution: string;
  location?: string;
  degree: string;
  startDate: string;
  endDate: string;
};

export type Cert = {
  issuer: string;
  certs: {
    title: string;
    issueDate: string;
  }[];
};

export type ResumeVariant = {
  hostedDomain: string;
  info: Info;
  experience: Exp[];
  skills: Skills[];
  education: Edu[];
  certifications: Cert[];
};
