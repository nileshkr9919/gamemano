import React, { useState, useEffect } from "react";

interface ObjectI {
  [key: string]: string
}

// Define types for the props, including custom classNames
interface CarouselProps {
  slides: string[];       // An array of image URLs
  interval?: number;      // Optional autoplay interval in milliseconds
  containerClassName?: string; // Optional custom class for the carousel container
  slideClassName?: string;     // Optional custom class for each slide
  dotClassName?: string;       // Optional custom class for the dots
  activeDotClassName?: string; // Optional custom class for the active dot
  customStyle?: ObjectI;  // Optional custom style for the componant
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  interval = 3000,
  containerClassName = "relative w-full",
  slideClassName = "w-full h-96 object-cover",
  dotClassName = "w-3 h-3 rounded-full transition-colors",
  activeDotClassName = "#FDF3BC",
  customStyle = {}
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Handle dot click to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay functionality with loop
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, interval);

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, [slides.length, interval]);

  return (
    <div className={containerClassName} style={customStyle}>
      {/* Slides */}
      <div className="flex overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full transition-transform duration-500 ease-in-out ${
              index === currentSlide ? "block" : "hidden"
            }`}
          >
            <img src={slide} alt={`Slide ${index}`} className={slideClassName} />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`${dotClassName} ${index === currentSlide ? activeDotClassName : ""}`}
            style={{backgroundColor:`${currentSlide === index ? "#FDF3BC" : 'white'}`}}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
