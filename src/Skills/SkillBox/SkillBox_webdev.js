import React from 'react';
import './SkillBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faJsSquare, 
  faNodeJs, 
  faHtml5, 
  faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';

const SkillBox = () => {
  return (
    <div className="skill-box">
      <h2>Web Development</h2>
      <ul>
        <li><FontAwesomeIcon icon={faReact} /> React</li>
        <li><FontAwesomeIcon icon={faJsSquare} /> JavaScript</li>
        <li><FontAwesomeIcon icon={faNodeJs} /> Node.js</li>
        <li><FontAwesomeIcon icon={faJsSquare} />Express.js</li>
        <li><FontAwesomeIcon icon={faHtml5} /> HTML</li>
        <li><FontAwesomeIcon icon={faCss3Alt} /> CSS</li>
      </ul>
    </div>
  );
};

export default SkillBox;
