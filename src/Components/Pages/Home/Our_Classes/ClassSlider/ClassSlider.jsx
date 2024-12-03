import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowRightLong } from "react-icons/fa6";

const ClassSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      backgroundImage: "https://i.ibb.co/dghN6nd/pexels-823sl-2294361.jpg",
      title: "Active Adults",
      description: "strength, speed, stamina",
    },
    {
      id: 2,
      backgroundImage: "https://i.ibb.co/XJrHmLz/pexels-pixabay-416778.jpg",
      title: "Active Kids",
      description: "strength, speed, stamina",
    },
    {
      id: 3,
      backgroundImage: "https://i.ibb.co/N2VtZCx/pexels-victorfreitas-841130.jpg",
      title: "Body Attack",
      description: "the power pusher",
    },
    {
      id: 4,
      backgroundImage: "https://i.ibb.co.com/Ryt0TKL/pexels-tima-miroshnichenko-5928258.jpg",
      title: "Cardio Fitness",
      description: "cardiovascular training",
    },
    {
      id: 5,
      backgroundImage: "https://i.ibb.co.com/RTbQyBy/pexels-yankrukov-8436605.jpg",
      title: "Cycle Trining",
      description: "indoor cycling class",
    },
    {
      id: 6,
      backgroundImage: "https://i.ibb.co.com/yWd4C9j/pexels-pixabay-69773.jpg",
      title: "Yoga Plaites",
      description: "relax, detoxification",
    },
  ];

  const slidesPerView = 3;

  // Handles the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + slidesPerView) % slides.length);
  };

  // Handles the previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - slidesPerView + slides.length) % slides.length
    );
  };

  const visibleSlides = slides.slice(
    currentSlide,
    currentSlide + slidesPerView
  ).concat(
    slides.slice(0, Math.max(0, currentSlide + slidesPerView - slides.length))
  );

  return (
    <div className="mt-20">
      {/* Slider Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleSlides.map((slide) => (
          <div
            key={slide.id}
            className="relative rounded-lg overflow-hidden shadow-lg"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="absolute inset-0 bg-slate-400 bg-opacity-20"></div>
            <div className="absolute w-full bottom-0 left-0 transition z-10 text-white p-4 hover:bg-lime-500">
                <div className="flex gap-5 items-center justify-between">
                    <div>
                    <h2 className="text-xl font-bold">{slide.title}</h2>
                    <p className="text-sm">{slide.description}</p>
                    </div>
                    <div className="">
                    <Link to="" className="text-3xl font-bold text-white"><FaArrowRight></FaArrowRight></Link>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
     <div className="flex justify-center items-center border-2 border-white w-[6%] mx-auto p-3 mt-10">
     <div className="">
        <button
          onClick={prevSlide}
          className="bg-gray-800 text-[30px] px-4 text-white    hover:bg-gray-600"
        >
          ❮
        </button>
      </div>
      <div className="">
        <button
          onClick={nextSlide}
          className="bg-gray-800 text-[30px] px-4 text-white hover:bg-gray-600"
        >
          ❯
        </button>
      </div>
     </div>
    </div>
  );
};

export default ClassSlider;
