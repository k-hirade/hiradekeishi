export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type Project = {
  name: string;
  subtitle: string;
  meta: string;
  description: string;
  technologies: string[];
  links?: ExternalLink[];
};

export type ExternalLink = {
  label: string;
  href: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  venueDetail: string;
  period: string;
  description: string;
  keywords: string[];
  links?: ExternalLink[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const profile = {
  name: "Keishi Hirade",
  japaneseName: "平出 景詩",
  siteUrl: "https://hiradekeishi.com",
  email: "keisi.hirade.97@gmail.com",
  githubUrl: "https://github.com/k-hirade",
  linkedinUrl: "https://www.linkedin.com/in/k-hirade/",
  location: "Tokyo, Japan",
  tagline: "Software engineer building AI-powered products from zero to production.",
} as const;

export const navigationItems: NavigationItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const aboutParagraphs = [
  "Tokyo-based software engineer working at the intersection of AI and product. Graduated from Meiji University, Faculty of Science and Technology, where my undergraduate research on curriculum reinforcement learning for hyper-redundant manipulators was published and presented at IEEE/SICE SII 2025 in Munich.",
  "SRE at Rakuten Travel by day, indie maker of AI apps by night. Previously worked on AI-powered robotics at Osaro, Inc. in the U.S. Bilingual in Japanese and English.",
];

export const projects: Project[] = [
  {
    name: "BuddhaChat",
    subtitle: "AI Buddhist Counselor",
    meta: "iOS · Live on App Store",
    description:
      "An iOS app providing compassionate, Buddhist-inspired guidance powered by Google's Gemini API. Built with SwiftUI, GCP Cloud Run, Firebase, Stripe subscriptions, and Meta SDK campaign integration.",
    technologies: [
      "Swift",
      "SwiftUI",
      "Gemini API",
      "GCP Cloud Run",
      "Cloud Functions",
      "Firebase",
      "Stripe",
    ],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/jp/app/%E3%81%B6%E3%81%A3%E3%81%8B%E3%81%A4-%E4%BB%8F%E6%95%99%E3%81%A7%E5%BF%83%E3%82%92%E6%95%B4%E3%81%88%E3%82%8B%E4%BB%8F%E6%B4%BB%E3%82%A2%E3%83%97%E3%83%AA/id6759330136",
      },
    ],
  },
  {
    name: "ReportAI",
    subtitle: "AI Writing Assistant for Students",
    meta: "SaaS · Revenue generating",
    description:
      "A full-stack SaaS product that helps university students draft academic reports with AI, including user authentication and payment processing.",
    technologies: ["React", "Next.js", "Node.js", "Firebase", "Stripe"],
    links: [{ label: "Website", href: "https://reportai.jp/" }],
  },
  {
    name: "tsukusuta",
    subtitle: "Custom LINE Sticker Maker",
    meta: "Web · Service paused",
    description:
      "A web app that turned user-uploaded images into LINE-ready sticker sets. AI-driven image processing handled background removal and per-sticker formatting, with Cloud Functions automating the upload-to-publish pipeline on Firebase.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase Auth",
      "Firestore",
      "Cloud Functions",
      "AI image processing",
    ],
    links: [
      { label: "note", href: "https://note.com/tsukusuta" },
      { label: "TikTok", href: "https://www.tiktok.com/@tsukusuta" },
    ],
  },
];

export const publications: Publication[] = [
  {
    title:
      "Curriculum Reinforcement Learning for Obstacle Avoidance Postures for a Hyper-redundant Manipulator",
    authors: "Keishi Hirade, Ryuma Niiyama",
    venue: "IEEE/SICE SII 2025",
    venueDetail:
      "2025 IEEE/SICE International Symposium on System Integration, Munich, Germany · pp. 199–204",
    period: "Jan 2025",
    description:
      "Undergraduate thesis work at the Complex Robot Systems Lab, Meiji University. Hyper-redundant manipulators are well suited to cluttered, narrow workspaces, but the same extra degrees of freedom make them hard to control: analytical methods scale poorly with joint count and get stuck in local minima, while naive deep RL sees its exploration diverge in the high-dimensional action space. I trained the policy with PPO under a curriculum that tightens obstacle and goal conditions stage by stage, paired with a reward balancing collision avoidance against goal reaching — improving both learning efficiency and avoidance performance over training without a curriculum.",
    keywords: [
      "Reinforcement learning",
      "Curriculum learning",
      "PPO",
      "Hyper-redundant manipulator",
      "Obstacle avoidance",
      "Motion planning",
      "Python",
      "PyTorch",
    ],
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/document/10871128" },
      { label: "DOI", href: "https://doi.org/10.1109/SII59315.2025.10871128" },
      { label: "Lab", href: "https://xrobotlab.jp/news/sii2025/" },
    ],
  },
];

export const experience: Experience[] = [
  {
    role: "SRE Engineer",
    company: "Rakuten Travel",
    period: "Apr 2025 — Present",
    description:
      "Managing production infrastructure for one of Japan's largest travel platforms, with site reliability engineering work for high-availability systems.",
  },
  {
    role: "Solutions Engineer Intern",
    company: "Osaro, Inc.",
    period: "Internship",
    description:
      "Worked on AI-powered robotic systems for warehouse automation, collaborating across engineering and customer-facing teams to deploy AI solutions in real-world environments.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Swift", "Python", "JavaScript", "TypeScript", "Node.js", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["SwiftUI", "React", "Next.js"],
  },
  {
    title: "Backend & Infra",
    skills: ["GCP Cloud Run", "Cloud Functions", "Firebase", "Firestore", "Docker", "Nginx"],
  },
  {
    title: "Data & APIs",
    skills: ["Gemini API", "OpenAI API", "Stripe API", "X API", "Meta SDK"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Linux", "Ubuntu", "tmux", "FFmpeg", "MySQL"],
  },
];
