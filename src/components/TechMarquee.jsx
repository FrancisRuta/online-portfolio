import { techStack } from "../data/portfolioData";

function TechMarquee() {
  // Duplicate the list so the CSS translateX(-50%) loop is seamless.
  const items = [...techStack, ...techStack];

  return (
    <section className="tech-marquee" aria-label="Technologies I work with">
      <div className="tech-marquee-track">
        {items.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="tech-marquee-item"
            title={tech.name}
          >
            <img src={tech.icon} alt={tech.name} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechMarquee;
