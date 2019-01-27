import React from 'react';
import './Styles/footer.css';
import HeadoutLogo from './Images/headout.png';
import Googlelogo from './Images/gplus-connect.png';
import Twitterlogo from './Images/twitter-connect.png';
import Facebooklogo from './Images/fb-connect.png';
import Pinterestlogo from './Images/pinterest-connect.png';
import Instagramlogo from './Images/instagram-connect.png';

const Footer = () => (
  <div className="footer-wrap">
    <div className="footer-wrapper">
      <div className="column-one">
        <img id="footer" src={HeadoutLogo} alt="Headout" />
        <p>Headout is building the future of how we experience our cities.</p>
        <p
          style={{
            color: '#2980b9',
            fontSize: '14px'
          }}
        >
          Made with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          by lastnamearya
        </p>
        <p>&copy; Headout Inc.</p>
      </div>
      <div className="column-two">
        <h3>Cities</h3>
        <ul>
          <li>New York</li>
          <li>Las Vegas</li>
          <li>Rome</li>
          <li>Paris</li>
          <li>London</li>
          <li>Dubai</li>
          <li>Barcelona</li>
          <li>+8 more</li>
        </ul>
      </div>
      <div className="column-three">
        <h3>About us</h3>
        <ul>
          <li>About Headout</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Privacy Policy</li>
          <li>Terms of Usage</li>
        </ul>
      </div>
      <div className="column-four">
        <h3>Contact</h3>
        <p>Feel free to get in touch via email:</p>
        <p style={{ color: '#4fc3f7', cursor: 'pointer' }}>
          arya.jigyasu6815@gmail.com
        </p>
        <div className="social-media-contact">
          <img
            src={Googlelogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Twitterlogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Facebooklogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Pinterestlogo}
            className="social-connect"
            alt="Connect with us"
          />
          <img
            src={Instagramlogo}
            className="social-connect"
            alt="Connect with us"
            style={{ width: '25px', paddingBottom: '2px' }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
