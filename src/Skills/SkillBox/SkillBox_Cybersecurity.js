import React from 'react';
import './SkillBox.css'; 
const SkillBox = () => {
  return (
    <div className="skill-box">
      <h2>Cybersecurity</h2>
      <ul>
        <li>OWASP</li>
        <li>SIEM</li>
        <li>Web Security</li>
        <li>Application Security</li>
        <li>Network Security</li>
        <li>Cryptography</li>
      </ul>
    </div>
  );
};

export default SkillBox;