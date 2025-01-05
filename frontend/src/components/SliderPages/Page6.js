import React from 'react';
import Card from '../Card';
import './Page.css';

const Page6 = () => {
  
  const cardData = [
    {
      imageSrc: 'https://www.shutterbug.com/images/styles/600_wide/public/leica-pic-03-%28600px%29_1_0.jpg',
      title: 'Leica I (First Edition, 1930)',
      description: 'A highly sought-after Leica I camera from 1930, one of the first commercially available 35mm cameras.',
      amount: 40000,
    },
    {
      imageSrc: 'https://juliantanase.com/wp-content/uploads/2024/02/rolleiflexduo.jpg',
      title: 'Rolleiflex 2.8F Twin Lens Reflex Camera',
      description: 'An iconic Rolleiflex 2.8F from the 1950s, known for its exceptional build quality and image sharpness.',
      amount: 60000,
    },
    {
      imageSrc: 'https://mikeeckman.com/wp-content/uploads/2016/10/Polaroid1.jpg',
      title: 'Polaroid Land Camera Model 95A',
      description: 'The original instant camera by Polaroid, Model 95A from the 1940s, a landmark in photography history.',
      amount: 40000,
    },
    {
      imageSrc: 'https://flints.blob.core.windows.net/stock/3517-0-medium.jpg?v=63738264500450',
      title: 'Hasselblad 500C Medium Format Camera',
      description: 'A vintage Hasselblad 500C, famous for its role in NASA’s space photography missions during the 1960s.',
      amount: 90000,
    },
    {
      imageSrc: 'https://amateurphotographer.com/wp-content/uploads/sites/7/2013/03/AP_001.web_.jpg',
      title: 'Nikon F (First Edition, 1959)',
      description: 'A first edition Nikon F camera from 1959, revolutionary for its interchangeable lenses and accessories.',
      amount: 75000, 
    },
    {
      imageSrc: 'https://www.brownie-camera.com/22.jpg',
      title: 'Kodak Brownie Flash II',
      description: 'A classic Kodak Brownie Flash II, one of the most popular cameras from the mid-20th century.',
      amount: 30000,
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

export default Page6;