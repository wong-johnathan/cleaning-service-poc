import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contractor from "./views/Contractor/ContractorProfile";
import Dashboard from "./views/Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "550px",
          overflowY: "auto",
          backgroundColor: "#f1f8ff",
        }}
        className="mx-auto vh-100"
      >
        <Header />
        <div className="px-4 d-flex flex-column">
          <Routes>
            <Route path="/contractor/:id" element={<Contractor />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
