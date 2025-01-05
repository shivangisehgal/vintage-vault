import React from 'react';
import Card from '../Card';
import './Page.css';

const Page2 = () => {
  
  const cardData = [
    {
      imageSrc: 'https://i.pinimg.com/originals/a0/6f/9c/a06f9ce08ad265b7cb934dd70ae511fa.jpg',
      title: '1950 Magnavox Record Player Console',
      description: 'A classic 1950s Magnavox record player with a built-in speaker console, known for its vintage sound and solid wood craftsmanship.',
      amount: 55000, 
    },
    {
      imageSrc: 'https://chairish-prod.freetls.fastly.net/image/product/sized/d2d0ed9b-6815-4c4f-b016-4b5186f750fa/1960s-vintage-rca-victor-victrola-record-player-console-credenza-stereo-0441?aspect=fit&width=640&height=640',
      title: '1960s RCA Victor Record Player',
      description: 'This RCA Victor record player from the 1960s comes with its iconic sound system and timeless retro design.',
      amount: 48000, 
    },
    {
      imageSrc: 'https://i.ytimg.com/vi/AQPCYHgUDuU/maxresdefault.jpg',
      title: '1965 Zenith Portable Record Player',
      description: 'A portable record player from Zenith with an iconic 1965 design, perfect for on-the-go music lovers.',
      amount: 42000, 
    },
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK71N1vd9D0QldTm_WfxWgifdEAxvTwa0bZw&s',
      title: '1970s Pioneer PL-12D Record Player',
      description: 'A high-quality turntable from Pioneer, renowned for its rich audio performance and retro aesthetics.',
      amount: 60000, 
    },
    {
      imageSrc: 'https://grandview-mercantile.storage.googleapis.com/wp-content/uploads/2023/10/27153550/ZCLNG_105-4.jpg',
      title: '1955 Grundig Majestic Record Player',
      description: 'A vintage 1955 Grundig Majestic record player with built-in radio and authentic wooden design.',
      amount: 50000, 
    },
    {
      imageSrc: 'https://cdn.prod.website-files.com/5d13c4d50733066f9ede79c2/5d1a98027b517fd9e5d898c1_Garrard%20301%20Classic.jpg',
      title: '1969 Garrard 301 Turntable',
      description: 'The legendary Garrard 301 turntable from 1969, featuring excellent build quality and precise audio playback.',
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

export default Page2;