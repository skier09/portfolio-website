import React from 'react';
import profileImage from '../assets/me.JPG';

const About = () => {
  const skills = {
    frontend: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 80},
      { name: 'HTML5 & CSS3', level: 75 },
      { name: 'TypeScript', level: 50 },
      { name: 'Java', level: 85 },
      { name: 'Kotlin', level: 75 },
      { name: 'Swift', level: 25 }
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'RESTful APIs', level: 65 },
      { name: 'Python', level: 70 },
      { name: 'C#', level: 65 },
      { name: 'C++', level: 50 },
      { name: 'SQL', level: 35 },
      { name: 'AWS', level: 50 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 85 },
      { name: 'Linux', level: 65 },
      { name: 'Docker', level: 35 },
      { name: 'Postman', level: 80 },
      { name: 'Android Studio', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'Adobe Suite', level: 70 },
      

    ]
  };

  const timeline = [
    {
      year: '2024-2025',
      title: 'UI Developer and Technical Lead',
      description: 'Contracted with Heartland Farms to develop an AI Optical Potato Sorting System. Focused on the UI/UX design and development of the application as well as the system architecture.',
      logo: 'heartland_logo.jpg'
    },
    {
      year: '2022-2025',
      title: 'Project Manager and Software Developer',
      description: 'Worked on Dynamic Automated Reactive Target (DART). Full Stack Android App Development as well as leading the prototyping and fabrication team. Also executed technical installations of workstations and an AccTek Fiber Laser Metal Cutting Machine.  ',
      logo: 'sciswift_logo.jpg'
    },
    {
      year: '2022-2025',
      title: 'UW-Madison Data Science Club DotData: Social Media Head',
      description: 'Created weekly content for the club and the general public. Managed the club\'s social media accounts and helped with the organization of events for over 700 members. Created and hosted multiple Data Science CTFs for the club to promote engagement and test the skills of participating members.',
      logo: 'dotData_logo.png'
    },
    {
      year: '2022-2025',
      title: 'Software Training for Students: Technical Instructor',
      description: 'Instructor for the Software Training for Students program. Teaching students a variety of programming languages and concepts.',
      logo: 'sts_logo.png'
    },
    {
      year: '2022-2025',
      title: 'University of Wisconsin-Madison',
      description: 'Bachelor of Science in Computer Science. Relevant courses include: Algorithms, Theory of Programming Languages, Databases, Advanced Graphics, etc.  ',
      logo: 'uw_logo.png'
    }
  ];

  return (
    <div className="page">
      <h1></h1>
      
      {/* Introduction Section */}
      <div className="about-section">
        <div className="profile-section">
          <div className="profile-image-container">
            <img 
              src={profileImage}
              alt="Samuel Kier" 
              className="profile-image"
            />
          </div>
          <div className="profile-intro">
            <h2>Hello, I'm Samuel Kier</h2>
            <p>
              My journey in technology has been driven by a constant desire to learn and solve difficult problems that make an undeniable impact on people's lives.
            </p>
            <p>
              When I'm not coding, you can find me playing guitar, spending time with friends and family, or reading a book. I believe that a well-rounded 
              perspective helps me bring unique solutions to technical challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="about-section">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              <div className="skills-list">
                {skillList.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="about-section">
        <h2>Experience & Education</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-logo-container">
                    {item.logo ? (
                      <img 
                        src={require(`../assets/${item.logo}`)} 
                        alt={`${item.title} logo`}
                        className="timeline-logo"
                      />
                    ) : (
                      <div className="timeline-logo-placeholder" />
                    )}
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interests Section */}
      <div className="about-section">
        <h2>Beyond Coding</h2>
        <div className="interests-grid">
          <div className="interest-item">
            <h3>Hobbies</h3>
            <ul>
              <li>Guitar</li>
              <li>Hiking</li>
              <li>Reading</li>
              <li>Music</li>
              <li>Comedy</li>
            </ul>
          </div>
          <div className="interest-item">
            <h3>Current Learning</h3>
            <ul>
              <li>LLMs</li>
              <li>Advanced React Patterns</li>
              <li>System Design</li>
              <li>Machine Learning</li>
              <li>Cloud Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;