import { faHeart, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

const Footer = () => {
  return (
    <>
      <div style={{ height: "65px" }} />
      <Row
        style={{
          height: "65px",
          backgroundColor: "white",
          position: "fixed",
          bottom: 0,
          maxWidth: "550px",
          zIndex: 1000,
          boxShadow: "#0000001a 0px -1rem 1rem 0px",
        }}
        className="align-items-center mx-0 px-0 w-100"
      >
        <Col className="text-center">
          <Link to="/">
            <div className="w-100 h-100">
              <FontAwesomeIcon icon={faHome} color="gray" />
            </div>
          </Link>
        </Col>
        <Col className="text-center">
          <FontAwesomeIcon icon={faHeart} color="gray" />
        </Col>
        <Col className="text-center">
          <FontAwesomeIcon icon={faUser} color="gray" />
        </Col>
      </Row>
    </>
  );
};

export default Footer;
