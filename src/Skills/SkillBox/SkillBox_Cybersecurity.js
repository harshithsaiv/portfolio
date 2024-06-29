import React from 'react';
import './SkillBox_Cyber.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faNetworkWired, faGlobeAmericas, faMobileAlt, faSitemap, faLock } from '@fortawesome/free-solid-svg-icons';

const SkillBox = () => {
  return (
    <div className="skill-box-cyber">
      <h2>Cybersecurity</h2>
      <ul>
        <li><FontAwesomeIcon icon={faShieldAlt} /> OWASP</li>
        <li><FontAwesomeIcon icon={faNetworkWired} /> SIEM</li>
        <li><FontAwesomeIcon icon={faGlobeAmericas} /> Web Security</li>
        <li><FontAwesomeIcon icon={faMobileAlt} /> Application Security</li>
        <li><FontAwesomeIcon icon={faSitemap} /> Network Security</li>
        <li><FontAwesomeIcon icon={faLock} /> Cryptography</li>
      </ul>
    </div>
  );
};

export default SkillBox;
