import React, { useEffect, useState } from "react";
import beachImage from "../assets/images/description-section/beach.png";
import "./DescriptionSection.css";

// TypingEffect Component
const TypingEffect = () => {
  const fullText = "A Tropical Paradise";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(250);

  useEffect(() => {
    const typingEffect = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        // Typing effect
        setText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        // Deleting effect
        setText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else if (index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (index === 0) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(typingEffect);
  }, [text, index, isDeleting]);

  return <span>{text}</span>;
};

// DescriptionSection Component
const DescriptionSection = () => {
  return (
    <section id="about" className="bg-[#f3f3f3] py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left side: Text */}
        <div className="md:w-3/5 space-y-4">
          <h1 className="text-4xl font-bold text-[#6cbe3a]">
            Discover the Timeless Beauty of Sri Lanka: <TypingEffect />
          </h1>
          <h2 className="text-xl font-semibold text-[#1b501b]">
            Join Our Journey
          </h2>
          <p className="text-[#565656]">
            Sri Lanka, the Pearl of the Indian Ocean, is a land of beauty and
            vibrant culture. This tropical paradise blends ancient history with
            stunning landscapes and warm hospitality. From golden beaches to
            lush tea plantations, Sri Lanka offers adventure and serenity.
            Explore ancient cities, encounter wildlife, or relax on pristine
            beaches as the sun sets. With rich heritage and breathtaking
            scenery, Sri Lanka promises an unforgettable journey.
          </p>
        </div>

        {/* Right side: Image */}
        <div className="md:w-2/5 mt-8 md:mt-0 md:ml-12 relative">
          <img
            className="w-full h-auto rounded-lg"
            src={beachImage}
            alt="Sri Lanka Beach"
          />
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
