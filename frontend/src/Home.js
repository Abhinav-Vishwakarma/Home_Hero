import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Services from './Services';
import Profile from './Profile';

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/home/services">Services</Link></li>
          <li><Link to="/home/profile">Profile</Link></li>
          <li><Link to="/home/profile">Home</Link></li>        </ul>
      </nav>
      <Routes>
        <Route path="services" element={<Services />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Home;
