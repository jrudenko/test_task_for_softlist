import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayoutPage from "./layout/layout.jsx";
// import HomePage from "./components/HomePage.jsx";
import PlansDetails from "./components/PlansDetails.jsx";
import TenderDetails from "./components/TenderDetails.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/test_task_for_softlist" element={<LayoutPage />} />
          <Route path="plans/:id" element={<PlansDetails />} />
          <Route path="tenders/:id" element={<TenderDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
