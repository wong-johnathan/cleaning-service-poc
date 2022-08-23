import React from "react";
import { Card, Col, Row } from "reactstrap";
import background from "../../assets/img.png";
import Rating from "../Rating/Rating";
const Contractor = ({ rating, reviews, profileImg, name, company }) => {
  return (
    <Card
      style={{ backgroundColor: "white", borderRadius: "1.25rem" }}
      className="p-3 h-100"
    >
      <div
        style={{
          zIndex: 1,
          position: "absolute",
          backgroundImage: `url(${background})`,
          height: "100%",
          width: "100%",
          top: 0,
          left: 0,
          borderRadius: "1.8rem",
          opacity: 0.05,
          backgroundSize: "100% 150%",
        }}
      />
      <Row className="h-100 align-items-center">
        <Col xs="auto">
          <img
            src={profileImg}
            height="70px"
            width="70px"
            style={{ borderRadius: "0.8rem" }}
            alt="Contractor"
          />
        </Col>
        <Col style={{color:'#404040'}}>
          {name}
          <br />
          <span style={{ fontSize: "0.75rem" }}>{company}</span>
          <br />
          <Rating rating={rating} reviews={reviews} />
        </Col>
      </Row>
    </Card>
  );
};

export default Contractor;
