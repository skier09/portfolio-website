import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind or want to collaborate? Feel free to reach out!
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>
          <div className="contact-details">
            <p>Email: your.email@example.com</p>
            <p>Location: Your Location</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
          </div>
          <button type="submit" className="button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 