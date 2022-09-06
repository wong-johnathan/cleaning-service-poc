import { faker } from "@faker-js/faker";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Col, Row } from "reactstrap";
import Rating from "../../components/Rating/Rating";
import ContractorInfo from "./ContractorInfo";
import style from "./ContractorProfile.module.css";
console.log(style);

const ContractorProfile = () => {
  const { id } = useParams();
  const contractor = useSelector(({ contractors }) =>
    contractors.find((contractor) => contractor.id === id)
  );

  const [rating, setRating] = useState(0);
  const [fields, setFields] = useState({
    address: `${faker.address.street()}, ${faker.address.city()}, ${faker.address.country()}`,
    email: faker.internet.email(),
    website: faker.internet.domainName(),
    number: faker.phone.imei(),
    projects: [...new Array(Math.ceil(Math.random() * 10))].map((a, i) =>
      faker.image.image()
    ),
  });
  if (contractor)
    return (
      <>
        <Row
          style={{ marginTop: "2rem" }}
          className="align-items-center justify-content-center"
        >
          <Col xs="auto" className="text-end">
            <img
              src={contractor.profileImg}
              alt={contractor.name}
              height="100px"
              width="100px"
              style={{ borderRadius: "0.8rem" }}
            />
          </Col>
          <Col xs="auto" style={{ color: "#404040" }}>
            {contractor.firstName} {contractor.lastName}
            <br />
            <span style={{ fontSize: "0.8rem" }}>{contractor.company}</span>
            <br />
            <Rating rating={contractor.rating} reviews={contractor.reviews} />
          </Col>
        </Row>
        <div
          style={{
            padding: "1.5rem",
            borderTopLeftRadius: "2rem",
            borderTopRightRadius: "2rem",
            backgroundColor: "white",
            flex: 1,
            margin: "1.5em -1.5em 0 -1.5em",
            height: "100%",
            boxShadow: "0px -1px 20px 0px #00000033",
          }}
        >
          <ContractorInfo value={fields.address} type="Address:" />
          <ContractorInfo value={fields.number} type="Tel:" />
          <ContractorInfo value={fields.email} type="Email:" />
          <ContractorInfo value={fields.website} type="Website:" />
          <Row className="mt-2">
            <Col>Projects</Col>
          </Row>
          <Row
            style={{
              flexWrap: "nowrap",
              overflowY: "hidden",
              overflowX: "scroll",
              height: "95px",
            }}
          >
            {fields.projects.map((project, i) => (
              <Col
                xs="auto"
                key={i}
                style={{ display: "flex", alignItems: "center" }}
              >
                <img
                  src={project}
                  className={style.projects}
                  style={{
                    height: "85px",
                    width: "85px",
                    border: "1px solid #0000000F",
                    borderRadius: "0.5rem",
                  }}
                ></img>
              </Col>
            ))}
          </Row>
          <Row className="mt-2">
            <Col>Leave a Review</Col>
          </Row>
          <Row>
            <Col xs="12">
              <textarea
                type="textarea"
                rows="5"
                className="w-100"
                style={{ fontSize: "0.8rem" }}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>Give a rating</Col>
          </Row>
          <Row>
            {[...new Array(5)].map((a, i) => (
              <Col xs="auto" key={i}>
                <FontAwesomeIcon
                  icon={faStar}
                  color={rating > i ? "gold" : "gray"}
                  style={{ cursor: "pointer" }}
                  onClick={() => setRating(rating===i+1?0:i+1)}
                />
              </Col>
            ))}
          </Row>
          <Row className="mt-3">
            <Col>
              <Button color="primary" className="w-100">
                Submit
              </Button>
            </Col>
          </Row>
        </div>
      </>
    );
  else return <h3>No such contractor</h3>;
};

export default ContractorProfile;
