import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-section text-white">
      <img
        className="logo"
        src="public\VisitSrilanka__1_-removebg-preview2.png"
        alt="Visit Sri Lanka Logo"
        style={{ width: "260px", height: "80px" }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10">
        {/* Left Section: About */}
        <div className=" container2 max-w-sm">
          {/* <div className="container2 max-w-sm mx-auto ml-4"> */}
          <h4 className="font-bold text-lg text-black mb-4">About</h4>

          <p className="mt-4 text-sm">
            VisitSriLanka is your gateway to exploring the unparalleled beauty,
            rich culture, and vibrant history of Sri Lanka. Discover hidden
            gems, breathtaking landscapes, and authentic experiences as you
            embark on an unforgettable journey through the island.
          </p>
        </div>

        <div className="quick-links max-w-sm mx-auto text-left ml-4">
          {" "}
          {/* Added ml-4 to move it to the left */}
          <h4 className="font-bold text-lg text-black mb-4 ml-20">
            Quick Links
          </h4>
          <ul className="ml-20">
            {" "}
            {/* Adjust this margin to control how far left you want the links */}
            <li>
              <a href="#" className="hover:text-blue-800">
                VisitSrilanka
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800">
                Discover
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800">
                Plan your Trip
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800">
                Visa Approval
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Stay in Touch */}
        <div className="Stay-In-Touch max-w-sm">
          <h4 className="font-bold text-lg text-black mb-4">Stay In Touch</h4>
          <ul>
            <li>
              <form className="flex space-x-2">
                {" "}
                {/* Use flex to align input and button on the same line */}
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="p-2 flex-grow border border-gray-400 rounded"
                />
                <button
                  type="submit"
                  className="bg-[#01385F] text-white p-2 rounded hover:bg-blue-800"
                >
                  Subscribe
                </button>
              </form>
            </li>
            <br></br>
            <li>
              <h4 className="font-bold text-lg text-black mb-4">Contact</h4>
            </li>

            <li>
              <a href="#" className="hover:text-blue-800">
                <p>Email : visit.srilank@gmail.com</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#01385f] w-full mt-8 border-t border-gray-300 pt-4 flex flex-coloumn md:flex-coloumn justify-between items-center text-sm text-white ">
        <p className="copyright flex flex-col">
          &copy; Copyright 2024 Daredevils
        </p>
        <div className=" space-x-6">
          <a href="#" className="hover:text-gray-600">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#ffffff" }}
              size="2x"
            />
          </a>
          <a href="#" className="hover:text-gray-600">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#ffffff" }}
              size="2x"
            />
          </a>
          <a href="#" className="hover:text-gray-600">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#ffffff" }}
              size="2x"
            />
          </a>
        </div>
        <div className="privacypolicy flex flex-col space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
