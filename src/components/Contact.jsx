import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { contact, profile } from "../data/portfolioData";
import { socialIcons } from "../utils";

const {
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY,
} = import.meta.env;

const email_status = {
  SENT: "sent",
  SENDING: "sending",
  IDLE: "idle",
  ERROR: "error",
};

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [emailStatus, setEmailStatus] = useState(email_status.IDLE); // idle, sent, error
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailStatus(email_status.SENDING);
    setError("");

    try {
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: VITE_EMAILJS_PUBLIC_KEY },
      );

      setEmailStatus(email_status.SENT);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setEmailStatus(email_status.ERROR);
      setError(
        `Something went wrong. Please try again or email me directly at ${profile.email}`,
      );
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{contact.heading}</h2>
          {emailStatus === email_status.IDLE && (
            <p className="contact-subtitle">{contact.description}</p>
          )}

          {emailStatus === email_status.SENT && !error ? (
            <div className="contact-subtitle" style={{ marginTop: "2rem" }}>
              ✅ Your email has been sent! I will send an email back to you at
              my earliest convenience. Thanks for reaching out to me!
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={emailStatus === "sending"}
                />
              </div>

              {error && (
                <p
                  className="contact-subtitle"
                  role="alert"
                  style={{ color: "crimson" }}
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={emailStatus === email_status.SENDING}
              >
                {emailStatus === email_status.SENDING
                  ? "Sending…"
                  : "Send Message"}
              </button>
            </form>
          )}

          <div className="contact-socials">
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
      </div>
    </section>
  );
}

export default Contact;
