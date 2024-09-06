import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import DescriptionSection from "../Components/DescriptionSection";
import Footer from "../Components/Footer";
import MapIndicator from "../Views/MapIndicator";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <DescriptionSection />
      <MapIndicator />
      <Footer />
    </div>
  );
};

export default HomePage;
