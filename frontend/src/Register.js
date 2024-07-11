import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register({ toggleForm }) {
  const [userType, setUserType] = useState('normal');
  const navigate = useNavigate();

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add registration logic here
    navigate('/home');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="new-username">Username</label>
          <input type="text" id="new-username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="new-password">Password</label>
          <input type="password" id="new-password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
        </div>
        <div className="form-group">
          <label htmlFor="register-user-type">User Type</label>
          <select id="register-user-type" name="userType" value={userType} onChange={handleUserTypeChange}>
            <option value="normal">Normal User</option>
            <option value="service-provider">Service Provider</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="toggle">
        <p>Already have an account? <a href="#" onClick={toggleForm}>Login here</a></p>
      </div>
    </div>
  );
}

export default Register;
