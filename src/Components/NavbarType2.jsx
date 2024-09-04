import React from "react";
import logo from "../assets/images/logo.png";

function NavbarType2() {
  return (
    <div className="fixed left-0 top-0 w-full h-16 max-h-20 bg-gradient-to-r from-blue-3 to-blue-4">
      <div className="py-2 ml-4">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default NavbarType2;
