import React, { Component } from 'react';

class ExperienceCard extends Component {
  state = {
    listed: false
  };

  addtoWishlist = () =>
    this.setState(prevState => ({ listed: !prevState.listed }));

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
      about,
      showMore,
      highlight
    } = this.props;

    let style;

    if (this.state.listed) {
      style = {
        color: '#f43361',
        fontSize: '20px',
        position: 'absolute',
        right: '10px',
        top: '15px',
        fontWeight: '700',
        transition: 'transform 0.3s ease-in-out'
      };
    } else {
      style = {
        color: 'white',
        fontSize: '20px',
        position: 'absolute',
        right: '10px',
        top: '15px',
        fontWeight: '400',
        transition: 'transform 0.3s ease-in-out'
      };
    }

    return (
      <div className="exp-card">
        {showMore ? (
          <div className="show-more">
            <p>View All</p>
          </div>
        ) : (
          <React.Fragment>
            <div
              className="exp-card-img"
              style={{
                backgroundImage: url
              }}
            >
              {cashback ? (
                <div className="cashback">
                  <p>{`${this.props.cashback}% CASHBACK`}</p>
                </div>
              ) : null}
              {highlight ? (
                <div className="cashback">
                  <p>{highlight}</p>
                </div>
              ) : null}
              <div className="exp-heart">
                <i
                  className="far fa-heart"
                  role="button"
                  onClick={this.addtoWishlist}
                  style={style}
                />
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
                            {parseFloat(Math.round(stars * 100) / 100).toFixed(
                              1
                            )}
                            <span id="star"> &#9733;</span>
                          </p>
                        </div>
                      ) : (
                        <div
                          style={{
                            width: '25px',
                            height: '20px',
                            borderRadius: '50%',
                            background:
                              'linear-gradient(340deg, #ffbb58, #f5c684)',
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
                          <p id="ratings">{`(${
                            this.props.ratings
                          } Ratings)`}</p>
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
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default ExperienceCard;
