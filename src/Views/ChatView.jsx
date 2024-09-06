import React from 'react';
import Chat from "../Components/Chat";
import TourMap from '../Components/TourMap';

export default function ChatView() {
  return (
    <div className="flex h-screen space-x-4 p-6 mx-4 ">
      <div className="w-1/3">
        <Chat />
      </div>
      <div className="w-2/3">
        <TourMap />
      </div>
    </div>
  );
}
