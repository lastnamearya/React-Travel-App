import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './top-cities.css';
import LeftArrow from './Images/left-arrow.svg';
import RightArrow from './Images/right-arrow.svg';

class TopCities extends Component {
  render() {
    return (
      <div>
        <div className="top-cities-wrapper">
          <h1>Top Cities on Headout</h1>
          <hr
            style={{
              backgroundColor: '#ffbb58',
              width: '75px',
              height: '2px',
              border: 'none',
              marginTop: '0px',
              marginLeft: '0px'
            }}
          />
          <div className="top-cities-carousel-wrap">
            <SimpleSlider />
          </div>
          <hr
            style={{
              height: '1px',
              color: '#e7e7e7',
              borderTop: 'none',
              borderLeft: 'none'
            }}
          />
        </div>
      </div>
    );
  }
}

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <Right />,
      prevArrow: <Left />
    };
    return (
      <Slider {...settings}>
        {topCitiesData &&
          topCitiesData.map(({ id, city, url, description }) => (
            <CityCard
              key={id}
              city={city}
              url={url}
              description={description}
            />
          ))}
      </Slider>
    );
  }
}

class CityCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    return (
      <div className="city-card-wrapper">
        <div className="city-card">
          <div
            className="city-card-img"
            style={{
              backgroundImage: url
            }}
          />
          <div className="city-details">
            <div id="triangle" />
            <p>{this.props.city}</p>
            <div id="city-hidden">
              <p>{this.props.description}</p>
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

const topCitiesData = [
  {
    id: 1,
    city: 'New York',
    description: 'Take a bite of the Big Apple',
    url:
      'https://cdn-imgix.headout.com/cities/new-york/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 2,
    city: 'Las Vegas',
    description: "An offer you can't refuse",
    url:
      'https://cdn-imgix.headout.com/cities/las-vegas/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 3,
    city: 'Rome',
    description: 'Roam the eternal city',
    url:
      'https://cdn-imgix.headout.com/cities/rome/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 4,
    city: 'Paris',
    description: "C'est La Vie",
    url:
      'https://cdn-imgix.headout.com/cities/paris/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 5,
    city: 'London',
    description: 'For everything hunky-dory',
    url:
      'https://cdn-imgix.headout.com/cities/london/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 6,
    city: 'Dubai',
    description: 'An Oasis like no other',
    url:
      'https://cdn-imgix.headout.com/cities/dubai/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 7,
    city: 'Barcelona',
    description: 'Hacer Peunte a Catalunya',
    url:
      'https://cdn-imgix.headout.com/cities/barcelona/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 8,
    city: 'Madrid',
    description: 'Discover the hear of Spain',
    url:
      'https://cdn-imgix.headout.com/cities/madrid/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 9,
    city: 'Singapore',
    description: 'The Lion City',
    url:
      'https://cdn-imgix.headout.com/cities/singapore/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 10,
    city: 'Venice',
    url:
      'https://cdn-imgix.headout.com/cities/venice/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 11,
    city: 'Milan',
    url:
      'https://cdn-imgix.headout.com/cities/milan/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 12,
    city: 'Naples',
    url:
      'https://cdn-imgix.headout.com/cities/naples/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 13,
    city: 'Budapest',
    url:
      'https://cdn-imgix.headout.com/cities/budapest/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 14,
    city: 'Edinburg',
    url:
      'https://cdn-imgix.headout.com/cities/edinburgh/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  },
  {
    id: 15,
    city: 'Florence',
    url:
      'https://cdn-imgix.headout.com/cities/florence/images/mobile/morning.jpg?auto=compress&fm=webp&w=412.5&h=486&crop=faces&fit=min'
  }
];

export default TopCities;
