import React from 'react'
import './Navbar.css'


const Navbar = () => {

    return (
    
        <div className='navbar'>
           
            <p>AQUARTIA<sub>TECHNOLOGIES</sub></p>
            <ul className="nav-menu">
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/services'>Services</a></li>
                <li><a href='/portfolio'>Portfolio</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
            <div className="nav-connect"><a>Connect With Us</a></div>
    
        </div>
    )
}
export default Navbar




