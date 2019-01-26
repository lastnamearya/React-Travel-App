import React, { Component } from 'react';
import Header from './Components/Header/index';

class NewYork extends Component {
  render() {
    return (
      <div>
        <Header backgroundImagesData={backgroundImagesData} />
      </div>
    );
  }
}

const backgroundImagesData = [
  {
    id: 1,
    url:
      'https://cdn-imgix-open.headout.com/flaps/city-specific/new-york/desktop/Broadway-week-desktop-4.png?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
  {
    id: 2,
    url:
      'https://cdn-imgix-open.headout.com/desktop-flaps/new-york.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
  {
    id: 3,
    url:
      'https://cdn-imgix-open.headout.com/desktop-flaps/cashback-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
  {
    id: 4,
    url:
      'https://cdn-imgix-open.headout.com/desktop-flaps/ny-508-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
  {
    id: 5,
    url:
      'https://cdn-imgix-open.headout.com/desktop-flaps/ny-attractions-01.jpg?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  },
  {
    id: 6,
    url:
      'https://cdn-imgix-open.headout.com/flaps/non-city-specific/desktop/experience-desktop.png?auto=compress&fm=webp&h=501&crop=faces&fit=min'
  }
];

export default NewYork;
