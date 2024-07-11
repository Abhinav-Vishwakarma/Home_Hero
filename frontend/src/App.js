import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="container">
      {isLogin ? <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />}
    </div>
  );
}

export default App;
