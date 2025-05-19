import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">Hello, I'm</span>
          <span className="name">Ahmed Abdelaziz</span>
          <span className="role">Frontend Developer</span>
        </h1>
        
        <p className="hero-description">
          I craft responsive websites where technology meets creativity
        </p>
        
        <div className="hero-cta">
          <Link
            to="projects"
            className="cta-button primary"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            View My Work
          </Link>
          
          <Link
            to="contact"
            className="cta-button secondary"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Get In Touch
          </Link>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/ahmedvbdelaziz" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ahmedabdelaziz11" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={20} />
          </a>
          <a href="ahmedabdelazzizz27@gmail.com" className="social-link">
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <ArrowDown size={24} />
          <span>Scroll Down</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;