import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', { // Use your backend signup endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Signup successful:', data);
        navigate('/login'); // Redirect to login after successful signup
        // Optionally, you could log the user in automatically here
      } else {
        setError(data.message || 'Signup failed');
        console.error('Signup failed:', data);
      }
    } catch (error) {
      setError('Failed to connect to the server');
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="signup-page colorful-bg">
      <div className="signup-container glassmorphism">
        <h2 className="neon-text">Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <input
              type="text"
              className="styled-input"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div className="input-group">
            <input
              type="password"
              className="styled-input"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="signup-button vibrant-button">
            Sign Up
          </button>
        </form>
        <div className="login-link">
          <p className="subtle-text">Already have an account?</p>
          <button onClick={() => navigate('/login')} className="login-button secondary-button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;