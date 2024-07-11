import React, { useState } from 'react';

function Login() {
  const [userType, setUserType] = useState('normal');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
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
        <p>Don't have an account? <Link to="/Register">Register here</Link></p>
      </div>
    </div>
  );
}

export default Login;
