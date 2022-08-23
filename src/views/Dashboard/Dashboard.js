import React from "react";
import { Col, Row } from "reactstrap";
import ContractorHighlight from "../../components/ContractorHighlight/ContractorHighlight";
import ContractorList from "../../components/ContractorList/ContractorList";

const Dashboard = () => {
  return (
    <>
      <Row className="justify-content-between mx-0 w-100 my-2 align-items-end d-flex">
        <Col xs="auto">
          <h3 className="mb-0">Recent</h3>
        </Col>
        <Col xs="auto">
          <a href="https://google.com.sg">See All</a>
        </Col>
      </Row>
      <Row className="mx-0 my-2">
        <ContractorHighlight />
      </Row>
      <Row className="mx-0 my-2">
        <Col>
          <h3 className="mb-0">Contractors</h3>
        </Col>
      </Row>
      <Row className="mx-0 my-2">
        <ContractorList />
      </Row>
    </>
  );
};

export default Dashboard;
