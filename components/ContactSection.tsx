import { profile } from "@/lib/portfolio";

export function ContactSection() {
  return (
    <section className="section section-contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact-shell">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title">Thanks for visiting. You can find me here.</h2>
        </div>

        <div className="contact-actions">
          <a className="contact-link" href={`mailto:${profile.email}`}>
            <span>Email</span>
            <strong>{profile.email}</strong>
          </a>
          <a className="contact-link" href={profile.githubUrl} rel="noreferrer">
            <span>GitHub</span>
            <strong>github.com/k-hirade</strong>
          </a>
          <a className="contact-link" href={profile.linkedinUrl} rel="noreferrer">
            <span>LinkedIn</span>
            <strong>linkedin.com/in/k-hirade</strong>
          </a>
          <div className="contact-link contact-link-static">
            <span>Location</span>
            <strong>{profile.location}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
