import React, { Component } from 'react';
import $ from 'jquery';
import Logo from './Images/headout-logo.png';
import ImageOne from './Images/landing-one.png';
import ImageTwo from './Images/landing-two.png';
import ImageThree from './Images/landing-three.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header-wrapper">
          <div className="first-line">
            <div>
              <img id="logo" src={Logo} alt="Headout" />
            </div>
            <div className="select-city">
              <p>Select City</p>
            </div>
            <div className="select-experience">
              <p>Search for experiences</p>
            </div>
          </div>
          <SlideShow />
        </div>
        <Searchbar />
      </React.Fragment>
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
        .fadeOut(4000)
        .next()
        .fadeIn(4000)
        .end()
        .appendTo('#slideshow');
    }, 5000);
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
