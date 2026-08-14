import { profile } from "../data/portfolioData";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {year} {profile.name}. Built with <span>React</span> &{" "}
          <span>Vite</span> ♥
        </p>
      </div>
    </footer>
  );
}

export default Footer;
