import { useEffect, useRef, useState } from "react";

function SkillsGraph({ tree }) {
  const [activeDomain, setActiveDomain] = useState(tree.domains[0]);
  const [activeDomainX, setActiveDomainX] = useState("50%");
  const graphRef = useRef(null);
  const branchRefs = useRef({});

  useEffect(() => {
    const updateConnectorX = () => {
      const graphBounds = graphRef.current?.getBoundingClientRect();
      const activeButton = branchRefs.current[activeDomain.name];
      const buttonBounds = activeButton?.getBoundingClientRect();

      if (!graphBounds || !buttonBounds || graphBounds.width === 0) {
        return;
      }

      const center =
        ((buttonBounds.left + buttonBounds.width / 2 - graphBounds.left) /
          graphBounds.width) *
        100;
      setActiveDomainX(`${center}%`);
    };

    updateConnectorX();
    window.addEventListener("resize", updateConnectorX);
    return () => window.removeEventListener("resize", updateConnectorX);
  }, [activeDomain]);

  return (
    <section className="skills-graph-shell skills-tree-shell" ref={graphRef}>
      <div className="skills-tree-root-stage">
        <div className="skills-root">{tree.root}</div>
        <span className="skills-tree-trunk" aria-hidden="true" />
        <span className="skills-tree-rail" aria-hidden="true" />
      </div>

      <div className="skills-tree-branches" role="list">
        {tree.domains.map((domain) => (
          <button
            type="button"
            role="listitem"
            key={domain.name}
            ref={(element) => {
              branchRefs.current[domain.name] = element;
            }}
            className={`branch-node skills-tree-branch ${activeDomain.name === domain.name ? "is-active" : ""}`}
            onMouseEnter={() => setActiveDomain(domain)}
            onFocus={() => setActiveDomain(domain)}
            onClick={() => setActiveDomain(domain)}
          >
            <span>{domain.name}</span>
          </button>
        ))}
      </div>

      <section
        className="skills-tree-modules-stage"
        key={activeDomain.name}
        style={{ "--active-domain-x": activeDomainX }}
      >
        <span className="skills-tree-active-trunk" aria-hidden="true" />
        <span className="skills-tree-modules-rail" aria-hidden="true" />
        <div className="skills-tree-modules" role="list">
          {activeDomain.skills.map((skill, index) => (
            <span
              key={skill}
              role="listitem"
              style={{ "--skill-order": index }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}

export default SkillsGraph;
