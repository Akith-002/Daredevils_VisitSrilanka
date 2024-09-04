import { useState } from "react";
import "./App.css";
import VisaApprovalMain from "./Views/VisaApprovalMain";
import { Router, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Router>
        <VisaApprovalMain />
      </Router> */}
      <BrowserRouter>
     
        <Routes>
          <Route path="/" Component={VisaApprovalMain} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
