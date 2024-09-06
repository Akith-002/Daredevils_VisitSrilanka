import React from 'react';
import Chat from "../Components/Chat";
import TourMap from '../Components/TourMap';
import NavbarType2 from '../Components/NavbarType2'
import FooterType2 from '../Components/FooterType2'

export default function ChatView() {
  return (
    <div>
      <NavbarType2 />
      <div className="mt-12 flex h-[70vh] space-x-4 p-6 mx-4 ">
        <div className="w-1/3">
          <Chat />
        </div>
        <div className="w-2/3">
          <TourMap />
        </div>
      </div>
   
    </div>
  );
}
