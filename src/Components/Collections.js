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
        <div className="cards-wrapper">
          {CollectionsData &&
            CollectionsData.map(({ url, id, description }) => (
              <CollectionCard key={id} url={url} description={description} />
            ))}
        </div>
      </div>
    );
  }
}

class CollectionCard extends Component {
  render() {
    const url = `url(${this.props.url})`;
    return (
      <div class="collection-card-wrapper">
        <div class="card-parent">
          <div
            class="card-child"
            style={{
              backgroundImage: url
            }}
          >
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

const CollectionsData = [
  {
    id: 1,
    description: 'Abu Dhabi City Tours',
    url:
      'https://cdn-imgix.headout.com/category/152/abu-dhabi/image/daytour.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 2,
    description: 'Amsterdam Attractions',
    url:
      'https://cdn-imgix.headout.com/category/177/amsterdam/image/Amsterdam-Attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 3,
    description: 'Burj Khalifa',
    url:
      'https://cdn-imgix.headout.com/category/158/dubai/image/Dubai-Khalifa.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 4,
    description: 'Museums & Art Galleries',
    url:
      'https://cdn-imgix.headout.com/category/510/image/a2c6da57-3994-4910-97ad-abe2b9b31a65-uffizi-gallery-hallway.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 5,
    description: 'Alhambra',
    url:
      'https://cdn-imgix.headout.com/category/1449/image/f1b8a5ab-ffa6-47a4-a50e-e96bd92b64a5-willian-justen-de-vasconcellos-499722-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 6,
    description: 'Hong Kong Attractions',
    url:
      'https://cdn-imgix.headout.com/category/348/image/7a5e9926-9f14-45aa-b915-23c5bc9e1a17-hong-kong-attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 7,
    description: 'Entrainment Shows',
    url:
      'https://cdn-imgix.headout.com/category/49/image/9bf7c5aa-9012-4687-9ada-ecf7ba26048a-49-las-vegas-aerial-01.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 8,
    description: 'London Attractions',
    url:
      'https://cdn-imgix.headout.com/category/168/london/image/london-attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 9,
    description: 'Madrid Attractions',
    url:
      'https://cdn-imgix.headout.com/category/201/madrid/image/Madrid-Attractions.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 10,
    description: 'Last Supper',
    url:
      'https://cdn-imgix.headout.com/category/1178/image/61c6d18d-36c0-4537-863f-efc8a0a1b24c-the-last-supper.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 11,
    description: 'Neuschwanstein',
    url:
      'https://cdn-imgix.headout.com/category/1520/image/206de694-146f-4bc9-8fa1-d77074da8b7e-nikita-semerenko-776957-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 12,
    description: 'Pompeii',
    url:
      'https://cdn-imgix.headout.com/category/1223/image/3f77a082-970d-43df-bc5d-7e6e301925c6-pompeii.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 13,
    description: 'Broadway Show Tickets',
    url:
      'https://cdn-imgix.headout.com/category/24/image/66000036-0523-4859-87b7-83d628b8843c-BroadwayShowTickets.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 14,
    description: 'Weekend in Prague',
    url:
      'https://cdn-imgix.headout.com/category/1219/image/a49bbc22-258b-48c0-93fe-c7fdf9a8c65a-city.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 15,
    description: 'Vatican',
    url:
      'https://cdn-imgix.headout.com/category/189/image/e16239ea-0531-4a95-9c18-ced64eb08d54-nicolas-hoizey-408661-unsplash.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  },
  {
    id: 16,
    description: 'Alcatraz',
    url:
      'https://cdn-imgix.headout.com/category/144/san-francisco/image/SF-Alcatraz.jpg?auto=compress&fm=webp&w=480&h=480&crop=faces&fit=min'
  }
];

export default Collection;
