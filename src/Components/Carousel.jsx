
import { useEffect, useState } from "react";

// Importing images
import image1 from "../assets/images/hero-carousel/image1.jpg";
import image2 from "../assets/images/hero-carousel/image2.jpg";
import image3 from "../assets/images/hero-carousel/image3.jpg";
import image4 from "../assets/images/hero-carousel/image4.jpg";
import image5 from "../assets/images/hero-carousel/image5.jpg";

const Carousel = () => {
  const images = [image1, image2, image3, image4, image5];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4500); // 3 seconds interval

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [images.length]);

  return (
    <div className="relative overflow-hidden w-full h-[800px]">
      {/* Text Overlay with sliding animation */}
      <div className="absolute top-1/2 bottom-0 left-32 w-full h-full flex z-10">

        <div className="text-white text-left bg-white bg-opacity-0 p-4 rounded animate-slide-in">
          <h1 className="text-7xl font-bold mb-4">

            Best Choice <br></br>To Explore
          </h1>

          <button className="mt-4 bg-white text-[#01385F] py-2 px-4 rounded-lg hover:bg-[#01385F] hover:text-white text-lg shadow-lg transition ">
            Start Planning
          </button>
        </div>
      </div>

      {/* Images */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
            style={{ width: `${100 / images.length}%` }}
          />

        ))}
      </div>
    </div>
  );
};

export default Carousel;
