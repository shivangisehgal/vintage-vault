import React from 'react';
import Card from '../Card';
import './Page.css';

const Page1 = () => {
  
  const cardData = [
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfEm1y6z5r8W907yCpZ9tvHjiHROoWMhMOw&s',
      title: 'Corona 3 Folding (1912)',
      description: 'A foldable, highly portable typewriter, popular with travelers in the early 20th century.',
      amount: 58000,
    },
    {
      imageSrc: 'https://www.antiguedades.es/32000-home_default/antique-hammond-multiplex-typewriter-year-1913.jpg',
      title: 'Hammond Multiplex (1913)',
      description: 'Known for its interchangeable type shuttle, allowing multiple typefaces.',
      amount: 66000,
    },
    {
      imageSrc: 'https://www.antiguedades.es/35191-large_default/beautifully-preserved-adler-7-typewriter-germany-1915.jpg',
      title: 'Adler 7 (1900s)',
      description: 'A German-made typewriter known for its reliability and precision, commonly used in European offices.',
      amount: 50000 ,
    },
    {
      imageSrc: 'https://typewriterreview.com/wp-content/uploads/2021/01/hermes-3000-1.jpeg',
      title: 'Hermes 3000 (1958)',
      description: 'A Swiss typewriter known for precision and smooth typing action, favored by famous writers like Sylvia Plath and Jack Kerouac.',
      amount: 66000,
    },
    {
      imageSrc: 'https://live.staticflickr.com/65535/53213682094_a311dfe8ee_b.jpg',
      title: 'Olympia SM3 (1950s)',
      description: 'A robust, German-made typewriter popular among journalists and writers for its precision and reliability.',
      amount: 30000,
    },
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRgljV6ccE_bhUJsPMd-es9pNbIfGfBcTGyAwS5YgiN93XG0DaTCHdqVW4naUSIUYNpeY&usqp=CAU',
      title: 'Sholes and Gildden Typewriter(1873)',
      description: 'Also known as the Remington No. 1, this typewriter was the first commercially successful machine.',
      amount: 27000,
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

export default Page1;