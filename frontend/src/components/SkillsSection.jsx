import "./SkillsSection.css";

function SkillsSection({ skills }) {
  return (
    <div className="skills-section">

      <h3 className="skills-section__title">
        Skills
      </h3>

      <ul className="skills-section__list">
        {skills.map((skill, index) => (
          <li key={index} className="skills-section__item">
            {skill}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default SkillsSection;
