import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Background from './Background';
import Logo from '../Images/headout.png';
import MobileApp from '../Images/mobile-app.gif';
import './Header.css';

class Header extends Component {
  state = {
    experience: ''
  };
  changeExperience = event => this.setState({ experience: event.target.value });
  render() {
    const { backgroundImagesData } = this.props;
    return (
      <React.Fragment>
        <HeaderNav
          changeExperience={this.changeExperience}
          experience={this.state.experience}
        />
        <Background backgroundImagesData={backgroundImagesData} />
        <div className="search-bar-div">
          <div className="select-city-large">
            <i className="fas fa-map-marker" />
            <Searchbar style={customStyles} />
          </div>
          <div className="select-experience-large">
            <input
              type="text"
              placeholder="Search for experiences"
              onChange={this.changeExperience}
              value={this.state.experience}
            />
            <i className="fas fa-search" />
          </div>
          <button id="go">Let's Go</button>
        </div>
      </React.Fragment>
    );
  }
}

export class HeaderNav extends Component {
  render() {
    return (
      <div className="header-wrap">
        <div className="header-wrapper navbar-fixed-top">
          <div className="header-left">
            <div className="nav">
              <div className="first-line">
                <Link to={{ pathname: `/` }}>
                  <div>
                    <img id="logo" src={Logo} alt="Headout" />
                  </div>
                </Link>
                <div className="select-city">
                  <Searchbar style={smallSearchbar} />
                </div>
                <div className="select-experience">
                  <input
                    type="text"
                    placeholder="Search for experiences"
                    onChange={this.changeExperience}
                    value={this.props.experience}
                  />
                  <i className="fas fa-search" />
                </div>
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
                      <i className="fas fa-angle-down" />
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
                      <i className="fas fa-angle-down" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="header-right">
              <div className="sign-in">
                <i className="fas fa-user-circle sign-in-user" />
                <p style={{ color: '#ec1943', marginLeft: '10px' }}>
                  Sign in
                  <span className="arrow-down">
                    {' '}
                    <i className="fas fa-angle-down" />
                  </span>
                </p>
              </div>
              <Link
                to={{ pathname: `/app` }}
                style={{
                  textDecoration: 'none'
                }}
              >
                <div className="download-app">
                  <img src={MobileApp} id="mobile-app" alt="Download our App" />
                  <p style={{ color: '#24a1b2' }}>Download App</p>
                </div>
              </Link>
            </div>
          </div>
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

export default Header;
