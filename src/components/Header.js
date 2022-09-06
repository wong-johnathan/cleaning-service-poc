import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";

const style = {
  button: {
    borderRadius: "0.7rem",
    width: "40px",
    height: "40px",
    boxShadow: "0 0 1rem 1rem rgba(0,0,0,.04)",
    color: "black",
  },
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div style={{ height: "65px" }} />
      <Row
        className="align-items-center mx-0 w-100"
        style={{
          height: "65px",
          position: "fixed",
          top: 0,
          maxWidth: "550px",
          background: "white",
          zIndex: 1000,
          boxShadow: "#0000001a 0px 1rem 1rem 0px",
        }}
      >
        <Col xs="2" className="text-center px-0">
          {location.pathname !== "/" ? (
            <Button
              style={style.button}
              color="none"
              onClick={() => navigate(-1)}
            >
              <FontAwesomeIcon icon={faArrowLeft} color="gray" />
            </Button>
          ) : (
            ""
          )}
        </Col>
        <Col
          className="text-center font-weight-bold px-0"
          style={{ lineHeight: 1.2 }}
        >
          Rate your Contractor
        </Col>
        <Col xs="2" className="text-center px-0">
          {/* <Button style={style.button} color="white">
            <FontAwesomeIcon icon={faSearch} color="gray" />
          </Button> */}
        </Col>
      </Row>
    </>
  );
};

export default Header;
