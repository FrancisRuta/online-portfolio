function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <span>🚀</span>
        )}
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Live Demo ↗
            </a>
          )}
          {project.repoUrl && (
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <span className="project-name">{project.title}</span>
              )}
            </div>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Source Code ↗
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
