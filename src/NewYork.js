import React, { Component } from 'react';
import Header from './Components/Header/index';
import TopPicks from './Components/Picks';
import Collections from './Components/Collections';
import Download from './Components/Download';
import Media from './Components/Media';
import Footer from './Components/footer';

class NewYork extends Component {
  render() {
    return (
      <div className="App">
        <Header backgroundImagesData={backgroundImagesData} />
        <TopPicks
          headline={'Top Experiences in New York'}
          pickedData={NewYorkData}
        />
        <Collections collectionsData={collectionsData} />
        <Download />
        <Media />
        <Footer />
      </div>
    );
  }
}

// New York Caraousel Images

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

// New York Experiences Data

const NewYorkData = [
  {
    id: 1,
    currentPrice: 62.5,
    currency: '$',
    stars: 4.6,
    ratings: 564,
    cashback: 10,
    about: 'BROADWAY MUSICALS',
    description: 'Aladdin',
    url:
      'https://cdn-imgix.headout.com/tour/638/TOUR-IMAGE/d8da7ef3-6be5-4ab9-a88e-66a1cf8b5126-2.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 2,
    currentPrice: 37,
    lastPrice: 39.2,
    currency: '$',
    stars: 4.9,
    ratings: 533,
    cashback: 10,
    discount: 5,
    about: 'TOP OF THE ROCK',
    description: 'Top of the Rock Observation Deck: Flexible Date Tickets',
    url:
      'https://cdn-imgix.headout.com/tour/751/TOUR-IMAGE/5a1a9e72-a128-4912-90d5-b2c78e83ee42-ny-attractions-top-of-the-rock-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 3,
    currentPrice: 148.8,
    lastPrice: 186,
    currency: '$',
    stars: 4.9,
    ratings: 531,
    cashback: null,
    discount: 20,
    about: 'PHOTOSHOOTS AND TOURS',
    description: 'Best of New York Tours',
    url:
      'https://cdn-imgix.headout.com/tour/17185/TOUR-IMAGE/40bd85b6-fd85-4957-8012-94abad360c5f-9468-new-york-best-of-ny-tours-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 4,
    currentPrice: 28,
    lastPrice: 35,
    currency: '$',
    stars: 4.8,
    ratings: 270,
    cashback: null,
    discount: 20,
    about: 'ARCHITECTURE',
    description: 'NYC Street Art Tour',
    url:
      'https://cdn-imgix.headout.com/tour/17177/TOUR-IMAGE/90d6573a-e021-4f15-b2c4-2dc4d674cb8a-9460-new-york-nyc-street-art-tour-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 5,
    currentPrice: 68,
    lastPrice: 85,
    currency: '$',
    stars: 4.9,
    ratings: 276,
    cashback: null,
    discount: 20,
    about: 'ARCHITECTURE',
    description: 'New York Hamilton Tour: Young, Scrappy, And Hungry',
    url:
      'https://cdn-imgix.headout.com/tour/17183/TOUR-IMAGE/04586dcc-7838-403d-82f2-5a09d02db4bb-9466-new-york-new-york-hamilton-tour--young?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 6,
    currentPrice: 49.14,
    lastPrice: 56,
    currency: '$',
    stars: 4.9,
    ratings: 18,
    cashback: null,
    discount: 12,
    about: 'CITY WALKS',
    description: 'Sex and the City Tour',
    url:
      'https://cdn-imgix.headout.com/tour/954/image/3.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 7,
    currentPrice: 57,
    lastPrice: null,
    currency: '$',
    stars: 5.0,
    ratings: 1,
    cashback: null,
    about: 'NEW YORK CITY WALKING TOURS',
    description: 'Chelsea Market Food and Culture Walking Tour',
    url:
      'https://cdn-imgix.headout.com/tour/2906/TOUR-IMAGE/4414a92f-1570-4b10-b05d-deaa5737d7f8-2005-ChelseaFoodTour-1-2-.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 8,
    currentPrice: 288,
    lastPrice: 360,
    currency: '$',
    stars: 4.7,
    ratings: 268,
    cashback: null,
    about: 'ARCHITECTURE',
    discount: 20,
    description: 'Architecture of New York Tour',
    url:
      'https://cdn-imgix.headout.com/tour/6755/TOUR-IMAGE/132dfbb2-b633-4f8d-a874-d55431e70f6f-4277-new-york-architecture-of-new-york-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 9,
    currentPrice: 68,
    lastPrice: 85,
    currency: '$',
    stars: 5.0,
    ratings: 279,
    cashback: null,
    discount: 20,
    about: 'CRUISES',
    description: 'New York City Sightseeing Boat Tour',
    url:
      'https://cdn-imgix.headout.com/tour/17191/TOUR-IMAGE/d30695cf-8ed4-4b51-be01-13066b0827ef-9474-new-york-new-york-city-sightseeing-boat-tour-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 10,
    currentPrice: 33.75,
    lastPrice: 45,
    currency: '$',
    stars: 4.5,
    ratings: 330,
    cashback: null,
    discount: 25,
    about: 'CITY WALKS',
    description: 'Sunrise Yoga Walk',
    url:
      'https://cdn-imgix.headout.com/tour/17189/TOUR-IMAGE/a8ce2e14-2a95-44a4-b150-223be1f156bb-9472-new-york-sunrise-yoga-walk-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 11,
    currentPrice: 24,
    lastPrice: 30,
    currency: '$',
    stars: 4.8,
    ratings: 663,
    cashback: null,
    discount: 20,
    about: 'AFTER HOURS',
    description: 'NYFW Fashion Street Show',
    url:
      'https://cdn-imgix.headout.com/tour/17180/TOUR-IMAGE/4e9e7963-5e55-46a5-9a85-53532c20e747-9463-new-york-nyfw-fashion-street-show-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 12,
    currentPrice: 28,
    lastPrice: 35,
    currency: '$',
    stars: 4.7,
    ratings: 554,
    cashback: null,
    discount: 20,
    about: 'AFTER HOURS',
    description: `Open Bar Henny N' Paint`,
    url:
      'https://cdn-imgix.headout.com/tour/17181/TOUR-IMAGE/0f97d532-bd32-4c71-a219-ee477daf1a53-9464-new-york-open-bar-henny-and-paint-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 13,
    currentPrice: 40.5,
    lastPrice: 79,
    currency: '$',
    stars: null,
    ratings: null,
    cashback: null,
    discount: 49,
    about: 'BROADWAY SHOW TICKETS',
    description: `King Kong - Broadway Week Discount`,
    url:
      'https://cdn-imgix.headout.com/tour/18201/TOUR-IMAGE/a24bde23-2e32-49d4-bf14-b933fe60fe52-c817b2f3-194d-4fde-9ad8-fccbaf50ed31-9339-new-york-king-kong-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 14,
    currentPrice: 29,
    lastPrice: null,
    currency: '$',
    stars: 4.6,
    ratings: 681,
    cashback: 10,
    about: 'BROADWAY MUSICALS',
    description: `The Phantom of the Opera`,
    url:
      'https://cdn-imgix.headout.com/tour/652/TOUR-IMAGE/cd0fa708-27c2-4145-9fcf-14e84d910456-517-new-york-phantom-of-the-opera-00.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 15,
    currentPrice: 69,
    lastPrice: 79,
    currency: '$',
    stars: 4.6,
    ratings: 274,
    cashback: 10,
    discount: 46,
    about: 'BROADWAY MUSICALS',
    description: `Anastasia`,
    url:
      'https://cdn-imgix.headout.com/tour/7573/TOUR-IMAGE/fa5af28b-c617-446d-a475-ced33c58c98d-4653-new-york-anastasia-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 16,
    currentPrice: 99,
    lastPrice: null,
    currency: '$',
    stars: 4.7,
    ratings: 347,
    cashback: 10,
    about: 'BROADWAY MUSICALS',
    description: `The Lion King`,
    url:
      'https://cdn-imgix.headout.com/tour/637/TOUR-IMAGE/0442ebf8-8ad3-4e1b-bb49-3b7dde81eb35-507-new-york-the-lion-king-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 17,
    currentPrice: 49.5,
    lastPrice: null,
    currency: '$',
    stars: 4.5,
    ratings: 557,
    cashback: 10,
    discount: 44,
    about: 'BROADWAY MUSICALS',
    description: `Chicago`,
    url:
      'https://cdn-imgix.headout.com/tour/654/TOUR-IMAGE/41c27ecf-f84a-47ff-9517-fe88303ac5e8-1.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 18,
    currentPrice: 49,
    lastPrice: 69,
    currency: '$',
    stars: 4.5,
    ratings: 445,
    cashback: 10,
    discount: 41,
    about: 'BROADWAY MUSICALS',
    description: `Beautiful: The Carole King Musical`,
    url:
      'https://cdn-imgix.headout.com/tour/956/TOUR-IMAGE/17818c73-4692-4e79-8b82-b44f646165f7-734-new-york-beautiful-the-carole-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 19,
    currentPrice: 55,
    lastPrice: 119,
    currency: '$',
    stars: 4.6,
    ratings: 444,
    cashback: 10,
    discount: 53,
    about: 'BROADWAY MUSICALS',
    description: `Kinky Boots`,
    url:
      'https://cdn-imgix.headout.com/tour/651/TOUR-IMAGE/0dce4644-0607-4de8-8a4e-fb8e64ac0cdc-9.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 20,
    currentPrice: 89,
    lastPrice: null,
    currency: '$',
    stars: 4.6,
    ratings: 561,
    cashback: 10,
    about: 'BROADWAY MUSICALS',
    description: `Wicked`,
    url:
      'https://cdn-imgix.headout.com/tour/647/TOUR-IMAGE/35c36ce6-af74-4fdb-a14f-a2f947f6c713-5.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 21,
    currentPrice: 59,
    lastPrice: 99,
    currency: '$',
    stars: 4.8,
    ratings: 55,
    cashback: null,
    discount: 40,
    about: 'BROADWAY MUSICALS',
    description: `Pretty Woman`,
    url:
      'https://cdn-imgix.headout.com/tour/16624/TOUR-IMAGE/ab386fd8-b118-423c-8c7a-c9e306235c5a-9213-new-york-pretty-woman-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 22,
    currentPrice: 51,
    lastPrice: 99.5,
    currency: '$',
    stars: 4.8,
    ratings: 17,
    cashback: 48,
    about: 'BROADWAY MUSICALS',
    description: `Frozen - Broadway Week Discount`,
    url:
      'https://cdn-imgix.headout.com/tour/17069/TOUR-IMAGE/2f568870-80a6-4be1-84c4-3b6efe8df5f1-214d0dcf-6b0a-4d8d-90f0-11d601678377-7909-new-york-frozen-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  },
  {
    id: 23,
    currentPrice: 69.5,
    lastPrice: 99.5,
    currency: '$',
    stars: 4.5,
    ratings: 129,
    cashback: 43,
    about: 'BROADWAY MUSICALS',
    description: `Mean Girls`,
    url:
      'https://cdn-imgix.headout.com/tour/14470/TOUR-IMAGE/acc17ba6-70f0-48da-8bea-3b744aa489b2-7911-new-york-mean-girls-01.jpg?auto=compress&fm=webp&w=510&h=315&crop=faces&fit=min'
  }
];

// New York Collections Data

// Collection Data

const collectionsData = [
  {
    id: 1,
    description: 'Broadway Show Tickets',
    url:
      'https://cdn-imgix.headout.com/category/24/image/66000036-0523-4859-87b7-83d628b8843c-BroadwayShowTickets.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 2,
    description: 'City Walks',
    url:
      'https://cdn-imgix.headout.com/category/29/image/379e4fd4-3c83-43a4-b4e7-8422b0356867-NYCCityWalks.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 3,
    description: 'Foods and Drinks',
    url:
      'https://cdn-imgix.headout.com/category/26/image/d405cabb-965f-4c15-8828-4276755636a2-NYCFoodandDrinks.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 4,
    description: 'NYC Tours',
    url:
      'https://cdn-imgix.headout.com/category/119/image/7be3f1f2-2002-4466-b6e0-890952bc408e-NYCTours.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 5,
    description: 'Entertainment',
    url:
      'https://cdn-imgix.headout.com/category/334/image/e7b12e66-aa7e-4cfc-ac43-262c6ff87f7a-334.jpeg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 6,
    description: 'New York City Passes',
    url:
      'https://cdn-imgix.headout.com/category/1303/image/ed686051-e9b8-493c-b0a5-dc27c79a726c-1303.jpeg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 7,
    description: 'NYC 101',
    url:
      'https://cdn-imgix.headout.com/category/20/image/50dd86bd-0af8-4fef-a334-94a699d3a67c-NYC101.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 8,
    description: 'Cruises',
    url:
      'https://cdn-imgix.headout.com/category/21/image/f083df8f-c083-4766-b496-bd67cb1199ad-NYCCruises.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  }
];

export default NewYork;
