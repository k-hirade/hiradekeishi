export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type Project = {
  name: string;
  subtitle: string;
  status: string;
  platform: string;
  description: string;
  technologies: string[];
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
  linkedinUrl: null,
  location: "Tokyo, Japan",
  tagline: "Software Engineer building AI-powered products from zero to production.",
  oneLiner:
    "SRE at Rakuten Travel by day, indie maker of AI apps by passion. Seeking Forward Deployed Engineer roles at leading AI companies.",
} as const;

export const navigationItems: NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  { label: "Shipped", value: "App Store iOS app" },
  { label: "Built", value: "Revenue SaaS" },
  { label: "Worked", value: "US AI robotics + Japan tech" },
] as const;

export const aboutParagraphs = [
  "I'm a Tokyo-based software engineer with a passion for bridging cutting-edge AI and real-world product experiences. I graduated from Meiji University, Faculty of Science and Technology, Mechanical Information Engineering, and published a paper at an international conference as an undergraduate.",
  "With professional experience spanning a U.S. AI robotics startup, Osaro, Inc., and one of Japan's largest tech companies, Rakuten, I bring a cross-cultural perspective to engineering. I'm bilingual in Japanese and English with TOEIC 820, and I thrive at the intersection of customer-facing problem solving and deep technical implementation.",
  "I'm currently seeking Forward Deployed Engineer and Solutions Engineer roles at AI-first companies where I can combine hands-on engineering with direct customer impact.",
];

export const projects: Project[] = [
  {
    name: "BuddhaChat",
    subtitle: "AI Buddhist Counselor",
    status: "Live on App Store",
    platform: "iOS",
    description:
      "An iOS app that provides compassionate, Buddhist-inspired guidance powered by Google's Gemini API. Built with SwiftUI, GCP Cloud Run, Firebase, Stripe subscriptions, and Meta SDK campaign integration.",
    technologies: [
      "Swift",
      "SwiftUI",
      "Gemini API",
      "GCP Cloud Run",
      "Cloud Functions",
      "Secret Manager",
      "Firebase Auth",
      "Firestore",
      "Stripe",
    ],
  },
  {
    name: "ReportAI",
    subtitle: "AI Writing Assistant for Students",
    status: "Revenue generating",
    platform: "SaaS",
    description:
      "A full-stack SaaS product that helps university students draft academic reports with AI, including user authentication and payment processing.",
    technologies: ["React", "Next.js", "Node.js", "Firebase", "Stripe"],
  },
  {
    name: "Automated YouTube Content Pipelines",
    subtitle: "Autonomous media generation",
    status: "Always-on systems",
    platform: "Automation",
    description:
      "Multiple autonomous content generation and publishing pipelines running 24/7, with AI-assisted video creation, FFmpeg processing, YouTube API publishing, and cross-platform posting to X, Instagram, and TikTok.",
    technologies: ["Python", "FFmpeg", "YouTube API", "X API", "Linux", "WSL2", "Ubuntu", "tmux"],
  },
];

export const experience: Experience[] = [
  {
    role: "SRE Engineer",
    company: "Rakuten Travel",
    period: "Apr 2025 - Present",
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
  {
    role: "Engineering Intern",
    company: "matrix Inc.",
    period: "Internship",
    description: "Software development at a Japanese tech company.",
  },
  {
    role: "Engineering Intern",
    company: "リアステージ (RealStage)",
    period: "Internship",
    description: "Software engineering internship.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Swift", "Python", "JavaScript", "TypeScript", "Node.js", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["SwiftUI", "React", "Next.js", "HTML", "CSS"],
  },
  {
    title: "Backend & Infra",
    skills: ["GCP Cloud Run", "Cloud Functions", "Secret Manager", "Firebase Auth", "Firestore", "Docker", "Nginx"],
  },
  {
    title: "Data & APIs",
    skills: ["Gemini API", "OpenAI API", "Stripe API", "YouTube API", "X API", "Meta SDK"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Linux", "Ubuntu", "WSL2", "tmux", "FFmpeg", "MySQL"],
  },
  {
    title: "Other",
    skills: ["Bilingual Japanese and English", "TOEIC 820", "International conference publication"],
  },
];
