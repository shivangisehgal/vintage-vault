import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.js";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { 
      id: 1, 
      content: (
        <div className="flex flex-col justify-center items-center">
          <img 
            src="https://png.pngtree.com/png-vector/20230811/ourmid/pngtree-cartoon-typewriter-cartoon-symbol-vector-illustration-background-png-image_6842029.png" 
            alt="Typewriter" 
            className="h-40 w-40 object-contain"
          />
          <span className="text-xl mt-2 text-center">Typewriter</span>
        </div>
      ), 
      link: "/page1" 
    },
    { 
      id: 2, 
      content: (
        <div className="flex flex-col justify-center items-center">
          <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/014/374/571/small_2x/record-player-illustration-in-3d-isometric-style-png.png" 
            alt="Record Player" 
            className="h-40 w-40 object-contain"
          />
          <span className="text-2xl mt-2 text-center">Record Player</span>
        </div>
      ), 
      link: "/page2" 
    },
    { 
      id: 3, 
      content: (
        <div className="flex flex-col justify-center items-center">
          <img 
            src="https://img.freepik.com/premium-vector/music-vector-illustration-cartoon_969863-127106.jpg?ga=GA1.1.159757594.1724008012&semt=ais_hybrid" 
            alt="Records" 
            className="h-40 w-40 object-contain"
          />
          <span className="text-2xl mt-2 text-center">Vinyl Records</span>
        </div>
      ), 
      link: "/page3" 
    },
    { 
      id: 4, 
      content: (
        <div className="flex flex-col justify-center items-center">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/025/002/146/original/cartoon-retro-gramophone-record-player-drawing-cute-illustration-of-vintage-music-equipment-png.png" 
            alt="Grahmophone" 
            className="h-40 w-40 object-contain"
          />
          <span className="text-2xl mt-2 text-center">Grahmophone</span>
        </div>
      ), 
      link: "/page4" 
    },
    { 
      id: 5, 
      content: (
        <div className="flex flex-col justify-center items-center">
          <img 
            src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-law-books-clipart-vintage-book-set-isolated-on-white-background-cartoon-png-image_11091507.png" 
            alt="Books" 
            className="h-40 w-40 object-contain"
          />
          <span className="text-2xl mt-2 text-center">Vintage Books</span>
        </div>
      ), 
      link: "/page5" 
    },
    { 
      id: 6, 
      content: (
        <div className="flex flex-col justify-center items-center">
          <img 
            src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-old-camera-vector-png-image_11245259.png" 
            alt="Cameras" 
            className="h-40 w-40 object-contain"
          />
          <span className="text-2xl mt-2 text-center">Cameras</span>
        </div>
      ), 
      link: "/page6" 
    },
  ];

  // Update itemsPerSlide based on screen size
  const itemsPerSlide = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-4xl font-bold text-black-600 mb-6">Categories</h1>

      <div className="relative w-full max-w-screen-lg">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-black-600 hover:text-black-800 transition duration-300 z-10"
        >
          &lt;
        </button>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
              width: `${items.length * (100 / itemsPerSlide)}%`,
            }}
          >
            {items.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="bg-indigo-50 rounded-2xl h-72 flex flex-col justify-center items-center w-1/3 m-2"
                style={{
                  width: `${100 / itemsPerSlide}%`, // Dynamically set width based on screen size
                }}
              >
                {item.content}
              </Link>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-black-600 hover:text-indigo-800 transition duration-300 z-10"
        >
          &gt;
        </button>
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default Home;
