import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <span className="logo-text">AA</span>
          </div>
          
          <div className="footer-nav">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="footer-link"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="footer-link"
            >
              About
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="footer-link"
            >
              Projects
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="footer-link"
            >
              Skills
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="footer-link"
            >
              Contact
            </Link>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/ahmedvbdelaziz" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ahmedabdelaziz11" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/_therealzizo" target="_blank" rel="noopener noreferrer" className="social-link">
              <Twitter size={20} />
            </a>
            <a href="ahmedabdelazzizz27@gmail.com" className="social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Ahmed Abdelaziz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;