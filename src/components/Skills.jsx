import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Skills.css';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const frontendSkills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'React', level: 85 },
    { name: 'Redux', level: 75 }
  ];

  const designSkills = [
    { name: 'Figma', level: 80 },
    { name: 'Adobe XD', level: 75 },
    { name: 'UI/UX Design', level: 78 },
    { name: 'Responsive Design', level: 92 }
  ];

  const otherSkills = [
    { name: 'Git & GitHub', level: 88 },
    { name: 'Node.js', level: 70 },
    { name: 'Testing', level: 65 },
    { name: 'Chrome DevTools', level: 62 }
  ];

  const toolsIcons = [
    'VS Code', 'GitHub', 'npm', 'Webpack', 'Babel', 'Jest', 'Postman', 'Chrome DevTools'
  ];

  const skillVariants = {
    hidden: { width: 0 },
    visible: level => ({
      width: `${level}%`,
      transition: { 
        duration: 1,
        ease: "easeInOut" 
      }
    })
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
        <h2 className="section-title">My Skills</h2>
        <div className="underline"></div>
      </div>
        
        <div className="skills-container" ref={ref}>
          <div className="skills-category">
            <h3>Frontend Development</h3>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      custom={skill.level}
                      variants={skillVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3>Design</h3>
            <div className="skills-list">
              {designSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      custom={skill.level}
                      variants={skillVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3>Tools & Others</h3>
            <div className="skills-list">
              {otherSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      custom={skill.level}
                      variants={skillVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="tools-section">
          <h3>Tools & Technologies</h3>
          <div className="tools-container">
            {toolsIcons.map((tool, index) => (
              <motion.div 
                className="tool-item"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;