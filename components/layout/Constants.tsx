export interface SkillSet {
  id: number;
  title: string;
  bullets: string[];
  gradientFrom: string;
  gradientTo: string;
}

export const SKILL_SETS: SkillSet[] = [
  {
    id: 1,
    title: "Content & Strategy",
    bullets: [
      "Community Growth Strategy",
      "Content Strategy & Marketing",
      "Social Media Strategy",
      "Brand Voice Development",
    ],
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-600",
  },
  {
    id: 2,
    title: "Technical Skills",
    bullets: [
      "Technical Writing",
      "Web3 Communications",
      "Protocol Documentation",
      "Developer Content",
    ],
    gradientFrom: "from-teal-500",
    gradientTo: "to-cyan-600",
  },
  {
    id: 3,
    title: "Business Development",
    bullets: [
      "Partnerships & Business Development",
      "Community Management",
      "Campaign Strategy",
      "Stakeholder Engagement",
    ],
    gradientFrom: "from-green-600",
    gradientTo: "to-green-800",
  },
];

export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  platform: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Emrys",
    description:
      "Technical writing on cross-chain bridging, IBC relayer solutions, and modular DA integrations (Walrus, Celestia).",
    category: "Technical Writing",
    platform: "Solana",
  },
  {
    id: 2,
    name: "Pajcash",
    description:
      "AI-powered promotional video script & storyboard for an offramping product.",
    category: "Content Creation",
    platform: "Solana",
  },
  {
    id: 3,
    name: "Ridima",
    description:
      "Video bounty: promotional content for digital asset trading in Nigeria.",
    category: "Video Production",
    platform: "Solana",
  },
  {
    id: 4,
    name: "Solflare",
    description:
      "Content and community-focused contributions around wallet education and ecosystem adoption.",
    category: "Community",
    platform: "Solana",
  },
  {
    id: 5,
    name: "Superteam Nigeria",
    description:
      "Active participant in content, video, and writing bounties within the Solana ecosystem.",
    category: "Ecosystem",
    platform: "Solana",
  },
];

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: "Staipy",
    role: "Social Media/Content Manager & Technical Writer",
    period: "2023 - Present",
    achievements: [
      "Expanded company's Twitter (X) audience by 380%+, growing from ~0 to 5,300+ followers through structured content and engagement strategy",
      "Directed end-to-end digital presence and brand voice on X, LinkedIn, and YouTube, crafting consistent narrative",
      "Developed a localized voice for the company's X account",
    ],
  },
  {
    id: 2,
    company: "Superteam Earn",
    role: "Freelance Contributor & Bounty Hunter",
    period: "2023 - Present",
    achievements: [
      "Won 8+ high-value bounties, earning $2,500+ on Superteam Earn",
      "Authored articles and threads that drove direct recruitment into leadership roles",
      "Recognized as top-performing writer and strategist in the ecosystem",
    ],
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    name: "Certified Community Manager",
    issuer: "Web3Versity",
    year: "2024",
  },
];

export const COMMUNITIES = [
  { id: 1, name: "SuperteamNG Member" },
  { id: 2, name: "SolanaCollective Member" },
  { id: 3, name: "MarinadeFinance Chef" },
  { id: 4, name: "Solflare" },
  { id: 5, name: "Jupiter Exchange" },
];

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/web3_theo",
  telegram: "https://t.me/web3theo",
  discord: "web3theo",
  email: "Sodiipoabayomi2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/Web3Theo",
};
