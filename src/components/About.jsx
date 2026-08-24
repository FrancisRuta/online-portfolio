import { motion } from "framer-motion";
import { about, profile } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            {about.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          <div className="highlights">
            {about.highlights.map((highlight) => (
              <span key={highlight} className="highlight-tag">
                {highlight}
              </span>
            ))}
          </div>

          <a href={profile.resumeUrl} download className="btn btn-outline">
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
