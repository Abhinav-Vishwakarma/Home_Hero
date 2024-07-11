import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ toggleForm }) {
  const [userType, setUserType] = useState('normal');
  const navigate = useNavigate();

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add authentication logic here
    navigate('/home');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="user-type">User Type</label>
          <select id="user-type" name="userType" value={userType} onChange={handleUserTypeChange}>
            <option value="normal">Normal User</option>
            <option value="service-provider">Service Provider</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="toggle">
        <p>Don't have an account? <a href="#" onClick={toggleForm}>Register here</a></p>
      </div>
    </div>
  );
}

export default Login;
