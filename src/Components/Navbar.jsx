import React from "react";
import logo from "../assets/images/logo.png";

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
            {" "}
            {/* Space between links increased */}
            {[
              "About",
              "Itineraries",
              "Discover",
              "Plan Your Trip",
              "Visa Approval",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={
                    item === "Visa Approval"
                      ? "/visaapproval" // Directs to another page for Visa Approval
                      : `#${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="text-white hover:underline hover:underline-offset-4 hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
