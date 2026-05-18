import { experience } from "@/lib/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function ExperienceSection() {
  return (
    <section className="section section-muted" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          kicker="Experience"
          id="experience-title"
          title="Engineering across production infrastructure, AI robotics, and product teams."
        />

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.role}`}>
              <div className="timeline-date">{item.period}</div>
              <div className="timeline-body">
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
