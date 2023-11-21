// HeroSection.js
import React from "react";
import "./Hero.css";
import logo from "../Asset/logoHero.png";

const Hero = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Your Logo
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col ">
              <img src={logo} alt="Logo" className="logo-hero" />
              <h1 className="text1">Kuliah Kerja Nyata</h1>
              <h1 className="text2">Pentingnya Menggunakan Internet yang Baik Pada Era Generasi Gen Z di MTS Nurul Hidayah</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
