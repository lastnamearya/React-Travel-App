import React, { Component } from 'react';
import $ from 'jquery';
import Logo from './Images/headout-logo.png';
import ImageOne from '../Images/landing-one.png';
import ImageTwo from '../Images/landing-two.png';
import ImageThree from '../Images/landing-three.png';
import MobileApp from '../Images/mobile-app.gif';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-wrap">
        <div className="header-wrapper">
          <div className="header-left">
            <div className="nav">
              <div className="first-line">
                <div>
                  <img id="logo" src={Logo} alt="Headout" />
                </div>
                <div className="select-city" />
                <div className="select-experience" />
              </div>
              <div className="second-line">
                <div className="best-picked">
                  <div>
                    <p>Headout Picks</p>
                  </div>
                  <p>Best Sellers</p>
                  <p>Abu Dhabi City Tours</p>
                  <p>Amsterdam Attractions</p>
                  <p>Burj Khalifa</p>
                </div>
                <div className="support">
                  <p>
                    24/7 Support{' '}
                    <span className="arrow-down">
                      {' '}
                      <i class="fas fa-angle-down" />
                    </span>
                  </p>
                  <p
                    style={{
                      marginRight: '0px'
                    }}
                  >
                    English/USD
                    <span className="arrow-down">
                      {' '}
                      <i class="fas fa-angle-down" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="sign-in">
                <i class="fas fa-user-circle sign-in-user" />
                <p style={{ color: '#ec1943', marginLeft: '10px' }}>
                  Sign in
                  <span className="arrow-down">
                    {' '}
                    <i class="fas fa-angle-down" />
                  </span>
                </p>
              </div>
              <div className="download-app">
                <img src={MobileApp} id="mobile-app" alt="Download our App" />
                <p style={{ color: '#24a1b2' }}>Download App</p>
              </div>
            </div>
          </div>
        </div>
        <SlideShow />
        <Searchbar />
      </div>
    );
  }
}

class SlideShow extends Component {
  componentDidMount() {
    this.slideshow();
  }

  slideshow = () => {
    $('#slideshow > div:gt(0)').hide();

    setInterval(() => {
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 4000);
  };
  render() {
    return (
      <div id="slideshow">
        <div className="img-crop">
          <img src={ImageOne} alt="Explore the World with us" />
        </div>
        <div className="img-crop">
          <img src={ImageTwo} alt="Explore the World with us" />
        </div>
        <div className="img-crop">
          <img src={ImageThree} alt="Explore the World with us" />
        </div>
      </div>
    );
  }
}

class Searchbar extends Component {
  render() {
    return (
      <div className="search-bar">
        <div className="select-city-large" />
        <div className="select-experience-large" />
        <button id="go">Let's Go</button>
      </div>
    );
  }
}

export default Header;
