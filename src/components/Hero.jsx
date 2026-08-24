import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";
import { socialIcons } from "../utils";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <h1 className="hero-title">
            Hi, I'm <span>{profile.name}</span>
          </h1>
          <h2 className="hero-role">{profile.role}</h2>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-cta">
            <a href="#companies" className="btn btn-primary">
              Companies I've Worked For
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            {profile.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.platform}
              >
                {socialIcons[social.icon]}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3, delay: 0.2 }}
        >
          <img src={profile.photo} alt={profile.name} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
