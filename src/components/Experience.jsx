import './Experience.css';


const experiences = [
  {
    title: 'Competetive Programmer',
    icon: '⌖',
    description:
      'Passionate about solving algorithmic problems using efficient data structures and optimized approaches through competitive programming.',
    points: [
      'Problem Solving & Algorithm Design',
      'Data Structures and Complexity Optimization',
      'ICPC, IUPC & Online Contest Participation',
    ],
  },
  {
    title: 'Frontend Engineering',
  icon: '</>',
  description:
    'Developing responsive and interactive web applications using modern frontend technologies with a focus on clean UI and smooth user experience.',
  points: [
    'React.js, Tailwind CSS & JavaScript',
    'Reusable Components & Responsive Layouts',
    'API Integration & Modern UI Development',
  ],
  },
  {
    title: 'Software Development',
  icon: '✦',
  description:
    'Passionate about building efficient software solutions and continuously improving problem-solving and development skills.',
  points: [
    'C++, C# & Object-Oriented Programming',
    'Database Management & Backend Basics',
    'Problem Solving & Logical Thinking',
  ],
  },
];

function Experience() {
  return (
    <section className="experience section-padding" id="experience">
      <div className="container">
        <div className="section-title fade-up">
          <p>Experience</p>
          <h2>CORE EXPERTISE</h2>
          <span>
            Combining problem-solving skills with modern web development to create clean, responsive, and user-focused applications.
          </span>
        </div>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <div
              className={`experience-row fade-up ${
                index % 2 === 0 ? 'normal-row' : 'reverse-row'
              }`}
              key={item.title}
            >
              <div className="experience-content">
                <div className="experience-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="experience-card card">
                {item.points.map((point) => (
                  <div className="experience-point" key={point}>
                    <span className="check-icon">✓</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;