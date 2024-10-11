import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TheameButton from "./components/TheameButton";
import { WeatherProvider } from "./providers/weather/WeatherContext";
import { NewsProvider } from "./providers/news/NewsContext";
import Sports from "./components/pages/Sports";
import Entertainment from "./components/pages/Entertainment";
import Politics from "./components/pages/Politics";
import Business from "./components/pages/Business";
import International from "./components/pages/International";

const App = () => {
  return (
    <BrowserRouter>
      <NewsProvider>
        <WeatherProvider>
          <Navbar />
          <Home />
          <TheameButton />
          <ToastContainer />
        </WeatherProvider>
      </NewsProvider>

      <Routes>
        <Route path="/sports" element={<Sports />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/business" element={<Business />} />
        <Route path="/international" element={<International />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
