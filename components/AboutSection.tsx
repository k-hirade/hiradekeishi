import { aboutParagraphs } from "@/lib/portfolio";

export function AboutSection() {
  return (
    <section className="section section-intro" id="about" aria-labelledby="about-title">
      <div className="container split">
        <div>
          <p className="section-kicker">About</p>
          <h2 id="about-title">I bridge cutting-edge AI and real-world product experiences.</h2>
        </div>
        <div className="prose">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
