import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState("bg-none");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarColor("bg-gradient-to-r from-blue-3 to-blue-4"); // Apply gradient on scroll
    } else {
      setNavbarColor("bg-none"); // Transparent at the top
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-colors duration-300 ${navbarColor}`}
    >
      <div className="backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div>
            <img
              src={logo}
              alt="VisitSrilanka Logo"
              className="h-10" // Adjust the height as per your design
            />
          </div>
          <ul className="flex space-x-16">
            {[
              "About",
              "Itineraries",
              "Discover",
              "Plan Your Trip",
              "Visa Approval",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={
                    item === "Visa Approval"
                      ? "/visaapproval"
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
