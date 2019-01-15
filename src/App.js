import React, { Component } from 'react';
import Header from './Components/Header';
import TopCities from './Components/TopCities';
import HeadoutPicks from './Components/Picks';
import Collections from './Components/Collections';
import Download from './Components/Download';
import Media from './Components/Media';
import Footer from './Components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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

export default App;
