import React, { useState } from 'react';

function Register({ toggleForm }) {
  const [userType, setUserType] = useState('normal');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div>
      <h2>Register</h2>
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
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <div className="toggle">
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
}

export default Register;
