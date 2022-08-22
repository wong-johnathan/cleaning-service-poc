import React from "react";
import { Button, Card, Col, Container, Row } from "reactstrap";
import { faker } from "@faker-js/faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCalendar,
  faHeart,
  faHome,
  faMoneyBill,
  faSearch,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import background from './img.png'

const style = {
  button: {
    border: "1px #f3f3f3 solid",
    borderRadius: "0.7rem",
    width: "40px",
    height: "40px",
    boxShadow: "0 0 1rem 1rem rgba(0,0,0,.04)",
    backgroundColor: "white",
    color: "black",
  },
};
const App = () => {
  return (
    <Container
      style={{
        backgroundColor: "#f1f8ff",
        maxWidth: "550px",
        border: "1px solid #f1f1f1",
      }}
      className="pt-4 px-4 vh-100 d-flex flex-column"
    >
      <Row className="justify-content-between align-items-center">
        <Col xs="auto" className="text-center">
          <Button style={style.button}>
            <FontAwesomeIcon icon={faBell} color="gray" />
          </Button>
        </Col>
        <Col
          xs="auto"
          className="text-center font-weight-bold"
          style={{ lineHeight: 1.2 }}
        >
          London
          <br />
          <span className="text-muted" style={{ fontSize: "0.9em" }}>
            156 offers
          </span>
        </Col>
        <Col xs="auto" className="text-center">
          <Button style={style.button}>
            <FontAwesomeIcon icon={faSearch} color="gray" />
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-between align-items-end mt-4">
        <Col
          xs="auto"
          className="font-weight-bold"
          style={{ fontSize: "1.5rem" }}
        >
          Recent
        </Col>
        <Col xs="auto" className="text-right">
          <a href="www.google.com" style={{ textDecoration: "none" }}>
            See All
          </a>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Card
            style={{
              background: "#3f9feb",
              borderRadius: "1.8rem",
              border: "0px",
              padding: "1rem 2rem",
              // backgroundImage:`url(${background})`
            }}
          >
            <div style={{position:'absolute',backgroundImage:`url(${background})`,height:"100%",width:'100%',top:0,left:0,borderRadius:'1.8rem',opacity:0.05,backgroundSize:'150%'}}/>
            <Row>
              <Col xs="auto" className="p-0" style={{ color: "white" }}>
                <img
                  src={faker.image.avatar()}
                  width="55px"
                  height="55px"
                  style={{ borderRadius: "0.8rem" }}
                />
              </Col>
              <Col xs="auto" style={{ color: "white" }}>
                {faker.name.firstName()} {faker.name.lastName()}
                <br />
                {faker.company.companyName()}
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
        </Col>
      </Row>
      <Row className="justify-content-between align-items-end mt-4">
        <Col
          xs="auto"
          className="font-weight-bold"
          style={{ fontSize: "1.5rem" }}
        >
          Search Best Cleaner
        </Col>
      </Row>
      <Row
        className="justify-content-between align-items-end mt-3 w-100"
        style={{
          whiteSpace: "nowrap",
          display: "inline-block",
          overflowX: "scroll",
        }}
      >
        <Button
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid #00000008",
            borderRadius: "0.8rem",
            width: "170px",
            margin: "0.25rem",
          }}
        >
          <FontAwesomeIcon icon={faStar} /> High Rating
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid #00000008",
            borderRadius: "0.8rem",
            width: "170px",
            margin: "0.25rem",
          }}
        >
          <FontAwesomeIcon icon={faMoneyBill} /> Up to $50
        </Button>
      </Row>
      <Row className="mt-2" style={{ flex: 1, overflowY: "scroll" }}>
        {[...new Array(15)].map((a, i) => {
          const rating = Math.ceil(Math.random() * 5);
          return (
            <Row className="mb-2 m-0 p-1" style={{ height: "120px" }} key={i}>
              <Card
                style={{ backgroundColor: "white", borderRadius: "1.25rem" }}
                className="p-3 h-100"
              >
                <div  style={{zIndex:1,position:'absolute',backgroundImage:`url(${background})`,height:"100%",width:'100%',top:0,left:0,borderRadius:'1.8rem',opacity:0.05,backgroundSize:'100% 150%'}}/>
                <Row className="h-100 align-items-center">
                  <Col xs="auto">
                    <img
                      src={faker.image.avatar()}
                      height="70px"
                      width="70px"
                      style={{ borderRadius: "0.8rem" }}
                    />
                  </Col>
                  <Col>
                    {faker.name.firstName()} {faker.name.lastName()}
                    <br />
                    <span style={{ fontSize: "0.75rem" }}>
                      {faker.company.companyName()}
                    </span>
                    <br />
                    <span style={{ fontSize: "0.75rem" }}>
                      {[...new Array(rating)].map(
                        (a, i) => (
                          <FontAwesomeIcon
                            style={{ color: "gold" }}
                            key={i}
                            icon={faStar}
                          />
                        )
                      )}
                      {[...new Array(5-rating)].map(
                        (a, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                          />
                        )
                      )} {rating}.0 ({Math.ceil(Math.random()*10000)})
                    </span>
                  </Col>
                </Row>
              </Card>
            </Row>
          );
        })}
      </Row>
      <Row
        style={{
          height: "65px",
          backgroundColor: "white",
          margin: "0 -25px",
          padding: "1rem",
        }}
        className="align-items-center"
      >
        <Col className="text-center">
          <FontAwesomeIcon icon={faHome} color="gray" />
        </Col>
        <Col className="text-center">
          <FontAwesomeIcon icon={faHeart} color="gray" />
        </Col>
        <Col className="text-center">
          <FontAwesomeIcon icon={faUser} color="gray" />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
