import React from 'react'
import room from '../assets/r.png';
import './Home.css';
import chair from '../assets/ch.png';

const Home = () => {
    return (
        <>
      <section className="hero">
        <img 
          src={room} 
          className="hero-image" 
          alt="Luxury room interior" 
        />
        <div className="hero-overlay">
          <p className="hero-subtitle">Lorem ipsum dolor sit amet</p>
          <h1 className="hero-title">Your Perfect Stay<br />Awaits.</h1>
          <button className="hero-button">Book Now</button>
        </div>
      </section>
      <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">Who we are</h2>
        <div className="about-divider"></div>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
          quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
          consequat.
        </p>
      </div>
    </section>
    <section className="stay-section">
        <div className="stay-container">
          <img 
            src={chair} 
            className="chair-image" 
            alt="Luxury chair" 
          />
          <div className="stay-content">
            <h2 className="stay-title">Stay with us</h2>
            <h3 className="stay-subtitle">Rooms and Suites</h3>
            <div className="stay-divider"></div>
            <p className="stay-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="stay-buttons">
              <button className="look-now-btn">Book Now</button>
              <button className="learn-more-btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <section className="amenities-section">
      <div className="amenities-container">
        <h2 className="amenities-title">Stay with us</h2>
        <h3 className="amenities-subtitle">Amenities</h3>
        <div className="amenities-divider"></div>
        <p className="amenities-text">
          Lorem ipsum dolor sit amet, consectetuer<br />
          adipiscing elit, sed diam nonummy nibh<br />
          euismod tincidunt ut laoreet dolore magna<br />
          aliquam erat volutpat. Ut wisi enim ad minim
        </p>
        <button className="contact-button">Contact</button>
      </div>
    </section>
      </>
    );
  };
  

export default Home;