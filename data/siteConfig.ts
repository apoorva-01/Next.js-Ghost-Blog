import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.jpeg",
  siteUrl: "https://apoorvaverma.in/",
  siteName: "Apoorva Verma",
  contactEmail:"info@apoorvaverma.in",
  siteDescription:"",
  siteThumbnail: "https://apoorvaverma.in/logo.png",
  authorName:"Apoorva Verma",
  authorImage: "/avatar.jpeg",
  nav: [
    { label: "Guides", href: "/" },
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  twitterUsername: "@apoorva_verma_",
  social: {
    linkedin: "https://www.linkedin.com/in/apoorva0510/",
    twitter: "https://x.com/apoorva_verma_",
    github: "https://github.com/apoorva-01",
    // website: "https://apoorva.igscs.in/",
  },
};
export default siteConfig;
