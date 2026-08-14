import { motion } from "framer-motion";
import { companies } from "../data/portfolioData";
import CompanyCard from "./CompanyCard";

function Companies() {
  return (
    <section id="companies" className="section">
      <div className="container">
        <h2 className="section-title">Companies</h2>
        <p className="section-subtitle">
          These are the companies I've worked for.
        </p>

        {companies.length > 0 ? (
          <div className="companies-grid">
            {companies.map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
              >
                <CompanyCard company={company} index={i} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="section-subtitle">No projects found.</p>
        )}
      </div>
    </section>
  );
}

export default Companies;
