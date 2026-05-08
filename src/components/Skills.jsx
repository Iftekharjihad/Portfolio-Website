import { skills } from '../data';

function Skills() {
  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <div className="section-title">
          <p>Skills</p>
          <h2>Technical and core skills</h2>
        </div>

        <div className="skills-list fade-up">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
