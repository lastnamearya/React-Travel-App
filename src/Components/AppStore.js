import React from 'react';
import { HeaderNav } from './Header';
import Download from './Download';
import TopCities from './TopCities';
import Footer from './footer';

const AppStore = () => (
  <div
    style={{
      textAlign: 'center'
    }}
  >
    <HeaderNav />
    <div style={{ paddingTop: '110px' }}>
      <Download />
    </div>
    <TopCities />
    <Footer />
  </div>
);

export default AppStore;
