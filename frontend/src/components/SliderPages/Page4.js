import React from 'react';
import Card from '../Card';
import './Page.css';

const Page4 = () => {
  
  const cardData = [
    {
      imageSrc: 'https://i.etsystatic.com/24771473/r/il/44b094/2699955727/il_570xN.2699955727_mx6w.jpg',
      title: 'Edison Standard Phonograph',
      description: 'A rare Edison Standard phonograph from the early 1900s, in perfect working condition.',
      amount: 30000, 
    },
    {
      imageSrc: 'https://i.etsystatic.com/13149246/r/il/58a07e/4458091247/il_570xN.4458091247_c20b.jpg',
      title: 'His Masters Voice Gramophone',
      description: 'An original HMV gramophone with the iconic dog logo, beautifully restored from the 1920s.',
      amount: 55000, 
    },
    {
      imageSrc: 'https://public.blenderkit.com/thumbnails/assets/dd9f1e6835ed44939e6066c7efa5b022/files/thumbnail_8a9de5f0-383e-4588-86f5-b32b67daebf5.png.2048x2048_q85.jpg',
      title: 'Victrola Talking Machine',
      description: 'A Victor Talking Machine from 1910 with an exquisite brass horn and wooden cabinet.',
      amount: 40000, 
    },
    {
      imageSrc: 'https://images.squarespace-cdn.com/content/v1/619e1fa929b89256f294e7ec/cd1bc82f-4def-46da-98d1-9b5b9b3e9252/The+Columbia+Graphophone+BF+Cylinder+Photograph+with+Brass+Horn.jpg',
      title: 'Columbia Graphophone',
      description: 'A beautifully preserved Columbia Graphophone from the 1930s, with its original wooden case.',
      amount: 35000, 
    },
    {
      imageSrc: 'https://i9.skinnerinc.com/unsafe/fit-in/420x420/filters:fill(eee)/696/970696.jpg',
      title: 'Pathé Gramophone',
      description: 'A rare Pathé gramophone from France, made in the 1910s, known for its distinctive sound quality.',
      amount: 32000, 
    },
    {
      imageSrc: 'https://d3h6k4kfl8m9p0.cloudfront.net/stories/yRSxF5QwN0EtiVvsLJVjGA.jpg',
      title: 'Brunswick Panatrope Phonograph',
      description: 'A vintage Brunswick Panatrope phonograph from the late 1920s, with an elegant wooden exterior.',
      amount: 28000, 
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

export default Page4;