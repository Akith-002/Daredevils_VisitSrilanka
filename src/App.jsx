import { useState } from "react";
import "./App.css";
import VisaApprovalMain from "./Views/VisaApprovalMain";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import TourMap from "./Components/TourMap";

function App() {


  return (
    <div className="App">
      <TourMap />
    </div>
  );
}

export default App;
