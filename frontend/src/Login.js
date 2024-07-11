import React from 'react';

function Login({ toggleForm }) {
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
        <button type="submit">Login</button>
      </form>
      <div className="toggle">
        <p>Don't have an account? <a href="#" onClick={toggleForm}>Register here</a></p>
      </div>
    </div>
  );
}

export default Login;
