import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './background.css';

class HeaderTest extends React.Component {
  render() {
    var settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <div className="slider-div">
        <Slider {...settings}>
          <DivOne />
          <DivTwo />
          <DivThree />
        </Slider>
      </div>
    );
  }
}

const DivOne = () => <div className="div-one" />;

const DivTwo = () => <div className="div-two" />;

const DivThree = () => <div className="div-three" />;

export default HeaderTest;
