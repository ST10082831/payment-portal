import React, { useState } from 'react';
import './Register.css'; 

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    accountNumber: '',
    idNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="register-container">
      <h2 className="form-title">Customer Registration Form</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <input type="text" name="accountNumber" placeholder="Account Number" value={formData.accountNumber} onChange={handleChange} required />
          <input type="text" name="idNumber" placeholder="ID Number" value={formData.idNumber} onChange={handleChange} required />
        </div>
        <button className="submit-btn" type="submit">Submit</button>
      </form>
      <div className="login-link">
        <p>An existing customer? <a href="/login">Click to Login</a></p>
      </div>
    </div>
  );
};

export default Register;
