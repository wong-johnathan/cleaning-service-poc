import React from "react";
import { Col, Row } from "reactstrap";

const ContractorInfo = ({ type, value }) => {
  return (
    <>
      <Row className="mt-2">
        <Col className="text-weight-bold">{type}</Col>
      </Row>
      <Row>
        <Col style={{ fontSize: "0.8rem" }}>{value}</Col>
      </Row>
    </>
  );
};

export default ContractorInfo;
