import React from 'react';

function Register({ toggleForm }) {
  return (
    <div>
      <h2>Register</h2>
      <form>
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
        <button type="submit">Register</button>
      </form>
      <div className="toggle">
        <p>Already have an account? <a href="#" onClick={toggleForm}>Login here</a></p>
      </div>
    </div>
  );
}

export default Register;
