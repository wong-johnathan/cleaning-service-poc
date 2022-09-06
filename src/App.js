import React from "react";
import { Route, Routes } from "react-router-dom";
import HOC from "./hoc";
import Contractor from "./views/Contractor/ContractorProfile";
import Dashboard from "./views/Dashboard/Dashboard";

const App = () => {
  return (
    <HOC>
      <Routes>
        <Route path="/contractor/:id" element={<Contractor />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </HOC>
  );
};

export default App;
