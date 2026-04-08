import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

function ProjectsCarousel({ projects }) {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const total = projects.length;
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 920) {
        setVisibleCount(1);
        return;
      }

      if (window.innerWidth <= 1280) {
        setVisibleCount(2);
        return;
      }

      setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const visibleProjects = useMemo(() => {
    if (!total) {
      return [];
    }

    const safeVisibleCount = Math.min(visibleCount, total);
    return Array.from(
      { length: safeVisibleCount },
      (_, offset) => projects[(index + offset) % total],
    );
  }, [index, projects, total, visibleCount]);

  useEffect(() => {
    if (total <= 1 || isPaused) {
      return undefined;
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const goPrev = () => {
    setIndex((current) => (current - 1 + total) % total);
  };

  const goNext = () => {
    setIndex((current) => (current + 1) % total);
  };

  return (
    <section
      className="project-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-controls">
        <button type="button" onClick={goPrev} aria-label="Previous project">
          Prev
        </button>
        <div className="carousel-dots">
          {projects.map((item, dotIndex) => (
            <button
              type="button"
              key={item.slug}
              aria-label={`Go to ${item.title}`}
              className={dotIndex === index ? "is-active" : ""}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>
        <button type="button" onClick={goNext} aria-label="Next project">
          Next
        </button>
      </div>

      <div className="carousel-track-three" aria-live="polite">
        {visibleProjects.map((project, visibleIndex) => (
          <Link
            key={`${project.slug}-${visibleIndex}`}
            to={`/projects/${project.slug}`}
            className="carousel-brief-card-link"
          >
            <article
              className="carousel-brief-card"
              style={{ "--card-order": visibleIndex }}
            >
              <div className="carousel-media">
                <img
                  src={project.previewImage}
                  alt={`${project.title} preview`}
                  loading="lazy"
                />
              </div>
              <div className="carousel-content">
                <p className="kicker">Featured Project</p>
                <h3>{project.title}</h3>
                <p>{project.oneLiner}</p>
                <div className="chip-row">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <span className="inline-link">View project</span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProjectsCarousel;
