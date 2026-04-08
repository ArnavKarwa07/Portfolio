import SkillsGraph from "../components/SkillsGraph";
import { skillsTree } from "../data/skillsData";

function SkillsPage() {
  return (
    <div className="page skills-page">
      <section className="page-header">
        <p className="eyebrow">Skills</p>
        <h1>Skills map</h1>
        <p>Select a branch to view the stack, strengths, and focus areas.</p>
      </section>

      <SkillsGraph tree={skillsTree} />
    </div>
  );
}

export default SkillsPage;
