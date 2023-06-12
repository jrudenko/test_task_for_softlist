import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutPage from "./layout/layout.jsx";
import HomePage from "./components/HomePage.jsx";
import TenderDetails from "./components/TenderDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/plans/:id" element={<TenderDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
