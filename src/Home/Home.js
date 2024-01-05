import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello, I'm Harshith Sai, a developer. This is my portfolio where I showcase my projects and blogs.
        </p>
        <p>
          Explore my work and feel free to contact me for any inquiries or collaborations.
          
        </p>
        <a href="./">Download Resume</a>
        <div>
        <img src= "./hello_dev.png"  alt="dev" class="hello_dev"/>
      </div>
      </div>
      
    </div>
  );
};
export default Home;
