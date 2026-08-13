import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          A timeline of my professional journey and education.
        </p>

        <div className="timeline">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="timeline-period">{item.period}</span>
              <h3>{item.title}</h3>
              <div className="timeline-org">{item.org}</div>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
