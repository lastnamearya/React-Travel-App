import React from 'react';
import './Styles/media.css';
import MediaOne from './Images/media-one.png';
import MediaTwo from './Images/media-two.png';
import MediaThree from './Images/media-three.png';
import MediaFour from './Images/media-four.png';
import Rating from './Images/star-ratings.png';

const Media = () => (
  <div className="media-wrapper">
    <div className="media-section">
      <h2>We've served 1 million+ guests and we are here for you</h2>
      <hr
        style={{
          backgroundColor: '#ffbb58',
          width: '90px',
          height: '2px',
          border: 'none',
          marginTop: '15px'
        }}
      />
      <div className="in-news">
        <div className="news-one news-box">
          <img src={MediaOne} alt="In Media" />
          <h3>1 million+ Customers</h3>
          <p>Happy customers across 10,000+ experiences</p>
        </div>
        <hr className="divide" />
        <div className="news-two news-box">
          <img src={MediaTwo} alt="In Media" />
          <div className="ratings">
            <h3>4.4/5</h3>
            <div>
              <img src={Rating} alt="4.4 out of 5" />
            </div>
          </div>
          <p>50,000+ verified reviews with 90% excellent score</p>
        </div>
        <hr className="divide" />
        <div className="news-three news-box">
          <img src={MediaThree} alt="In Media" />
          <h3>In the media</h3>
          <p>Recommended by Apple, CNN, Techcrunch and others.</p>
        </div>
        <hr className="divide" />
        <div className="news-four news-box">
          <img src={MediaFour} alt="In Media" />
          <h3>27 x 7 help Center</h3>
          <p>Have a question? Live chat with local experts anywhere, anytime</p>
        </div>
      </div>
    </div>
  </div>
);

export default Media;
