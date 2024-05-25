import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import brandLogo from './images/brand_logo.png';
import { Link, /* useHistory */ } from 'react-router-dom'; // Remove useHistory

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [showNav, setShowNav] = useState(false);
  // const history = useHistory(); // Remove this line

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login');
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const toggleNavbar = () => {
    setShowNav(!showNav);
  };

  const logout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        setUser(null);
        // history.push('/'); // Comment out this line
        window.location.href = '/'; // Redirect manually
      } else {
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
      <header>
        <div className="brand_logo">
          <Link to="/">
            <img src={brandLogo} draggable="false" className="brand_logo" alt="logo" />
          </Link>
        </div>
        <div className={`wrap ${showNav ? 'responsive_nav' : ''}`}>
          <nav>
            <ul className="nav_links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Contact Us</Link></li>
            </ul>
          </nav>
          <div className="User">
            {user && <span>Welcome, {user.name}</span>}
            <button onClick={logout} className='login_btn butn'>Logout</button>
          </div>
          <button onClick={toggleNavbar} className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
        </div>
        <button onClick={toggleNavbar} className="nav-btn">
          <FaBars />
        </button>
      </header>
    </>
  );
}
