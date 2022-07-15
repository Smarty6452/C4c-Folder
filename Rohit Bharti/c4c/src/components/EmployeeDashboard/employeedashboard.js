import React from "react";
import { MdSpeed } from "react-icons/md";

import { Row, Col, Container } from "react-bootstrap";

import Sidebar from "../sidebar";

import Card from "../card";

const employeedashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col md={10} id="page-content-wrapper">
          <div className="dashboard">
            <MdSpeed size={23} className="MdSpeed" />
            <span className="fw-bold ">Dashboard</span>
          </div>
          <Card />

          <Row>
            <Col className="attendance-wrapper">
              <span className="attendance-status">Attendance</span>
            </Col>
          </Row>

          <Row id="clockfunctionality">
            <Col lg={6} className="clock-wrap">
              <div className="clock-status">CLOCK IN</div>
              <div className="text-muted">09:47 AM</div>
              <Row>
                <Col className="workin-place-wrapper">
                  <div className="work-status">Working From</div>
                  <div className="text-muted">Office</div>
                </Col>
              </Row>
            </Col>

            <Col lg={6} className="clock-wrap">
              <div className="clock-status">CLOCK IN IP</div>
              <div className="text-muted">106.201.220.202</div>
              <Row>
                <Col lg={6}>
                  <div className="clock-btn d-flex">
                    <button className="btn-primary ">CLock Out</button>
                    <button className="btn-success">CLock In</button>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default employeedashboard;
