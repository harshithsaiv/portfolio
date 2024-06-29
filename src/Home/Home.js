import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>
        🔒 Master's student, backend developer, cybersecurity enthusiast— Welcome to my world of digital fortitude. 
        </p>
        <p>
        I'm Harshith Sai, passionate about crafting resilient backend systems and safeguarding digital assets.
        Let's build the future securely, one line of code at a time. 
        </p>
        <a href="./Resume.pdf" target="_blank" rel="noopener noreferrer" >Download Resume</a>
      </div>
      <div className="round_image"> 
        <img src= "./harshith.jpg"  alt="dev" class="harshith"/>
      </div>
    </div>
  );
};
export default Home;
