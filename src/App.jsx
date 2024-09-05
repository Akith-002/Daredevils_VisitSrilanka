import { useState } from "react";
import "./App.css";
import VisaApprovalMain from "./Views/VisaApprovalMain";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/visaapprovalmain" Component={VisaApprovalMain} />
          <Route path="/" Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
