import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to bring ideas to life.
        </p>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((item) => (
                  <span key={item} className="skill-item">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
