import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.jpeg",
  siteUrl: "https://nextjs-mdx-blog-theme.vercel.app",
  siteName: "Apoorva Verma",
  siteDescription:
    "Starter template for a personal website blog, built with Next.js, MDX, and Tailwind CSS.",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/apoorva-01",
    twitter: "https://x.com/apoorva_verma_",
    linkedin: "https://www.linkedin.com/in/apoorva0510/",
    website: "https://apoorva.igscs.in/",
  },
};
export default siteConfig;
