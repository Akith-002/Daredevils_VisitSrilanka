import { useState } from "react";
import "./App.css";
import VisaApprovalMain from "./Views/VisaApprovalMain";
import ChatView from "./Views/ChatView";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import TourMap from "./Components/TourMap";

function App() {

return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path="/visaapprovalmain" Component={VisaApprovalMain} />
          <Route path="/chatView" Component={ChatView} />

        </Routes>
      </BrowserRouter>
      {/* <ChatView/> */}
    </>
    
    
    
  );
}

export default App;
