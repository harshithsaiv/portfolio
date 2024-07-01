import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection }) => {
    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src="./Logo.jpg" alt="Logo" className="logo" />
            </div>
            <div className='navbarlinks'>
                <span onClick={() => scrollToSection('home')}>Home</span>
                <span onClick={() => scrollToSection('experience')}>Experience</span>
                <span onClick={() => scrollToSection('skills')}>Skills</span>
                <span onClick={() => scrollToSection('projects')}>Projects</span>
                {/* <span onClick={() => scrollToSection('blogs')}>Blogs</span> */}
            </div>
        </nav>
    );
};

export default Navbar;
