import React from 'react'
import './Navbar.css'
import { useRef } from 'react';
import { FaBars, FaTimes } from "react-icons/fa"
import brandLogo from './images/brand_logo.png';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const navRef = useRef();
  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <>
      <header>
        <div className="brand_logo">
          <Link to="/"><img src={brandLogo} draggable="false" className="brand_logo" alt="logo" /></Link>
          {/* <h1>DocScribd</h1> */}
        </div>
        <div className='wrap' ref={navRef}>
          <nav>
            <ul className="nav_links" onClick={showNavbar}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Contact Us</Link></li>
            </ul>
          </nav>
          <div className='btn'>
            <Link to="/login"><button className="login_btn butn">Login</button></Link>
            <Link to="/signup"><button className="signup_btn butn">Sign Up</button></Link>
          </div>
          <button onClick={showNavbar} className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
        </div>
        <button onClick={showNavbar} className="nav-btn">
          <FaBars />
        </button>
      </header>
      {/* <div className='menu_bg'></div> */}
    </>
  )
}