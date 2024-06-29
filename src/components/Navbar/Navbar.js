import React from 'react';
import './Navbar.css';

const Navbar =()=>{
    return(
        <nav className='navbar'>
            
            <div className='navbar-logo'> 
               
                <img src ="./Logo.jpg" alt="Logo" class=" logo"/>
            </div>
            <div className='navbarlinks'>
                <span>Home</span>
                <span>Projects</span>
                <span>Blog</span>
                <span>Contact</span>
        
                
            </div>
        </nav>
    );
};
export default Navbar;