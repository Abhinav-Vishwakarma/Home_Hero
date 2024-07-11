import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Services from './Services';
import Profile from './Profile';

function Home() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>You have successfully logged in or registered.</p>
    </div>
  );
}
=======
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to HomeHero</h1>
        <p>Your trusted partner for home services</p>
        <Link to="/Login" className="btn btn-primary">Login</Link>
        <Link to="/Register" className="btn btn-secondary">Register</Link>
      </div>

      <div className="services-section">
        <h2>Our Services</h2>
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-tools"></i>
          </div>
          <div className="service-info">
            <h3>Home Repairs</h3>
            <p>Get quick and reliable home repair services.</p>
          </div>
        </div>
        
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-broom"></i>
          </div>
          <div className="service-info">
            <h3>Cleaning Services</h3>
            <p>Hire professionals for cleaning your home.</p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-tools"></i>
          </div>
          <div className="service-info">
            <h3>Handyman Services</h3>
            <p>Book skilled handymen for various tasks.</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to transform your home?</h2>
        <Link to="/Register" className="btn btn-primary">Create an Account</Link>
      </div>

      <footer className="footer">
        <p>&copy; 2024 HomeHero. All rights reserved.</p>
      </footer>
    </div>
  );
};
>>>>>>> 1c9010d5e26a2925aa6f89f8f1a9295419182033

export default Home;
