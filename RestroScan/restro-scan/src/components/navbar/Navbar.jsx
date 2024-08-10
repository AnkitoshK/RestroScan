import React from 'react'
import { useState, useEffect } from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import {Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {

  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
     <div className='logo-name'><Link to='/' className='icon'><i>Restro</i><IoFastFoodOutline/><i>Scans</i>
     </Link>
     </div>
     <div className='menu-icon' onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
     <div className={`list ${isMenuOpen ? 'open' : ''}`}>
      <nav className='nav-links'>
        <ul>
        <li ><Link to="/" className={activeLink === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/gallery" className={activeLink === '/gallery' ? 'active' : ''}>Gallery</Link></li>
          <li><Link to="/pricing" className={activeLink === '/pricing' ? 'active' : ''}>Pricing</Link></li>
          <li><Link to="/contact" className={activeLink === '/contact' ? 'active' : ''}>Contact Us</Link></li>
          <li><Link to="/about" className={activeLink === '/about' ? 'active' : ''}>About Us</Link></li>
        </ul>
        </nav>
        <Link to='/restroscans' className='btn-link'>
          <button className='btn'>Get Scans</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
