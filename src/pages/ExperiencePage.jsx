import { experienceItems } from "../data/experienceData";
import ExperienceTimeline from "../components/ExperienceTimeline";

function ExperiencePage() {
  const highlights = [
    {
      title: "Years Building",
      value: "2+",
      note: "Hands-on delivery across full-stack, AI, and product builds.",
    },
    {
      title: "Internships",
      value: "3",
      note: "Harbinger, LegitReach, and IAM with measurable outcomes.",
    },
    {
      title: "Community",
      value: "10k+",
      note: "Built and scaled an active community with 30+ meetups.",
    },
  ];

  return (
    <div className="page experience-page">
      <section className="page-header">
        <p className="eyebrow">Experience</p>
        <h1>Experience Timeline</h1>
        <p>
          Select any timeline node to open a floating detail modal with impact,
          contributions, and stack.
        </p>
      </section>

      <ExperienceTimeline items={experienceItems} />

      <section
        className="experience-bottom-grid"
        aria-label="Experience summary"
      >
        {highlights.map((item) => (
          <article key={item.title} className="experience-stat-card">
            <p>{item.title}</p>
            <h2>{item.value}</h2>
            <span>{item.note}</span>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ExperiencePage;
