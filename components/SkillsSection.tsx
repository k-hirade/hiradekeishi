import { skillGroups } from "@/lib/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function SkillsSection() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading kicker="Skills" id="skills-title" title="A stack shaped by shipping AI products end to end." />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <section className="skill-group" aria-labelledby={`${group.title}-title`} key={group.title}>
              <h3 id={`${group.title}-title`}>{group.title}</h3>
              <p>{group.skills.join(", ")}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
