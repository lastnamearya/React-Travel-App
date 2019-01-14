import React, { Component } from 'react';
import Select from 'react-select';
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
                <div className="select-city">
                  <Searchbar style={smallSearchbar} />
                </div>
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
        <div className="search-bar-div">
          <div className="select-city-large">
            <i class="fas fa-map-marker" />
            <Searchbar style={customStyles} />
          </div>
          <div className="select-experience-large" />
          <button id="go">Let's Go</button>
        </div>
      </div>
    );
  }
}

const options = [
  { value: 'New York', label: 'New York' },
  { value: 'Las Vegas', label: 'Las Vegas' },
  { value: 'Rome', label: 'Rome' },
  { value: 'Paris', label: 'Paris' },
  { value: 'London', label: 'London' },
  { value: 'Dubai', label: 'Dubai' },
  { value: 'Barcelona', label: 'Barcelona' },
  { value: 'Madrid', label: 'Madrid' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'Venice', label: 'Venice' },
  { value: 'Milan', label: 'Milan' },
  { value: 'Naples', label: 'Naples' },
  { value: 'Budapest', label: 'Budapest' },
  { value: 'Edinburg', label: 'Edinburg' },
  { value: 'Florence', label: 'Florence' }
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    width: 120
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    fontSize: '14px',
    marginTop: '10px',
    paddingLeft: '5px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

const smallSearchbar = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    paddingLeft: '20px',
    width: 150
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    fontSize: '11px',
    marginLeft: '15px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

class Searchbar extends Component {
  state = {
    selectedOption: null
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <Select
        styles={this.props.style}
        placeholder="Select City"
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
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

export default Header;
