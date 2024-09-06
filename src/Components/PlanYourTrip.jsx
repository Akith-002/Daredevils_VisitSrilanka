import React, { useState, useEffect } from 'react';

const PlanYourTrip = () => {
  const [headingPart, setHeadingPart] = useState("Plan Your Trip");

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadingPart(prev => (prev === "Plan Your Trip" ? "Stay Informed" : "Plan Your Trip"));
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div id="planyourtrip" className="flex flex-col md:flex-row items-center justify-around bg-white rounded-lg shadow-lg p-6 md:p-24">
      {/* Image Section */}
      <div className="flex justify-center md:w-2/5 mb-6 md:mb-0 ">
        <img 
          src="/images/planYourTrip.jpg" 
          alt="Traveler with a robot"
          className="w-full max-w-xs h-56 rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left -ml-12">
        <h2 className="text-2xl font-bold text-green-900 mb-6">
          Experience The World, <span style={{color: '#84cc16'}}>{headingPart}</span>
        </h2>
        <p className="text-black mb-6">
          Discover the best of Sri Lanka effortlessly with our AI-powered trip planner. Whether you're seeking serene beaches, lush mountains, or vibrant cultural experiences, our chatbot is here to help you tailor your journey to your interests. Just tell us what you're looking for, and we'll suggest personalized itineraries, top attractions, and hidden gems, all while ensuring your travel experience is smooth and memorable. Start planning your adventure today and let us guide you through the wonders of Sri Lanka!
        </p>

        {/* Button */}
        <button className="bg-teal-900 text-white w-56 py-3 shadow-lg shadow-teal-500/50 hover:bg-green-700 focus:outline-none rounded-lg">
          Start Planning
        </button>
      </div>
    </div>
  );
};

export default PlanYourTrip;
