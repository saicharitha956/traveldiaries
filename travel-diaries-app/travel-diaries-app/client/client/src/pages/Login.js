import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem('authToken', data.token); // ✅ Store token
        navigate('/home'); // ✅ Redirect to home
      } else {
        setError(data.message || 'Login failed. Invalid credentials.');
        console.error('Login failed:', data);
      }
    } catch (error) {
      setError('Failed to connect to the server');
      console.error('Login error:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page colorful-bg">
      <div className="login-container glassmorphism">
        <h2 className="neon-text">Sign In</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              className="styled-input"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group password-input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              className="styled-input"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <button type="submit" className="login-button vibrant-button">
            Login
          </button>
        </form>
        <div className="signup-link">
          <p className="subtle-text">Don't have an account?</p>
          <button
            onClick={() => navigate('/signup')}
            className="signup-button static-secondary-button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
