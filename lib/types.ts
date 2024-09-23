export type SiteConfig = {
  avatar?: string;
  siteUrl: string;
  siteName: string;
  siteDescription: string;
  siteThumbnail: string;
  authorName:string;
  authorImage:string;
  contactEmail:string;
  privacyPage:string;
  nav: Array<{ label: string; href: string }>;
  twitterUsername: string;
  social?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
};

export type MDXFrontMatter = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
};

export  type GhostPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  // Add other relevant fields as necessary
};




declare module '@tryghost/content-api';