import React from 'react';
import './Skills.css';
import SkillBoxWeb from './SkillBox/SkillBox_webdev'
import SkillBoxCyber from './SkillBox/SkillBox_Cybersecurity'

const Skills =()=>{
    return(
        <div class ="skills-container">
            <div class="skills-content">
                <h3>
                    What I Am Great At
                </h3>
                <p>
                    I am a masters student who is interested in Network security
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
                <SkillBoxWeb/>
            </div>
            <div>
                <SkillBoxWeb/>
            </div>
        </div>
        
        
        </div>
    )
};

export default Skills;