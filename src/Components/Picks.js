import React, { Component } from 'react';
import Slider from 'react-slick';
import { Left } from './Arrows.js';
import { Right } from './Arrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './headout-picks.css';

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

export class ExperienceCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    const {
      discount,
      cashback,
      currency,
      lastPrice,
      ratings,
      stars,
      city,
      about
    } = this.props;

    return (
      <div className="exp-card">
        <div
          className="exp-card-img"
          style={{
            backgroundImage: url
          }}
        >
          {cashback ? (
            <div className="cashback">
              <p>{`${this.props.cashback}% cashback`}</p>
            </div>
          ) : null}
          <div className="exp-heart">
            <i className="far fa-heart" />
          </div>
        </div>
        <div className="exp-content-wrap">
          <div className="exp-info-wrap">
            {city ? (
              <React.Fragment>
                <p id="exp-city">{city}</p>
                <p id="exp-description">{this.props.description}</p>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p id="exp-about">{about}</p>
                <p id="exp-description">{this.props.description}</p>
              </React.Fragment>
            )}
          </div>
          <div>
            <div className="price-section">
              <div className="div">
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
                <div className="ratings-section">
                  {stars ? (
                    <div className="stars">
                      <p id="stars-p">
                        {parseFloat(Math.round(stars * 100) / 100).toFixed(1)}
                        <span id="star"> &#9733;</span>
                      </p>
                    </div>
                  ) : (
                    <div
                      style={{
                        width: '25px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'linear-gradient(340deg, #ffbb58, #f5c684)',
                        paddingTop: '3px'
                      }}
                    >
                      <p id="stars-p">
                        <span> &#9733;</span>
                      </p>
                    </div>
                  )}
                  {ratings ? (
                    ratings === 1 ? (
                      <p id="ratings">{`(${this.props.ratings} Rating)`}</p>
                    ) : (
                      <p id="ratings">{`(${this.props.ratings} Ratings)`}</p>
                    )
                  ) : (
                    <p id="ratings">Newly Arrived</p>
                  )}
                </div>
              </div>
              <div className="price">
                <p>from</p>
                {lastPrice && this.props.city === 'DUBAI' ? (
                  <p id="last-price">{`${this.props.currency} ${
                    this.props.lastPrice
                  }`}</p>
                ) : null}
                {lastPrice && this.props.city !== 'DUBAI' ? (
                  <p id="last-price">{`${this.props.currency}${
                    this.props.lastPrice
                  }`}</p>
                ) : null}
                {currency === 'AED' ? (
                  <p id="price">{`${this.props.currency} ${
                    this.props.price
                  }`}</p>
                ) : (
                  <p id="price">{`${this.props.currency}${
                    this.props.price
                  }`}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopPicks;
