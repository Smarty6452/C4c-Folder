import React from "react";
import { MdSpeed } from "react-icons/md";

import { Row, Col, Container } from "react-bootstrap";

import Sidebar from "../sidebar";

import Card from "../card";

const admin = () => {
  return (
    <Container fluid className={"no-gutters mx-0 px-0"}>
      <Row>
        <Col md={2} className="sidebar">
          <Sidebar />
        </Col>
        <Col md={10} className="m-3 dashboard-content ">
          <div className="title fw-bold mb-3">
            <MdSpeed className="sidebar-icon mb-1" /> Dashboard
          </div>
          <Card />
        </Col>
      </Row>
    </Container>
  );
};

export default admin;
