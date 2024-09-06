import React from "react";
import NavbarType2 from "../Components/NavbarType2";
import FooterType2 from "../Components/FooterType2";
import { Carousel, IconButton, Button } from "@material-tailwind/react";
import image1 from "../assets/images/carousel/image1.png";
import image2 from "../assets/images/carousel/image2.png";
import image3 from "../assets/images/carousel/image3.png";
import image4 from "../assets/images/carousel/image4.png";

function VisaApprovalMain() {
  return (
    <div className="size-full bg-custom-radial">
      <NavbarType2 />

      <section className="flex justify-evenly items-center gap-16 w-full h-screen pt-28 pb-20 px-28">
        <div className="w-3/4 h-3/4 flex flex-col gap-20">
          <p className="text-5xl font-bold leading-13">
            Start your <span className="text-[#888888]">Sri Lankan</span>{" "}
            adventure with ease—apply for your visa or check your approval
            status in just a few clicks!
          </p>
          <div className="flex justify-around w-2/3">
            <a href="/visaapplication">
              <Button
                size="lg"
                color="green"
                variant="gradient"
                className="shadow-lg"
              >
                Apply for visa
              </Button>
            </a>
            <Button
              size="lg"
              color="light-green"
              variant="gradient"
              className="shadow-lg"
            >
              Check your visa status
            </Button>
          </div>
        </div>
        <Carousel
          transition={{ duration: 2 }}
          className="rounded-xl w-3/5 h-full mb-8"
          prevArrow={({ handlePrev }) => <IconButton className="hidden" />}
          nextArrow={({ handleNext }) => <IconButton className="hidden" />}
          navigation={({ setActiveIndex, activeIndex, length }) => {
            <div className="hidden"></div>;
          }}
          autoplay={true}
          autoplayDelay={4000}
          loop={true}
        >
          <img
            src={image1}
            alt="image 1"
            className="w-full h-full object-cover"
          />
          <img
            src={image2}
            alt="image 2"
            className="w-full h-full object-cover"
          />
          <img
            src={image3}
            alt="image 3"
            className="w-full h-full object-cover"
          />
          <img
            src={image4}
            alt="image 3"
            className="w-full h-full object-cover"
          />
        </Carousel>
      </section>

      <FooterType2 />
    </div>
  );
}

export default VisaApprovalMain;
