import React, { Component } from 'react';
import './headout-picks.css';

class TopPicks extends Component {
  render() {
    return (
      <div>
        <div className="headout-picks-wrapper">
          <h1>Headout Picks</h1>
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
        </div>
      </div>
    );
  }
}

export default TopPicks;
