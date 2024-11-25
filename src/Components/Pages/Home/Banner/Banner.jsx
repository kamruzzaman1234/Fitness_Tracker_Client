import { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      backgroundImage: "https://i.ibb.co.com/dghN6nd/pexels-823sl-2294361.jpg",
      title: "For people  who create fun and $ support experience",
      description: "Best Selling Gym ",
    },
    {
      id: 2,
      backgroundImage: "https://i.ibb.co/XJrHmLz/pexels-pixabay-416778.jpg",
      title: "For people  who create fun and $ support experience",
      description: "Partner with us for innovative solutions that deliver results.",
    },
    {
      id: 3,
      backgroundImage: "https://i.ibb.co/N2VtZCx/pexels-victorfreitas-841130.jpg",
      title: "For people  who create fun and $ support experience",
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
        className="absolute inset-0  bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
           backgroundRepeat:"no-repeat", backgroundSize: "cover",
            backgroundAttachment:"fixed", backgroundPosition: "center center",
        }}
      ></div>
      <div className="absolute inset-0 bg-slate-900 opacity-70 z-10"></div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center
       px-8 md:px-16 w-[60%] lg:px-24 text-white">
       
        <h2 className="text-lg md:text-2xl mb-6">{slides[currentSlide].description}</h2>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          {slides[currentSlide].title}
        </h1>
        <button className=" py-2 bg-blue-900 hover:bg-blue-900 mt-3
         text-sm w-[15%] md:text-base font-semibold rounded-lg shadow-lg">
          Work Place
        </button>
      </div>

      {/* Navigation Buttons */}
     <div className="absolute right-[20%] space-x-2 
      bottom-[25%] z-20 border-2 border-white px-4 py-2">
     <button
        onClick={prevSlide}
        className=" py-1 px-4 bg-white text-2xl font-bold"
      >
        {/* absolute top-1/2 left-5 -translate-y-1/2 bg-black bg-opacity-60 text-white p-3
         rounded-lg hover:bg-opacity-80 transition z-20 */}

        ❮
      </button>
      <button
        onClick={nextSlide}
        className="px-4 py-1 text-2xl bg-white font-bold"
      >
        ❯
      </button>
     </div>
    </div>
  );
};

export default Banner;
