import { projects } from '../data';

function Projects() {
  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="section-title">
          <p>Projects</p>
          <h2>My recent academic and practice projects</h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="card project-card fade-up" style={{ animationDelay: `${index * 0.1}s` }} key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                View Project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
