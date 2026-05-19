import { projects } from "@/lib/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function ProjectsSection() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading kicker="Projects" id="projects-title" title="Products shipped beyond the prototype stage." />

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline">
                <span className="project-status">{project.status}</span>
                <span className="project-platform">{project.platform}</span>
              </div>
              <h3>{project.name}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p>{project.description}</p>
              {project.links ? (
                <div className="project-links" aria-label={`${project.name} links`}>
                  {project.links.map((link) => (
                    <a className="project-link" href={link.href} key={link.href} rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
              <p className="tech-line">{project.technologies.join(", ")}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
