export type SkillSet = {
  id: string;
  title: string;
  bullets: string[];
  gradientFrom: string;
  gradientTo: string;
};

export const SKILL_SETS: SkillSet[] = [
  {
    id: "content-strategy",
    title: "Content Strategy & Marketing",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-green-600",
    bullets: [
      "Content strategy planning",
      "Content calendar creation",
      "Data-driven analysis",
      "Content performance audits",
      "SEO research trends",
      "Creative team collaboration",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Strategy",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-green-300",
    bullets: [
      "Social campaign execution",
      "Digital presence management",
      "Analytics optimization",
      "Trend monitoring",
      "Audience engagement",
      "Brand consistency",
    ],
  },
  {
    id: "partnerships",
    title: "Partnerships & Business Development",
    gradientFrom: "from-emerald-300",
    gradientTo: "to-emerald-600",
    bullets: [
      "Identify partnerships",
      "Growth-driven strategies",
      "Partner relationship management",
      "Negotiation and agreements",
      "Cross-team collaboration",
      "Performance reporting",
    ],
  },
  {
    id: "technical-writing",
    title: "Technical Writing",
    gradientFrom: "from-emerald-800",
    gradientTo: "to-emerald-200",
    bullets: [
      "User manual creation",
      "Simplify technical info",
      "Expert collaboration",
      "Content editing clarity",
      "Visual aids usage",
      "Content standardization",
    ],
  },
  {
    id: "brand-voice",
    title: "Brand Voice Development",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-600",
    bullets: [
      "Define brand tone",
      "Consistent communication",
      "Voice style guides",
      "Audience-focused voice",
      "Perception tracking",
      "Adaptive messaging",
    ],
  },
  {
    id: "community-growth",
    title: "Community Growth Strategy",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-600",
    bullets: [
      "Target audience definition",
      "Community engagement",
      "Channel optimization",
      "Event organization",
      "Influencer collaboration",
      "Growth metric tracking",
    ],
  },
];
