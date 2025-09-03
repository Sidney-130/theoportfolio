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
      "Developing and executing a content strategy to meet business goals.",
      "Creating a content calendar for various platforms (e.g., social media, blogs, video).",
      "Analyzing data and metrics to measure content performance and audience engagement.",
      "Conducting content audits to ensure all materials align with brand goals.",
      "Researching SEO strategies and content trends to increase visibility.",
      "Collaborating with creative teams to produce valuable and engaging content.",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Strategy",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-green-300",
    bullets: [
      "Creating and executing social media campaigns to build brand awareness.",
      "Developing and managing an organization's digital presence across platforms like X (formerly Twitter), LinkedIn, and YouTube.",
      "Tracking analytics to optimize content and enhance online presence.",
      "Monitoring social media trends and incorporating them into campaigns.",
      "Engaging with the audience by responding to comments and fostering interaction.",
      "Maintaining brand consistency across all social media channels.",
    ],
  },
  {
    id: "partnerships",
    title: "Partnerships & Business Development",
    gradientFrom: "from-emerald-300",
    gradientTo: "to-emerald-600",
    bullets: [
      "Identifying and securing strategic partnerships that align with company goals.",
      "Developing and implementing partnership strategies to drive growth.",
      "Managing and nurturing relationships with existing partners.",
      "Negotiating terms and creating mutually beneficial agreements.",
      "Collaborating with internal teams to ensure smooth partnership integration.",
      "Analyzing partnership performance and providing regular reports.",
    ],
  },
  {
    id: "technical-writing",
    title: "Technical Writing",
    gradientFrom: "from-emerald-800",
    gradientTo: "to-emerald-200",
    bullets: [
      "Creating user manuals, how-to guides, and other supporting documents.",
      "Simplifying complex, technical information for non-technical audiences.",
      "Collaborating with subject matter experts like engineers and developers.",
      "Editing and revising content to ensure accuracy, clarity, and consistency.",
      "Incorporating visuals like graphs, illustrations, or diagrams to improve understanding.",
      "Standardizing content across different platforms and media.",
    ],
  },
  {
    id: "brand-voice",
    title: "Brand Voice Development",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-600",
    bullets: [
      "Defining a brand's unique tone and personality.",
      "Ensuring consistency in communication across all channels (e.g., website, social media, emails).",
      "Developing brand voice guidelines and style guides for internal teams.",
      "Conducting audience research to tailor the voice to specific groups.",
      "Tracking how the brand voice influences public perception and engagement.",
      "Adapting the brand's voice for different contexts while maintaining its core identity.",
    ],
  },
  {
    id: "community-growth",
    title: "Community Growth Strategy",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-600",
    bullets: [
      "Defining and understanding the target audience.",
      "Fostering community engagement by providing opportunities for connection and collaboration.",
      "Optimizing communication channels to reach the audience effectively.",
      "Organizing events, workshops, and networking sessions to build relationships.",
      "Leveraging influencers and advocates to amplify the community's message.",
      "Continuously measuring key metrics like engagement and growth to iterate on strategies.",
    ],
  },
];
