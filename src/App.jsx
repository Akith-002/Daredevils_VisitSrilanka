import { useState } from "react";
import "./App.css";
import VisaApprovalMain from "./Views/VisaApprovalMain";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./Components/Carousel";
import PlanYourTrip from "./Components/PlanYourTrip";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/visaapprovalmain" Component={VisaApprovalMain} />
        </Routes>
        <div className="App">
          <Carousel />
          <PlanYourTrip />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
