import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HOC = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: "550px",
        overflowY: "auto",
        backgroundColor: "#f1f8ff",
      }}
      className="mx-auto vh-100"
    >
      <Header />
      <div className="px-4 d-flex flex-column body">{children}</div>
      <Footer />
    </div>
  );
};

export default HOC;
