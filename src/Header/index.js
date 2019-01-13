import React, { Component } from 'react';
import $ from 'jquery';
import ImageOne from './Images/landing-one.png';
import ImageTwo from './Images/landing-two.png';
import ImageThree from './Images/landing-three.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <p className="test">Hi There</p>
        <SlideShow />
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
        .fadeOut(3000)
        .next()
        .fadeIn(3000)
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

export default Header;
