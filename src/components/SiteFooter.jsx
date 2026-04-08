import { personal } from "../data/personalData";

function SiteFooter() {
  const resumeHref = `${import.meta.env.BASE_URL}assets/${personal.resumeUrl}`;

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <p className="site-footer-brand">Arnav Karwa</p>
          <p className="site-footer-note">
            Building useful products across full-stack, data, and AI.
          </p>
        </div>
        <div className="site-footer-links">
          <a href={`mailto:${personal.email}`}>Email</a>
          <a href={resumeHref} target="_blank" rel="noreferrer">
            Resume
          </a>
          <a href={personal.social.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={personal.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
        <p className="site-footer-smallprint">
          Available for internships, product work, and collaboration.
        </p>
      </div>
    </footer>
  );
}

export default SiteFooter;
