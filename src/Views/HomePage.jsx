import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import DescriptionSection from "../Components/DescriptionSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <DescriptionSection />
    </div>
  );
};

export default HomePage;
