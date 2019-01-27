import React, { Component } from 'react';
import Slider from 'react-slick';
import ExperienceCard from './ExperienceCard';
import { Left } from './Arrows.js';
import { Right } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Styles/headout-picks.css';

class TopPicks extends Component {
  render() {
    const { pickedData } = this.props;
    return (
      <div>
        <div className="headout-picks-wrapper">
          <div className="headout-picks-nav">
            <div>
              <h1>{this.props.headline}</h1>
            </div>
            <div className="view-all">
              <h3>View All</h3>
              <i className="fas fa-arrow-right" />
            </div>
          </div>
          <hr
            style={{
              backgroundColor: '#ffbb58',
              width: '75px',
              height: '2px',
              border: 'none',
              marginTop: '0px',
              marginLeft: '0px',
              marginBottom: '20px'
            }}
          />
          <div className="top-picked-carousel-wrap">
            <PickedSlider pickedData={pickedData} />
          </div>
        </div>
      </div>
    );
  }
}

class PickedSlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <Right />,
      prevArrow: <Left />
    };
    const { pickedData } = this.props;
    return (
      <Slider {...settings}>
        {pickedData &&
          pickedData.map(
            ({
              id,
              city,
              url,
              description,
              currency,
              currentPrice,
              ratings,
              stars,
              discount,
              cashback,
              lastPrice,
              about
            }) => (
              <ExperienceCard
                key={id}
                city={city}
                about={about}
                url={url}
                description={description}
                currency={currency}
                price={currentPrice}
                ratings={ratings}
                stars={stars}
                discount={discount}
                cashback={cashback}
                lastPrice={lastPrice}
              />
            )
          )}
      </Slider>
    );
  }
}

export default TopPicks;
