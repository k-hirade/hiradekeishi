import Image from "next/image";
import { highlights, profile } from "@/lib/portfolio";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/assets/hero-ai-products.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
      </div>

      <div className="container hero-content">
        <p className="eyebrow">Tokyo-based software engineer</p>
        <h1 id="hero-title">
          {profile.name} <span>{profile.japaneseName}</span>
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-copy">{profile.oneLiner}</p>

        <div className="hero-actions" aria-label="Primary actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="button button-secondary" href={profile.githubUrl} rel="noreferrer">
            GitHub
          </a>
        </div>

        <dl className="hero-proof" aria-label="Highlights">
          {highlights.map((highlight) => (
            <div key={highlight.label}>
              <dt>{highlight.label}</dt>
              <dd>{highlight.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
