import React from "react";
import NavbarType2 from "../Components/NavbarType2";
import { Carousel } from "@material-tailwind/react";
import image1 from "../assets/images/carousel/image1.png";
import image2 from "../assets/images/carousel/image2.png";
import image3 from "../assets/images/carousel/image3.png";
import image4 from "../assets/images/carousel/image4.png";

function VisaApprovalMain() {
  return (
    <div className="w-screen h-screen">
      <NavbarType2 />
      <section className="flex justify-between w-full h-2/3 mt-20">
        <div className="w-1/3">
          <p className="text-4xl font-bold">
            Start your Sri Lankan adventure with ease—apply for your visa or
            check your approval status in just a few clicks!
          </p>
          <div>
            <button>Apply for Visa</button>
            <button>Check your visa status</button>
          </div>
        </div>
        <Carousel
          transition={{ duration: 2 }}
          className="rounded-xl w-2/5 h-2/5"
        >
          <img
            src={image1}
            alt="image 1"
            className="w-[670px] h-[670px] object-cover"
          />
          <img
            src={image2}
            alt="image 2"
            className="w-[670px] h-[670px] object-cover"
          />
          <img
            src={image3}
            alt="image 3"
            className="w-[670px] h-[670px] object-cover"
          />
          <img
            src={image4}
            alt="image 3"
            className="w-[670px] h-[670px] object-cover"
          />
        </Carousel>
      </section>
    </div>
  );
}

export default VisaApprovalMain;
