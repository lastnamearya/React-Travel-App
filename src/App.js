import React, { Component } from 'react';
import Header from './Components/Header';
import Media from './Components/Media';
import Footer from './Components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Media />
        <Footer />
      </div>
    );
  }
}

export default App;
