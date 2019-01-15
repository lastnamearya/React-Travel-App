import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageOne from '../Images/landing-one.png';
import ImageTwo from '../Images/landing-two.png';
import ImageThree from '../Images/landing-three.png';
class HeaderTest extends React.Component {
  render() {
    var settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };
    return (
      <div
        style={{
          marginTop: '100px'
        }}
      >
        <Slider {...settings}>
          <img
            style={{
              width: '1000px',
              height: '500px'
            }}
            src={ImageOne}
            alt="xxx"
          />
          <img
            style={{
              width: '1000px',
              height: '500px'
            }}
            src={ImageTwo}
            alt="xxx"
          />
          <img
            style={{
              width: '1000px',
              height: '500px'
            }}
            src={ImageThree}
            alt="xxx"
          />
        </Slider>
      </div>
    );
  }
}

export default HeaderTest;
