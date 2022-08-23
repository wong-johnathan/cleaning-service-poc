import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "reactstrap";
import background from "../../assets/img.png";

const ContractorHighlight = () => {
  const contractor = useSelector(
    ({ contractors }) =>
      contractors[Math.round(Math.random() * contractors.length)]
  );
  return (
    <Link to={`/contractor/${contractor.id}`} className="text-decoration-none">
      <Card
        style={{
          background: "#3f9feb",
          borderRadius: "1.8rem",
          border: "0px",
          padding: "1rem 2rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundImage: `url(${background})`,
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            borderRadius: "1.8rem",
            opacity: 0.05,
            backgroundSize: "150%",
          }}
        />
        <Row>
          <Col xs="auto" className="p-0" style={{ color: "white" }}>
            <img
              src={contractor.profileImg}
              width="55px"
              height="55px"
              alt="Contractor"
              style={{ borderRadius: "0.8rem" }}
            />
          </Col>
          <Col xs="auto" style={{ color: "white" }}>
            {contractor.firstName} {contractor.lastName}
            <br />
            {contractor.company}
          </Col>
        </Row>
        <Row className="mt-3">
          <div
            className="d-flex align-items-center"
            style={{
              height: "60px",
              background: "#ffffff4f",
              borderRadius: "1rem",
              color: "white",
            }}
          >
            <FontAwesomeIcon
              icon={faCalendar}
              style={{ marginRight: "1.5rem" }}
            />{" "}
            {moment(new Date()).format("DD.MM.YY, HH:MM")}
          </div>
        </Row>
      </Card>
    </Link>
  );
};

export default ContractorHighlight;
