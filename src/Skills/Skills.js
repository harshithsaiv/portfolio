import React from 'react';
import './Skills.css';
import SkillBoxWeb from './SkillBox/SkillBox_webdev'
import SkillBoxCyber from './SkillBox/SkillBox_Cybersecurity'
import SkillBoxLanguage from './SkillBox/SkillBox_Languages'

const Skills =()=>{
    return(
        <div class ="skills-container">
            <div class="skills-content">
                <h3>
                    What I Excel At
                </h3>
                <p>
                My interest in cybersecurity stems from a deep-seated commitment to safeguard digital information and infrastructure, which I believe is crucial in the evolving tech landscape.
                </p>

            </div>
        <div class="SkillBox">
            <div > 
                <SkillBoxWeb/>
            </div>
            <div>
                <SkillBoxCyber/>
            </div>
            <div>
                <SkillBoxLanguage/>
            </div>
        </div>
        
        
        </div>
    )
};

export default Skills;