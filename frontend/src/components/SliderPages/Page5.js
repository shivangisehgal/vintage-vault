import React from 'react';
import Card from '../Card';
import './Page.css';

const Page5 = () => {
  
  const cardData = [
    {
      imageSrc: 'https://whitmorerarebooks.cdn.bibliopolis.com/pictures/5701.jpg?auto=webp&v=1691778744',
      title: 'The Great Gatsby (First Edition)',
      description: 'A rare first edition of F. Scott Fitzgerald’s classic novel, published in 1925, with its original dust jacket.',
      amount: 80000,
    },
    {
      imageSrc: 'https://www.peterharrington.co.uk/blog/wp-content/uploads/2018/03/HP_4.jpg',
      title: 'Harry Potter and the Philosopher’s Stone (First Edition)',
      description: 'A coveted first edition of J.K. Rowling’s debut novel from 1997, complete with original cover art.',
      amount: 45000, 
    },
    {
      imageSrc: 'https://th-thumbnailer.cdn-si-edu.com/_Yy9jkYDjbo7JQaPdMDovdapkqo=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/e6/a1/e6a17a66-bb80-4624-b2e7-4148867d7dbe/newtonsprincipia.jpg',
      title: 'Principia Mathematica (First Edition)',
      description: 'An extremely rare first edition of Sir Isaac Newton’s groundbreaking work, published in 1687.',
      amount: 60000, 
    },
    {
      imageSrc: 'https://i0.wp.com/www.raptisrarebooks.com/images/111849/war-and-peace-leo-tolstoy-first-edition-rare-books.jpg?fit=1000%2C800&ssl=1',
      title: 'War and Peace (First Edition)',
      description: 'A first edition of Leo Tolstoy’s monumental novel, originally published in 1869, in excellent condition.',
      amount: 55000, 
    },
    {
      imageSrc: 'https://i.guim.co.uk/img/media/630cf7e5391ac580e6d2fdda16fc9327b0efc0ec/0_299_4674_2805/master/4674.jpg?width=465&dpr=1&s=none',
      title: 'The Catcher in the Rye (First Edition)',
      description: 'A first edition of J.D. Salinger’s iconic novel, published in 1951, with its original dust jacket.',
      amount: 60000, 
    },
    {
      imageSrc: 'https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg',
      title: '1984 by George Orwell (First Edition)',
      description: 'A first edition of George Orwell’s dystopian masterpiece, published in 1949, in superb condition.',
      amount: 52000, 
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

export default Page5;