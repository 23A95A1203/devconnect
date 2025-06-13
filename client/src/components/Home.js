import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="hero">
        <div className="hero-text">
          <h1>Connecting Student Developers with <span>Real-World Projects</span></h1>
          <p>Gain experience, earn money, and build your portfolio while helping businesses grow.</p>
        </div>
      </header>

      <section className="features">
        <h2>What We Do</h2>
        <div className="cards">
          <div className="card">
            <h3>Connect Talent</h3>
            <p>We bridge the gap between student developers and businesses in need of web services.</p>
          </div>
          <div className="card">
            <h3>Facilitate Projects</h3>
            <p>We manage assignments, communication, and deliverables for smooth collaboration.</p>
          </div>
          <div className="card">
            <h3>Foster Growth</h3>
            <p>Students gain opportunities to learn, earn, and build a professional portfolio.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
