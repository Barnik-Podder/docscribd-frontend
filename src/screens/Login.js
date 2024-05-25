import React, { useState, useEffect } from 'react';
import './Login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [apiUrl, setApiUrl] = useState("");

  useEffect(() => {
    const url = process.env.REACT_APP_API_URL;
    setApiUrl(url);
  }, []);

  const togglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login_patient" || `${apiUrl}/api/login_patient`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message || 'Login failed');
      }
      window.location.href = '/dashboard';
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div><Navbar /></div>
      <main>
        <div className='container'>
          <h1>LOGIN</h1>
          <p className='welcome'>Welcome back to DocScribd!!</p>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="email field"
              name="email"
              required
              placeholder="Enter your email here"
              value={credentials.email}
              onChange={handleChange}
            />
            <div className='password-eye'>
              <input
                type={showPassword ? "text" : "password"}
                className="password field"
                name="password"
                id='password'
                required
                placeholder="Enter your password here"
                value={credentials.password}
                onChange={handleChange}
              />
              <span className='eye' onClick={togglePassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <input type="submit" className="butn login_btn" value="Login" />
          </form>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </main>
      <div><Footer /></div>
    </>
  );
}
