import React, { Component } from 'react';
import Header from './Components/Header';
import TopCities from './Components/TopCities';
import HeadoutPicks from './Components/Picks';
import Collections from './Components/Collections';
import Download from './Components/Download';
import Media from './Components/Media';
import Footer from './Components/footer';
import logo from './Components/Images/headout.png';
import './main-home.css';

class MainHome extends Component {
  state = { width: 0, height: 0 };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions = () =>
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  render() {
    const { width } = this.state;
    // const mobileTablet = width <= 1100;
    const mobileTablet = undefined;

    if (mobileTablet) {
      return (
        <div className="mobile-tablet">
          <img src={logo} alt="Headout" />
          <p>
            Currently, we're not supporting Mobile & Tablets{' '}
            <span role="img" aria-label="Warn">
              🙏
            </span>
          </p>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header backgroundImagesData={backgroundImagesData} />
          <p id="external">
            <span role="img" aria-label="Warn">
              🙏
            </span>{' '}
            No any External Link is added as per now to anywhere, Please bear{' '}
            <span role="img" aria-label="Warn">
              🙏
            </span>
          </p>
          <TopCities />
          <HeadoutPicks />
          <Collections />
          <Download />
          <Media />
          <Footer />
        </div>
      );
    }
  }
}

const backgroundImagesData = [
  {
    id: 1,
    url:
      'https://cdn-imgix-open.headout.com/desktop-flaps/cashback-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
  {
    id: 2,
    url:
      'https://cdn-imgix-open.headout.com/desktop-flaps/about-01-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
  {
    id: 3,
    url:
      'https://cdn-imgix-open.headout.com/flaps/non-city-specific/desktop/experience-desktop.png?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  }
];

export default MainHome;
