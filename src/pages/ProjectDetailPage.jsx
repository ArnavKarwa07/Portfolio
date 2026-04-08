import { Navigate, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projectsData";

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const hasVideoPreview = Boolean(project.previewVideoUrl);

  return (
    <div className="page project-detail-page">
      <section className="page-header project-header">
        <p className="eyebrow">Project Details</p>
        <h1>{project.title}</h1>
        <p className="project-header-summary">{project.oneLiner}</p>
        <div className="project-header-meta">
          <span>Objective</span>
          <span>System Design</span>
          <span>Live Ops</span>
        </div>
      </section>

      <section className="preview-section">
        <div className="preview-card cinematic-preview">
          <img
            src={project.previewImage}
            alt={`${project.title} preview`}
            loading="lazy"
          />
          {hasVideoPreview ? (
            <div className="preview-overlay">
              <a
                href={project.previewVideoUrl}
                target="_blank"
                rel="noreferrer"
                className="preview-play-button"
                aria-label={`Play ${project.title} preview video`}
                title="Play preview"
              >
                <span aria-hidden="true" className="play-icon" />
              </a>
            </div>
          ) : null}
        </div>
      </section>

      <section className="project-core-grid">
        <article className="case-card objective-card">
          <h2>The Objective</h2>
          <p>{project.problem}</p>
          <p>{project.approach}</p>
        </article>
        <article className="case-card metrics-card">
          <h2>Technical Stack</h2>
          <div className="chip-row">
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="metrics-list">
            <div>
              <p>Key Outcome</p>
              <strong>{project.outcomes[0] || "Delivered"}</strong>
            </div>
            <div>
              <p>Validation</p>
              <strong>{project.outcomes[1] || "Tested"}</strong>
            </div>
            <div>
              <p>Learning</p>
              <strong>{project.learnings[0] || "Iterated"}</strong>
            </div>
          </div>

          <div className="preview-actions">
            {project.demoUrl ? (
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            ) : null}
            {project.repoUrl ? (
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                Repository
              </a>
            ) : null}
          </div>
        </article>
      </section>

      <section className="artifact-section">
        <h2>System Artifacts</h2>
        <div className="artifact-grid">
          <article className="artifact-card text-artifact">
            <h3>Build Summary</h3>
            <p>{project.solution}</p>
          </article>
          <article className="artifact-card text-artifact">
            <h3>Implementation Focus</h3>
            <ul>
              {project.tech.slice(0, 4).map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="outcomes-grid">
        <article className="case-card">
          <h2>Key Outcomes</h2>
          <ul>
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </article>
        <article className="case-card">
          <h2>Learnings</h2>
          <ul>
            {project.learnings.map((learning) => (
              <li key={learning}>{learning}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}

export default ProjectDetailPage;
