import { publications } from "@/lib/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function ResearchSection() {
  return (
    <section className="section" id="research" aria-labelledby="research-title">
      <div className="container">
        <SectionHeading
          kicker="Research"
          id="research-title"
          title="Peer-reviewed robot learning work, published as an undergraduate."
        />

        <div className="timeline">
          {publications.map((publication) => (
            <article className="timeline-item" key={publication.title}>
              <div className="timeline-date">
                {publication.period}
                <p className="publication-venue">{publication.venue}</p>
              </div>
              <div className="timeline-body">
                <h3>{publication.title}</h3>
                <p className="publication-authors">
                  {publication.authors} · {publication.venueDetail}
                </p>
                <p>{publication.description}</p>
                {publication.links ? (
                  <div className="project-links" aria-label={`${publication.venue} paper links`}>
                    {publication.links.map((link) => (
                      <a className="project-link" href={link.href} key={link.href} rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
                <p className="keyword-line">{publication.keywords.join(", ")}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
