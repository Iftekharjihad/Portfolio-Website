import { profile } from '../data';

function Hero() {
  return (
    <section id="home" className="hero section-padding">
      <div className="container hero-grid">
        <div className="hero-content fade-up">
          <p className="eyebrow">Hello, I'm</p>
          <h1>Iftekhar Islam Jihad</h1>
          <h2>{profile.role}</h2>
          <p className="hero-text">
            I am a motivated CSE student interested in web development, competetive Programming, Problem solving on DSA & Algorithm,
            technical skill development, and hands-on technology projects.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary-btn">View Projects</a>
            <a href={`mailto:${profile.email}`} className="btn secondary-btn">Contact Me</a>
          </div>

          <div className="hero-stats">
            <div><strong>3.52</strong><span>CGPA</span></div>
            <div><strong>5+</strong><span>Projects</span></div>
            <div><strong>2+</strong><span>Tech Areas</span></div>
          </div>
        </div>

        <div className="hero-image-box fade-up delay-1">
          <div className="glow"></div>
         <img src="/image/jihad.png" alt={profile.name} className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
