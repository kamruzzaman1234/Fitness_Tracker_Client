import { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      backgroundImage: "https://i.ibb.co.com/dghN6nd/pexels-823sl-2294361.jpg",
      title: "For people who create fun and $ support experience",
      description: "Best Selling Gym",
    },
    {
      id: 2,
      backgroundImage: "https://i.ibb.co/XJrHmLz/pexels-pixabay-416778.jpg",
      title: "For people who create fun and $ support experience",
      description: "Partner with us for innovative solutions that deliver results.",
    },
    {
      id: 3,
      backgroundImage: "https://i.ibb.co/N2VtZCx/pexels-victorfreitas-841130.jpg",
      title: "For people who create fun and $ support experience",
      description: "Empowering businesses to achieve their fullest potential.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen">
      {/* Slide Background */}
      <div
        className="absolute inset-0 bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="absolute inset-0 bg-slate-900 opacity-70 z-10"></div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 text-white text-center">
        <h2 className="text-base sm:text-lg md:text-2xl mb-4">
          {slides[currentSlide].description}
        </h2>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          {slides[currentSlide].title}
        </h1>
        <button className="py-2 px-6 bg-blue-700 hover:bg-blue-800 mt-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg">
          Work Place
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute flex justify-between items-center w-full px-4 md:px-12 lg:px-16 bottom-[15%] z-20">
        <button
          onClick={prevSlide}
          className="py-2 px-4 bg-white text-black text-lg sm:text-xl font-bold rounded-full hover:bg-gray-200"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="py-2 px-4 bg-white text-black text-lg sm:text-xl font-bold rounded-full hover:bg-gray-200"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Banner;
