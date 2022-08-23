import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Rating from "../../components/Rating/Rating";

const ContractorProfile = () => {
  const { id } = useParams();
  const contractor = useSelector(({ contractors }) =>
    contractors.find((contractor) => contractor.id === id)
  );

  if (contractor)
    return (
      <>
        <Row style={{ marginTop: "2.5rem" }} className="align-items-center">
          <Col xs="5" className="text-end">
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
      </>
    );
  else return <h3>No such contractor</h3>;
};

export default ContractorProfile;
