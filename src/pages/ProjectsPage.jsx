import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProjectsCarousel from "../components/ProjectsCarousel";
import { personal } from "../data/personalData";
import { additionalProjects, featuredProjects } from "../data/projectsData";

function ProjectsPage() {
  const [showAll, setShowAll] = useState(false);

  const archiveProjects = useMemo(() => {
    const featuredSlugs = new Set(
      featuredProjects.map((project) => project.slug),
    );
    const priorityOrder = new Map([
      ["defectfill", 1],
      ["stockpilot", 2],
      ["multiplayer-server", 3],
      ["face-recognition-system", 4],
      ["ai-course-recommendation-system", 5],
    ]);

    return additionalProjects
      .filter((project) => !featuredSlugs.has(project.slug))
      .sort((a, b) => {
        const rankA = priorityOrder.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
        const rankB = priorityOrder.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
        return rankA - rankB;
      });
  }, []);

  const visibleArchive = showAll
    ? archiveProjects
    : archiveProjects.slice(0, 5);

  return (
    <div className="page projects-page">
      <section className="page-header">
        <p className="eyebrow">Projects</p>
        <h1>My work.</h1>
        <p>Featured projects rotate above. More projects are listed below.</p>
      </section>

      <ProjectsCarousel projects={featuredProjects} />

      <section className="project-grid-section">
        <h2>More Projects</h2>
        <div className="project-list" role="list">
          {visibleArchive.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="project-list-row"
              data-stagger={index}
              role="listitem"
            >
              <div>
                <h3>{project.title}</h3>
                <p>{project.oneLiner}</p>
              </div>
              <span className="inline-link">View project</span>
            </Link>
          ))}
        </div>

        {archiveProjects.length > 5 ? (
          <button
            type="button"
            className="archive-toggle"
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? "Show less" : "Show all projects"}
          </button>
        ) : null}
      </section>

      <section className="projects-bottom-callout">
        <p className="eyebrow">Open to Collaboration</p>
        <h2>Want to build something useful together?</h2>
        <p>
          I enjoy building practical products where speed, quality, and clear
          outcomes matter.
        </p>
        <div className="callout-actions">
          <a href={personal.social.linkedin} target="_blank" rel="noreferrer">
            Start a conversation
          </a>
          <a
            href={`${import.meta.env.BASE_URL}assets/${personal.resumeUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            View resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
