<<<<<<< HEAD
import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: 'Sigiriya',
      description: "Discover the ancient wonder of Sigiriya, a UNESCO World Heritage site. Climb Lion Rock to explore royal palace ruins, admire frescoes, and enjoy stunning summit views. A blend of history, art, and nature, Sigiriya is a must-visit landmark in Sri Lanka.",
      image: '/images/sigiriya.jpg',
    },
    {
      title: 'Sri Dalada Maligawa',
      description: "Discover the spiritual heart of Sri Lanka in Kandy, home to the sacred tooth relic of Lord Buddha. Explore the rich cultural and religious heritage of this iconic temple, admire its serene architecture, and witness the centuries-old rituals still practiced today.",
      image: '/images/Maligawa.jpg',
    },
    {
      title: 'Galle Fort',
      description: "A UNESCO World Heritage site, Galle Fort is a stunning blend of history, culture, and coastal beauty. Explore colonial-era architecture and soak in breathtaking ocean views at this iconic fortress that stands as a testament to Sri Lanka's rich past.",
      image: '/images/Gallefort.jpg',
    },
    {
      title: 'Ella',
      description: "Nestled in Sri Lanka, Ella is a serene escape known for its stunning landscapes, tea plantations, and the iconic Nine Arches Bridge. Perfect for nature lovers, Ella offers scenic hikes, waterfalls, and a peaceful retreat into Sri Lanka’s countryside.",
      image: '/images/Ella.jpg',
    },
    {
      title: 'Pasikudha',
      description: "Discover the pristine beauty of Pasikudha’s crescent-shaped bay, where calm turquoise waters meet golden sandy shores. Ideal for snorkeling, swimming, and relaxing, Pasikudha offers a serene escape into paradise on Sri Lanka’s east coast.",
      image: '/images/pasikuda.jpeg',
    },
    {
      title: "Adam's Peak",
      description: "Sri Pada, also known as Adam's Peak, is a sacred mountain in Sri Lanka revered by multiple religions. Pilgrims climb its steep path to reach the summit, where a footprint-shaped rock is believed to be sacred. Along with spiritual significance, the peak offers stunning sunrise views over the surrounding mountains and valleys.",
      image: '/images/sripadaya.jpg',
    },
    {
      title: "Sinharaja Rain Forest",
      description: "Explore the lush beauty of Sinharaja Rain Forest, a UNESCO World Heritage site and biodiversity hotspot. Wander through tropical greenery, spot rare wildlife, and listen to the sounds of nature. A haven for nature lovers, Sinharaja is a must-visit for those seeking tranquility and adventure in Sri Lanka.",
      image: '/images/sinharaja.jpg',
    },
  ];

  const cardWidth = 350; // Card width remains unchanged
  const gap = 60; // Increased gap between cards (30px each side)
  const visibleCards = 3;

  // Calculate container width to fit 3 cards with increased gap
  const containerWidth = visibleCards * cardWidth + (visibleCards - 1) * gap;

  const maxIndex = cards.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : maxIndex
    );
  };

  return (
    <div className="relative mx-auto" style={{ maxWidth: containerWidth, width: '100%' }}>
      {/* Heading and Description */}
      <div className="text-center mb-8">
        <h1 className="text-xl font-semibold mb-4 text-blue-900">Itineraries</h1>
        <p className="text-2xl font-bold text-black">
          Explore our curated itineraries designed to help you discover<br /> 
          the best of Sri Lanka, tailored for every type of traveler.
        </p>
      </div>

      {/* Carousel */}
      <div className="flex overflow-hidden" style={{ width: containerWidth }}>
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * (cardWidth + gap)}px)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-[350px] p-4" // Keep card size the same
              style={{ marginRight: gap }}
            >
              <div className="bg-white rounded-lg shadow-lg h-[28rem]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-60 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                  <p className="text-gray-700 text-xs">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg`}
      >
        &#8250;
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {cards.slice(0, cards.length - visibleCards + 1).map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></div>
=======
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
    }, 3000); // 3 seconds interval

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [images.length]);

  return (
    <div className="relative overflow-hidden w-full h-[800px]">
      {/* Text Overlay */}
      <div className="absolute top-1/2 bottom-0 left-32 w-full h-full flex z-10">
        <div className="text-white text-left bg-white bg-opacity-0 p-4 rounded">
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
>>>>>>> e37e985698c6793c784cfdbfc032daf876609a0b
        ))}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Carousel;
=======
export default Carousel;
>>>>>>> e37e985698c6793c784cfdbfc032daf876609a0b
