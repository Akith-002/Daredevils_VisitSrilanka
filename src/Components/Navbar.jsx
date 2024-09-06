import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom"; // Keep this for other internal navigation

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-10">
      <div className="bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div>
            <img
              src={logo}
              alt="VisitSrilanka Logo"
              className="h-10" // Adjust the height as per your design
            />
          </div>
          <ul className="flex space-x-16">
            {/* Updated "About" link to scroll to the section with id="about" */}
            <li>
              <a
                href="#about"
                className="text-white hover:underline hover:underline-offset-4 hover:text-white"
              >
                About
              </a>
            </li>
            {/* Updated "Itineraries" link to scroll to the section with id="itineraries" */}
            <li>
              <a
                href="#itineraries"
                className="text-white hover:underline hover:underline-offset-4 hover:text-white"
              >
                Itineraries
              </a>
            </li>
            {/* Updated "Discover" link to scroll to the section with id="discover" */}
            <li>
              <a
                href="#discover"
                className="text-white hover:underline hover:underline-offset-4 hover:text-white"
              >
               Discover
              </a>
            </li>
            {/* Updated "Plan Your Trip" link to scroll to the section with id="planyourtrip" */}
            <li>
              <a
                href="#planyourtrip"
                className="text-white hover:underline hover:underline-offset-4 hover:text-white"
              >
                Plan Your Trip
              </a>
            </li>.
          

            {[
              "Visa Approval"
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={
                    item === "Visa Approval"
                      ? "/visaapproval" // Directs to another page for Visa Approval
                      : `#${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="text-white hover:underline hover:underline-offset-4 hover:text-white"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
