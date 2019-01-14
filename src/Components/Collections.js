import React, { Component } from 'react';
import './Collections.css';

class Collection extends Component {
  render() {
    return (
      <div>
        <div className="collections-wrapper">
          <h1>Our Collections</h1>
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
        <div className="collections-card-wrapper" />
      </div>
    );
  }
}

export default Collection;
