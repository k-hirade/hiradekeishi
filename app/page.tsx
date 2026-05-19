import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsSection } from "@/components/SkillsSection";
import { profile } from "@/lib/portfolio";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
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
