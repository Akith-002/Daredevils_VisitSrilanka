
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import DescriptionSection from "../Components/DescriptionSection";
import Footer from "../Components/Footer";
import MapIndicator from "../Views/MapIndicator";
import ScrollCards from "../Components/ScrollCards";
import PlanYourTrip from "../Components/PlanYourTrip";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <DescriptionSection />
      <ScrollCards />
      <MapIndicator />
      <PlanYourTrip />
      <Footer />
    </div>
  );
};

export default HomePage;
