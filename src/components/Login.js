import React, { useState } from 'react';
import './Login.css'; // Import the CSS

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    accountNumber: ''
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
  };

  return (
    <div className="login-container">
      <h2 className="form-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={credentials.username} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-row">
          <input 
            type="text" 
            name="accountNumber" 
            placeholder="Account Number" 
            value={credentials.accountNumber} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-row">
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={credentials.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button className="submit-btn" type="submit">Login</button>
      </form>
      <div className="register-link">
        <p>New customer? <a href="/register">Register Here</a></p>
      </div>
    </div>
  );
};

export default Login;
