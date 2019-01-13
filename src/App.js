import React, { Component } from 'react';
import Header from './Components/Header';
import Download from './Components/Download';
import Media from './Components/Media';
import Footer from './Components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Download />
        <Media />
        <Footer />
      </div>
    );
  }
}

{
  /* <div className="heart-parent">
  <p>Made with</p>
  <div className="heart" />
  <p>by lastnamearya</p>
</div> */
}

export default App;
