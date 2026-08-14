function getMonogram(name) {
  return name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();
}

function CompanyCard({ company, index = 0 }) {
  const tileClass =
    index % 2 === 0 ? "company-tile--cyan" : "company-tile--violet";

  return (
    <article className="company-card">
      <div className={`company-tile ${tileClass}`}>
        <span className="company-monogram">{getMonogram(company.name)}</span>
      </div>

      <div className="company-body">
        <h3>{company.name}</h3>
        <p className="company-meta">
          {company.role} · {company.period}
        </p>

        {company.summary && (
          <p className="company-summary">{company.summary}</p>
        )}

        <ul className="company-outcomes">
          {company.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>

        <div className="company-tech">
          {company.tech.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {company.companyWebsite && (
          <a
            href={company.companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="company-link"
          >
            Visit Website ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default CompanyCard;
