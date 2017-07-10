import React, { Component } from 'react';
import axios from 'axios';

import Login from '../Login/Login';
import Header from '../Header/Header';
import './Home.css';

/**
 * About
 */
export class Home extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <Header />
        {/* Swiper Silder
    ================================================== */}
        {/* Slider main container */}
        <div className="swiper-container main-slider" id="myCarousel">
          <div className="swiper-wrapper">
            <div className="swiper-slide slider-bg-position" style={{background: 'url("http://grafreez.com/wp-content/temp_demos/burnout/img/1.jpg")'}} data-hash="slide1">
            <h2>Get a job that you love.<br />Focus on what you do best</h2>
            </div>

          </div>

        </div>

        {/* About
    ================================================== */}
    <section className="about-sec parallax-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2><small>Who We Are</small>About Us<br />
              </h2>
          </div>
          <div className="col-md-4">
            <p>To enjoy good health, to bring true happiness to one's family, to bring peace to all, one must first discipline and control one's own mind. If a man can control his mind he can find the way to Enlightenment, and all wisdom and virtue will naturally come to him.</p>

          </div>
          <div className="col-md-4">

            <p>Being in control of your life and having realistic expectations about your day-to-day challenges are the keys to stress management, which is perhaps the most important ingredient to living a happy, healthy and rewarding life.</p>
            <p><a href="/login" className="btn btn-transparent-white btn-capsul">Login or Sign up</a></p>
          </div>
        </div>
      </div>
    </section>


      </div>
    );
  }
}


export default Home;
