import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";

function FooterType2() {
  return (
    <div className="fixed left-0 bottom-0 flex justify-around items-center w-full h-16 max-h-20 bg-gradient-to-r from-blue-3 to-blue-4">
      <div className="text-white">@copyright 2024 DareDevils</div>
      <div className="flex gap-4">
        <FacebookLogo size={32} color="#ffffff" />
        <InstagramLogo size={32} color="#ffffff" />
        <XLogo size={32} color="#ffffff" />
        <LinkedinLogo size={32} color="#ffffff" />
      </div>
      <div className="text-white">Privacy Policy</div>
    </div>
  );
}

export default FooterType2;
