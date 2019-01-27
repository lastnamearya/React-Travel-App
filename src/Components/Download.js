import React from 'react';
import './Styles/download.css';
import Iphoneimg from './Images/iphone.png';
import Androidimg from './Images/android.png';
import Playstoreimg from './Images/google-store.png';
import Appstoreimg from './Images/apple-store.png';

const Download = () => (
  <div className="download-wrap">
    <div className="download-wrapper">
      <div className="iphone">
        <img src={Iphoneimg} alt="Iphone :P" />
      </div>
      <div className="download-section">
        <h2>Headout on the go</h2>
        <hr
          style={{
            backgroundColor: '#ffbb58',
            width: '75px',
            height: '2px',
            border: 'none',
            marginTop: '0px',
            marginBottom: '0px'
          }}
        />
        <div>
          <p id="downloads-info">
            Download our mobile app for easier & faster checkout. <br />
            We can send you the download link to get started right away!
          </p>
        </div>
        <div className="download-links">
          <a
            href="https://itunes.apple.com/us/app/tourlandish/id899327000?ls=1&mt=8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Appstoreimg} alt="Apple Store" className="store" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.tourlandish.chronos&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Playstoreimg} alt="Google Play Store" className="store" />
          </a>
        </div>
      </div>
      <div className="android">
        <img src={Androidimg} alt="Android :D" />
      </div>
    </div>
  </div>
);

export default Download;
