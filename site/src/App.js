import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Reach from "./pages/Reach";
import Staff from "./pages/Staff";
import NotFound from "./pages/NotFound";

const App = () => {
  const pages = ["", "mission", "reach", "staff"];
  const page = window.location.href.split("/")[3];
  var isFound = false;

  pages.forEach((thePage) => {
    if (page === thePage) {
      isFound = true;
    }
  });

  return (
    <Router>
      <Header page={page} />

      {isFound ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/reach" element={<Reach />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      ) : (
        <NotFound />
      )}

      <Footer />
    </Router>
  );
};

export default App;
