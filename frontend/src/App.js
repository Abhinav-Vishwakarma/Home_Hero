import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={isLogin ? <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />} />
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
