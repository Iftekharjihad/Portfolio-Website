import { education, profile } from '../data';

function About() {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="section-title">
          <p>About Me</p>
          <h2>Building skills through learning and real projects</h2>
        </div>

        <div className="about-grid">
          <div className="card about-card fade-up">
            <h3>Profile</h3>
            <p>
              I am currently studying B.Sc. in Computer Science and Engineering at
              <strong> {profile.university}</strong>. I enjoy learning new technologies,
              working in teams, and building practical projects that solve real-life problems.
            </p>
            <p>
              I also have competetive Programming experience, where I attend 2x IUPC,1x ICPC Preliminary,5x Monthly contest, developed communication,
              teamwork, responsibility, and coordination skills.
            </p>
          </div>

          <div className="card fade-up delay-1">
            <h3>Education</h3>
            <div className="timeline">
              {education.map((item) => (
                <div className="timeline-item" key={item.degree}>
                  <h4>{item.degree}</h4>
                  <p>{item.institute}</p>
                  <span>{item.time}</span>
                  <strong>{item.result}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
