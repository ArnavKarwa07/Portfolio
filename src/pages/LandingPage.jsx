import { Link } from "react-router-dom";
import { landingCards, personal } from "../data/personalData";

function LandingPage() {
  const assetBase = `${import.meta.env.BASE_URL}assets/`;
  const portraitSrc = `${assetBase}${personal.portrait}`;
  const resumeHref = `${assetBase}${personal.resumeUrl}`;

  return (
    <div className="page landing-page">
      <section className="landing-orbital-hero">
        <p className="eyebrow">Portfolio</p>

        <figure className="hero-portrait-wrap">
          <img src={portraitSrc} alt={`${personal.name} portrait`} />
        </figure>

        <article className="hero-manifesto">
          <h1>{personal.headline}</h1>
          <p className="hero-summary">{personal.summary}</p>
          <div className="hero-actions">
            <a href={resumeHref} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a href={`mailto:${personal.email}`}>Email Me</a>
            <a href={personal.social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={personal.social.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </article>

        <p className="hero-side-note hero-side-note-left">
          {personal.location}
        </p>
        <p className="hero-side-note hero-side-note-right">
          Building with intent
        </p>

        <div className="traits">
          {personal.traits.map((trait) => (
            <span key={trait}>{trait}</span>
          ))}
        </div>
      </section>

      <section
        className="landing-cards-grid"
        aria-label="Primary navigation cards"
      >
        {landingCards.map((card, index) => (
          <Link
            key={card.title}
            to={card.path}
            className="landing-nav-card"
            style={{ "--card-accent": card.accent }}
            data-stagger={index}
          >
            <p className="card-index">0{index + 1}</p>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default LandingPage;
