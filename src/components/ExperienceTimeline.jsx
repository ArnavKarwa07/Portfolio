import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function getStartTimestamp(range) {
  const startPart = range.split("-")[0].trim();
  const monthYearTime = Date.parse(`1 ${startPart}`);

  if (!Number.isNaN(monthYearTime)) {
    return monthYearTime;
  }

  const year = Number.parseInt(startPart, 10);
  if (!Number.isNaN(year)) {
    return new Date(year, 0, 1).getTime();
  }

  return Number.MAX_SAFE_INTEGER;
}

function ExperienceTimeline({ items }) {
  const sortedItems = [...items].sort(
    (a, b) => getStartTimestamp(b.dates) - getStartTimestamp(a.dates),
  );
  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex === null ? null : sortedItems[activeIndex];

  const closeModal = () => setActiveIndex(null);

  useEffect(() => {
    if (activeIndex === null) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const modal = active ? (
    <div className="experience-modal-backdrop" onClick={closeModal}>
      <article
        key={`${active.company}-${active.role}`}
        className="timeline-detail-card"
        role="dialog"
        aria-modal="true"
        aria-label={`${active.company} experience details`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="experience-modal-close"
          onClick={closeModal}
          aria-label="Close details"
        >
          ×
        </button>

        <p className="timeline-modal-kicker">Experience Node</p>
        <h3>{active.company}</h3>
        <p className="timeline-modal-role">
          {active.role} / {active.dates}
        </p>

        <p className="timeline-detail-intro">{active.details.description}</p>
        <ul className="timeline-detail-list">
          {active.details.contributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
        <p className="timeline-detail-impact">
          <strong>Impact:</strong> {active.details.impact}
        </p>
        <p className="timeline-detail-impact">
          <strong>Learning:</strong> {active.details.learnings}
        </p>
        {active.details.links?.length ? (
          <div className="timeline-detail-links" aria-label="Experience links">
            {active.details.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
        <div className="timeline-stack">
          {active.details.stack.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </article>
    </div>
  ) : null;

  return (
    <section
      className="experience-timeline-wrap"
      aria-label="Experience timeline"
    >
      <div className="timeline-rail" />
      <div
        className="timeline-nodes"
        role="list"
        style={{ "--timeline-count": sortedItems.length }}
      >
        {sortedItems.map((item, index) => (
          <button
            key={`${item.company}-${item.role}`}
            type="button"
            role="listitem"
            className={`timeline-node ${index % 2 === 0 ? "is-upper" : "is-lower"} ${index === activeIndex ? "is-active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <span className="timeline-node-card">
              <span className="timeline-company">{item.company}</span>
              <span className="timeline-role">{item.role}</span>
              <span className="timeline-dates">{item.dates}</span>
            </span>
          </button>
        ))}
      </div>

      {modal ? createPortal(modal, document.body) : null}
    </section>
  );
}

export default ExperienceTimeline;
