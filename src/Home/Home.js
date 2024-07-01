import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
      <div className="styled-name">
          Harshith <span className="surname">Sai Veeraiah</span>
        </div>
        {/* <h1>Welcome to My Portfolio</h1> */}
        <p>
        🔒 Master's student, backend developer, cybersecurity enthusiast— Welcome to my world of digital fortitude. 
        </p>
        <p>
        A dedicated Master's student specializing in <b>Computer Science at California State University, Sacramento</b>. With a strong focus on <b>backend development</b> and <b>cybersecurity</b>, I am deeply committed to building secure and robust software solutions. My academic journey and professional experiences have equipped me with a rich skill set in programming languages like <b>Java</b> and <b>Python</b>, and a profound understanding of <b>modern security practices</b>. Beyond my technical expertise, I am passionate about leveraging <b>artificial intelligence(AI)</b> to enhance system efficiencies and improve user experiences. Driven by curiosity and an eagerness to solve complex challenges, I continuously strive to stay at the forefront of technology to not only predict but also innovate solutions for a safer digital future."
        </p>
        <div class="resume-container">
          <a href="./Resume.pdf" target="_blank" rel="noopener noreferrer" className="download-button">Download Resume</a>
          <span class="resume-separator"></span>
          <a href="./SSR_TSRPT.pdf" target="_blank" rel="noopener noreferrer" className="download-button">Download Transcript</a>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/harshithsaiv" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/harshith-sai-v/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://medium.com/@harshithsai94" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faMedium} />
          </a>
          <a href="mailto:contact@harshithsai.tech">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
      <div className="round_image"> 
        <img src= "./harshith.jpg"  alt="dev" class="harshith"/>
      </div>
    </div>
  );
};
export default Home;
