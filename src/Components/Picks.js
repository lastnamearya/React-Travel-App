import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './headout-picks.css';
import LeftArrow from './Images/left-arrow.svg';
import RightArrow from './Images/right-arrow.svg';

class TopPicks extends Component {
  render() {
    return (
      <div>
        <div className="headout-picks-wrapper">
          <div className="headout-picks-nav">
            <div>
              <h1>Headout Picks</h1>
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
            <PickedSlider />
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
              discount
            }) => (
              <ExperienceCard
                key={id}
                city={city}
                url={url}
                description={description}
                currency={currency}
                price={currentPrice}
                ratings={ratings}
                stars={stars}
                discount={discount}
              />
            )
          )}
      </Slider>
    );
  }
}

class ExperienceCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    const discount = this.props.discount;
    return (
      <div className="exp-card">
        <div
          className="exp-card-img"
          style={{
            backgroundImage: url
          }}
        />
        <div className="exp-content-wrap">
          <div className="exp-info-wrap">
            <p id="exp-city">{this.props.city}</p>
            <p id="exp-description">{this.props.description}</p>
          </div>
          <div>
            {discount ? (
              <div className="discount">
                <p>
                  <span>
                    <i className="fas fa-gift" />
                  </span>
                  {`upto ${this.props.discount}% off`}
                </p>
              </div>
            ) : (
              <div className="discount" />
            )}
            <div className="price-section">
              <div className="ratings-section">
                <div className="stars">
                  <p id="stars-p">
                    {this.props.stars}
                    <span id="star"> &#9733;</span>
                  </p>
                </div>
                <p id="ratings">{`(${this.props.ratings} Ratings)`}</p>
              </div>
              <div className="price">
                <p>from</p>
                <p id="price">{`${this.props.currency} ${this.props.price}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Left = props => (
  <div className="city-arrow">
    <img
      src={LeftArrow}
      onClick={props.onClick}
      className="slick-prev"
      alt="Left-arrow"
    />
  </div>
);

const Right = props => (
  <div className="city-arrow">
    <img
      src={RightArrow}
      onClick={props.onClick}
      className="slick-next"
      alt="Right-arrow"
    />
  </div>
);

const pickedData = [
  {
    id: 1,
    currentPrice: 29,
    currency: '$',
    stars: 4.6,
    ratings: 681,
    city: 'NEW YORK',
    description: 'The Phantom of the Opera',
    url:
      'https://cdn-imgix.headout.com/tour/652/TOUR-IMAGE/cd0fa708-27c2-4145-9fcf-14e84d910456-517-new-york-phantom-of-the-opera-00.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 2,
    currentPrice: 57.5,
    currency: '$',
    stars: 4.6,
    ratings: 564,
    city: 'NEW YORK',
    description: 'Aladdin',
    url:
      'https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 3,
    currentPrice: 141,
    currency: 'AED',
    discount: 16,
    stars: 4.6,
    ratings: 2588,
    city: 'DUBAI',
    description: 'Burj Khalifa: At the Top (Level 124 & 125)',
    url:
      'https://cdn-imgix.headout.com/tour/2636/TOUR-IMAGE/84609881-4697-4b73-bb46-9998b2fd7aa2-1866-dubai-burj-khalifa-at-the-top-01-4-.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 4,
    currentPrice: 196,
    currency: 'AED',
    discount: 8,
    stars: 4.6,
    ratings: 1240,
    city: 'DUBAI',
    description: 'Dubai Acquarium & Underwater Zoo + Burj Khalifa Combo',
    url:
      'https://cdn-imgix.headout.com/tour/3832/TOUR-IMAGE/4306765f-f03f-47a0-a5c5-241ae6cd49f6-2545-dubai-aquarium-underwater-zoo-burj-khalifa-combo-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 5,
    currentPrice: 20,
    currency: '€',
    stars: 4.6,
    ratings: 437,
    city: 'PARIS',
    description:
      'Palace of Versailles All Access Passport Entry with Audioguide',
    url:
      'https://cdn-imgix.headout.com/tour/13905/TOUR-IMAGE/b23dc05c-1b19-4eb4-a205-fb9f0f2e29ab-7654-paris-Palace-of-Versailles-All-Access-Passport-Entry-with-Audioguide-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 6,
    currentPrice: 31,
    currency: '€',
    discount: 31,
    stars: 4.6,
    ratings: 474,
    city: 'PARIS',
    description: 'Skip The Line: Eiffel Tower Tickets with Host',
    url:
      'https://cdn-imgix.headout.com/tour/8092/TOUR-IMAGE/d9ee5fc2-5c9e-4981-8f4a-d16dc69769fd-P1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  }
];

export default TopPicks;
