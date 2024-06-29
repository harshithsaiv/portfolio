import React from 'react';
import './SkillBox.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // For JAVA, as an example
import { faPython } from '@fortawesome/free-brands-svg-icons'; // For Python and C++

const SkillBox = () => {
  return (
    <div className="skill-box">
      <h2>Programming Languages</h2>
      <ul>
        <li><FontAwesomeIcon icon={faCoffee} /> JAVA</li>
        <li><FontAwesomeIcon icon={faPython} /> Python</li>
        <li>Go</li>
        <li> C++</li>
        <li>Cuda </li>
        <li>C </li>
      </ul>
    </div>
  );
};

export default SkillBox;
