import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; // Import icons
import "../Components/Admin-login.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Mock admin credentials
  const adminUsername = "admin";
  const adminPassword = "admin123";

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    // Check credentials (replace this with actual API call)
    if (username === adminUsername && password === adminPassword) {
      setError("");
      // Handle successful login (e.g., redirect to admin dashboard)
      navigate("/adminDashboard")
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="bg-custom-radial min-h-screen flex flex-col">
      <div className="bg-[#01385f] w-full pt-2 flex flex-col md:flex-row justify-between items-center text-sm text-white">
        <img
          className="logo"
          src="public/VisitSrilanka__1_-removebg-preview3.png"
          alt="Visit Sri Lanka Logo"
          style={{ width: "180px", height: "30px" }}
        />
      </div>
      {/* Login Form */}
      <div className="flex flex-1 justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-16 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>
          {error && (
            <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username or Email"
              className="w-full p-3 border rounded mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded mb-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bg-[#01385f] w-full text-white p-3 rounded font-semibold hover:bg-blue-800">
              Log in
            </button>
          </form>
          <div className="flex justify-center items-center my-6">
            <div className="w-1/4 border-b border-gray-300"></div>
            <div className="mx-4">OR</div>
            <div className="w-1/4 border-b border-gray-300"></div>
          </div>
          <div className="text-center">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[#01385f] w-full mt-4 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-white">
        {/* Copyright Section */}
        <p className="copyright">&copy; Copyright 2024 Daredevils</p>
        {/* Social Media Icons Section */}
        <div className="icons space-x-6 flex">
          <a href="#" className="hover:text-gray-600">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#ffffff" }}
              size="2x"
            />
          </a>
          <a href="#" className="hover:text-gray-600">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#ffffff" }}
              size="2x"
            />
          </a>
          <a href="#" className="hover:text-gray-600">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#ffffff" }}
              size="2x"
            />
          </a>
        </div>
        {/* Privacy Policy Section */}
        <div className="privacypolicy mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
