import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Fees from "./pages/Fees";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/fees" element={<Fees />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="text-center py-6 bg-black mt-16 text-gray-200 text-sm border-t">
        © {new Date().getFullYear()} Universe MD (Pvt) Ltd. All Rights Reserved.
      </footer>
    </Router>
  );
}

export default App;
