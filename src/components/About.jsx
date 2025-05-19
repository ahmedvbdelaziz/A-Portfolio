import React from 'react';
import { Code, PaintBucket, MonitorSmartphone, Zap } from 'lucide-react';
import '../styles/About.css';
import { Link } from 'react-scroll';

const About = () => {
  const strengths = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'I write clean, maintainable code following best practices and industry standards.'
    },
    {
      icon: <PaintBucket size={24} />,
      title: 'Creative Designs',
      description: 'I create visually appealing interfaces that enhance user experience.'
    },
    {
      icon: <MonitorSmartphone size={24} />,
      title: 'Responsive',
      description: 'My layouts work perfectly on any device, from mobile to desktop.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'I optimize for speed to ensure fast load times and smooth interactions.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="underline"></div>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src="/img/A.jpg" alt="Frontend Developer" />
        </div>

        <div className="about-text">
          <h3>Who am I?</h3>
          <p>I'm a passionate Frontend Developer who enjoys building beautiful, responsive websites and web applications.</p>

<p>My journey in web development started during college when I created my first website. Since then, I’ve worked on projects that reflect my dedication to learning and my passion for clean, user-focused design.</p>

<p>I specialize in React.js and have a solid foundation in HTML, CSS, and JavaScript. I enjoy the creative process of transforming ideas into functional and intuitive interfaces.</p>

<p>When I'm not coding, I spend time exploring new design trends, improving my UI/UX skills, or discovering the latest in web technologies.</p>

          <a
  href="/Ahmed-Mohamed-Abdelaziz-Mohamed-CV.pdf"
  target="_blank"
  className="cv-button"
  download
>
  Download CV
</a>

        </div>
      </div>

      <div className="strengths">
        {strengths.map((strength, index) => (
          <div className="strength-card" key={index}>
            <div className="strength-icon">{strength.icon}</div>
            <h3>{strength.title}</h3>
            <p>{strength.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;