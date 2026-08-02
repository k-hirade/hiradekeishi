import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ResearchSection } from "@/components/ResearchSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsSection } from "@/components/SkillsSection";
import { profile, publications } from "@/lib/portfolio";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationJsonLd) }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.japaneseName,
  jobTitle: "Software Engineer",
  email: `mailto:${profile.email}`,
  url: profile.siteUrl,
  sameAs: [profile.githubUrl, profile.linkedinUrl],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tokyo",
    addressCountry: "JP",
  },
  knowsLanguage: ["English", "Japanese"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Meiji University",
  },
};

const publicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: publications[0].title,
  author: [
    { "@type": "Person", name: profile.name, url: profile.siteUrl },
    { "@type": "Person", name: "Ryuma Niiyama" },
  ],
  datePublished: "2025-01-21",
  pagination: "199-204",
  identifier: "https://doi.org/10.1109/SII59315.2025.10871128",
  url: "https://ieeexplore.ieee.org/document/10871128",
  publisher: { "@type": "Organization", name: "IEEE" },
  isPartOf: {
    "@type": "PublicationEvent",
    name: "2025 IEEE/SICE International Symposium on System Integration (SII)",
    location: "Munich, Germany",
  },
  keywords: publications[0].keywords.join(", "),
};
