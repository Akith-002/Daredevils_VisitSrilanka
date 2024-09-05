import React, { useState } from "react";
import "./App.css";
import VisaApprovalMain from "./Views/VisaApprovalMain";
import VisaApplication from "./Views/VisaApplication";
import Footer from "./Components/Footer";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import SignINPage from "./Components/Admin-login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/visaapprovalmain" Component={VisaApprovalMain} />
          <Route path="/visaapplication" Component={VisaApplication} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
