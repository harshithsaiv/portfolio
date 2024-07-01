import React, { useRef } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Home from './Home/Home.js';
import Skills from './Skills/Skills.js';
// import Blogs from './Blogs/Blogs.js';
import Projects from './Projects/Projects.js';
import Experience from './Experience/Experience.js';
import './App.css';

function App() {
    const homeRef = useRef(null);
    const experienceRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    // const blogsRef = useRef(null);

    const scrollToSection = (section) => {
        switch (section) {
            case 'home':
                homeRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'experience':
                experienceRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'skills':
                skillsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'projects':
                projectsRef.current.scrollIntoView({ behavior: 'smooth' });
                break;
            // case 'blogs':
            //     blogsRef.current.scrollIntoView({ behavior: 'smooth' });
            //     break;
            default:
                break;
        }
    };

    return (
        <div className="app">
            <Navbar scrollToSection={scrollToSection} />
            <div ref={homeRef}>
                <Home />
            </div>
            <div ref={experienceRef}>
                <Experience />
            </div>
            <div ref={skillsRef}>
                <Skills />
            </div>
            <div ref={projectsRef}>
                <Projects />
            </div>
            {/* <div ref={blogsRef}>
                <Blogs />
            </div> */}
        </div>
    );
}

export default App;
