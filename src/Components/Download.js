import React from 'react';
import './download.css';
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
            marginTop: '0px'
          }}
        />
        <p>
          Download our mobile app for easier & faster checkout. We can send you
          the download link to get started right away!
        </p>
        <div>
          <img src={Appstoreimg} alt="Apple Store" />
          <img src={Playstoreimg} alt="Google Play Store" />
        </div>
      </div>
      <div className="android">
        <img src={Androidimg} alt="Android :D" />
      </div>
    </div>
  </div>
);

export default Download;
