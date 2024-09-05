import React, { useState } from "react";
import "./App.css";
import VisaApprovalMain from "./Views/VisaApprovalMain";
import VisaApplication from "./Views/VisaApplication";
import Footer from "./Components/Footer";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Views/AdminDashboard";
import VisaStatus from "./Views/VisaStatus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/visaapprovalmain" Component={VisaApprovalMain} />
          <Route path="/visaapplication" Component={VisaApplication} />
          <Route path="/admindashboard" Component={AdminDashboard}/>
          <Route path="/visastatus" Component={VisaStatus}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
