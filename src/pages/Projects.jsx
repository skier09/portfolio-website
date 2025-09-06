import React from 'react';
import lecturesphereImage from '../assets/lecturesphere_logo.png';
import mlbLogo from '../assets/mlb_logo.png';
import discordLogo from '../assets/discord_logo.png';

const Projects = () => {
  const projects = [
    {
      title: 'LectureSphere',
      description: 'A collaborative group note-taking app integrated with AI summarization for college students during lectures.',
      longDescription: 'Built a Kotlin-based frontend that allows students to collaborate in real-time during lectures. Integrated AI summarization to automatically generate concise notes from lecture content.',
      image: lecturesphereImage,
      technologies: ['Kotlin', 'Android Studio', 'Firebase', 'OpenAI API'],
      features: [
        'Real-time collaboration',
        'AI-powered note summarization',
        'Offline support',
        'User authentication'
      ],
      challenges: 'Implementing real-time synchronization while maintaining offline functionality and optimizing AI response times.',
      role: 'Frontend Developer'
    },
    {
      title: 'MLB Foreign Substance Detector',
      description: 'A Python-powered system analyzing MLB pitcher stats to detect abnormal spin rates and identify potential cheating.',
      longDescription: 'Developed a data analysis tool that processes MLB pitching statistics to identify anomalies in spin rates that might indicate the use of foreign substances.',
      image: mlbLogo,
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      features: [
        'Real-time data analysis',
        'Statistical anomaly detection',
        'Data visualization',
        'Historical trend analysis'
      ],
      challenges: 'Handling large datasets efficiently and developing accurate detection algorithms.',
      githubLink: null,
      demoLink: null,
      role: 'Full Stack Developer'
    },
    {
      title: 'Discord Chat Bot',
      description: 'A versatile Discord bot providing entertainment and various interactive functions for server communities.',
      longDescription: 'Created a feature-rich Discord bot that enhances server engagement through games, moderation tools, and custom commands.',
      image: discordLogo,
      technologies: ['JavaScript', 'Node.js', 'Discord APIs'],
      features: [
        'Custom command system',
        'Game integration',
        'Moderation tools',
        'User statistics tracking'
      ],
      challenges: 'Managing multiple concurrent user interactions and implementing efficient command handling.',
      role: 'Backend Developer'
    }
  ];

  return (
    <div className="page">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p className="project-role">{project.role}</p>
              <p className="project-description">{project.longDescription}</p>
              
              <div className="project-features">
                <h3>Key Features</h3>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-challenges">
                <h3>Key Challenges</h3>
                <p>{project.challenges}</p>
              </div>

              <div className="project-links">
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    className="button" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;