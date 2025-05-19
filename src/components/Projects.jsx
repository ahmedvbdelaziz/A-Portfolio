import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'This is my portfolio website showcasing my front-end skills, key projects, and contact details in a clean, modern, and responsive design.',
      image: '/img/portfolio.png',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://ahmedvbdelaziz.github.io/Portoflio/',
      githubLink: 'https://github.com/ahmedvbdelaziz/Portoflio/',
    },
    {
      id: 2,
      title: 'E-commerce Watch Store',
      description: 'A stylish and responsive e-commerce store for showcasing and selling luxury watches.',
      image: '/img/chrono.png',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://ahmedvbdelaziz.github.io/CHRONO/',
      githubLink: 'https://github.com/ahmedvbdelaziz/CHRONO',
    },
    {
      id: 3,
      title: 'La-Maison Restaurant',
      description: 'A modern and responsive restaurant website showcasing the menu and key info in a clean, user-friendly layout.',
      image: '/img/restaurant.png',
      category: 'Web',
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://ahmedvbdelaziz.github.io/Restaurant/',
      githubLink: 'https://github.com/ahmedvbdelaziz/Restaurant',
    },
    {
      id: 4,
      title: 'AROMA Coffee Shop',
      description: 'A responsive coffee shop website with a modern design, showcasing the menu and ambiance.',
      image: '/img/aroma.png',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JS'],
      liveLink: 'https://ahmedvbdelaziz.github.io/Aroma---Coffee/',
      githubLink: 'https://github.com/ahmedvbdelaziz/Aroma---Coffee',
    },
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web Apps', value: 'web' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <div className="underline"></div>
      </div>

      <div className="project-filters">
        {filters.map(filter => (
          <button
            key={filter.value}
            className={`filter-button ${activeFilter === filter.value ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={20} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;