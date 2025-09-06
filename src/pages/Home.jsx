import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import resumePDF from '../assets/Samuel_Kier_Resume_0905.pdf';

function Home() {
  const navigate = useNavigate();
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://xi1zqk4jrl.execute-api.us-east-2.amazonaws.com/prod/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(data.error || 'Too many requests. Please try again later.');
        }
        throw new Error('Failed to send message');
      }

      alert('Thank you for your message! I will get back to you soon.');
      setEmailData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert(error.message || 'Sorry, there was an error sending your message. Please try again later.');
    }
  };

  return (
    <div className="page">
      <div className="home-content">
        <h1>Samuel Kier</h1>
        <h3>Software Developer</h3>
        
        <img 
          src="https://sts.doit.wisc.edu/wp-content/uploads/2022/11/IMG_3524.jpeg" 
          alt="Samuel Kier"
          className="home-image"
        />

        <div className="introduction">
          <p>
            Welcome to my portfolio! I'm a recent Computer Science student graduate with a keen interest in AI, Machine Learning, and frontend engineering. 
            I specialize in creating intuitive and engaging user experiences through clean, efficient code and modern design principles.
          </p>
          <p>
            As a recent graduate, I'm looking for a full time position in the software development field. 
            Currently, I am working as a Software Developer at Heartland Farms, developing an AI Optical Potato Sorting System.
            Working with a team of 2 other developers, who were with me from the conception of the project, I have evolved exponentially as a programmer and teammate. There were many new tools I had to
            learn, including but not limited to: new Python libraries, yolov8, Linux Operating Systems, React and node.js, and working in an Agile environment. 
            I am always eager to learn new technologies and take on challenging projects
            that force me to continue learning and widen my skillsets.
          </p>
        </div>

        <div className="home-buttons">
          <Link to="/projects" className="button view-work-btn">View My Work</Link>
          <a 
            href={resumePDF} 
            className="button resume-btn" 
            download="Samuel_Kier_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>

        <div className="contact-section">
          <h2>Get In Touch</h2>
          <p>Have a project in mind or want to collaborate? Feel free to reach out!</p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={emailData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={emailData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={emailData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                required
              />
            </div>
            <button type="submit" className="button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;