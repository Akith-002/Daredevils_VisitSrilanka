import React, { useState } from "react";
import "./App.css";
import MapComponent from "./Views/MapIndicator";
import VisaApprovalMain from "./Views/VisaApprovalMain";
import ChatView from "./Views/ChatView";

import TourMap from "./Components/TourMap";
import VisaApplication from "./Views/VisaApplication";
import Footer from "./Components/Footer";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./Components/Carousel";
import PlanYourTrip from "./Components/PlanYourTrip";
import HomePage from "./Views/HomePage";
import LoginPage from "./Views/Admin-login";
import AdminDashboard from "./Views/AdminDashboard";
import VisaStatus from "./Views/VisaStatus";
import EnterPassport from "./Views/EnterPassport";
import SubmissionSuccess from "./Views/SubmissionSuccess";

  
  
  
function App() {
  return (
    <>
   
      <BrowserRouter>
        <Routes>
    
      <Route path="/visaapprovalmain" Component={VisaApprovalMain} />
          <Route path="/chatView" Component={ChatView} />
            
             <Route path="/" Component={HomePage} />
          <Route path="/mapcomponent" Component={MapComponent} />
          <Route path="/visaapproval" Component={VisaApprovalMain} />
          <Route path="/visaapplication" Component={VisaApplication} />
          <Route path="/Admin-login" Component={LoginPage} />
          <Route path="/Footer" Component={Footer} />
          <Route path="/admindashboard" Component={AdminDashboard} />
          <Route path="/visastatus" Component={VisaStatus} />
          <Route path="/passportcheck" Component={EnterPassport} />
          <Route path="/submissionsuccess" Component={SubmissionSuccess} />

        </Routes>
      </BrowserRouter>
      
    </>
    
    
    
  );
}

export default App;
