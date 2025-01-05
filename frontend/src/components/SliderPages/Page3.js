import React from 'react';
import Card from '../Card';
import './Page.css';

const Page3 = () => {
  
  const cardData = [
    {
      imageSrc: 'https://m.media-amazon.com/images/I/41nCntGIurL._UF1000,1000_QL80_.jpg',
      title: 'The Beatles - White Album (First Press)',
      description: 'A rare first pressing of The Beatles iconic White Album from 1968. Pristine condition.',
      amount: 45000
    },
    {
      imageSrc: 'https://i.ytimg.com/vi/TNfyECSBi9E/maxresdefault.jpg',
      title: 'Led Zeppelin - IV (Original UK Press)',
      description: 'An original 1971 UK pressing of Led Zeppelin\'s legendary IV album. A collector\'s dream.',
      amount: 40000
    },
    {
      imageSrc: 'https://i.ytimg.com/vi/5NrG-c3SCZU/sddefault.jpg',
      title: 'Pink Floyd - Dark Side of the Moon (Japanese Press)',
      description: 'The highly sought-after Japanese pressing of Pink Floyd\'s masterpiece from 1973, with OBI strip.',
      amount: 42000
    },
    {
      imageSrc: 'https://goauctionomega.blob.core.windows.net/stock/20888-1-medium.jpg?v=63788313091080',
      title: 'Nirvana - Nevermind (First Press)',
      description: 'The first pressing of Nirvana\'s groundbreaking 1991 album, Nevermind. A rare find for grunge lovers.',
      amount: 38000
    },
    {
      imageSrc: 'https://i.redd.it/aig6tealj7s31.jpg',
      title: 'Pink Floyd - The Wall (First US Press)',
      description: 'A first US pressing of Pink Floyd\'s legendary double album The Wall from 1979. Excellent condition.',
      amount: 47000
    },
    {
      imageSrc: 'https://i.redd.it/0vl4qxug9qmz.jpg',
      title: 'The Beatles - Abbey Road (Misaligned Apple)',
      description: 'An original 1969 pressing with the rare misaligned apple logo on the back. Highly collectible.',
      amount: 65000
    },
  ];
  

  return (
    <div className="container">
      {cardData.map((card, index) => (
        <div key={index} className="card-wrapper">
          <Card 
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            amount={card.amount}
          />
        </div>
      ))}
    </div>
  );
};

export default Page3;