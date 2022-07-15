import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Dropdown from "../AddEmployee/dropdown";

import Sidebar from "../sidebar";
import Datepicker from "./datepicker";
import Attendancecard from "./attendancecard";
import Admintable from "./admintable";
import { AiOutlineUser } from "react-icons/ai";
import { RiNumber6, RiNumber2, RiNumber4 } from "react-icons/ri";

const attendance = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col md={10} id="page-content-wrapper">
          <div className="dashboard">
            <AiOutlineUser size={23} className="att-icon" />
            <span className="fw-bold ">Attendance</span>
          </div>

          <Row>
            <Col className="attendance-date ">
              <span className="attendance-status ">Attendance</span>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="title">Attendance Date</div>
              <Datepicker />
            </Col>
          </Row>

          <Row className="attendance-card">
            <Col lg={4}>
              <Attendancecard
                title={"Total EMmployees"}
                Icon={<RiNumber6 size={35} className="icon" />}
              />
            </Col>
            <Col lg={4}>
              <Attendancecard
                title={"Present"}
                Icon={<RiNumber2 size={35} className="icon-2" />}
              />
            </Col>
            <Col lg={4}>
              <Attendancecard
                title={"Days absent"}
                Icon={<RiNumber4 size={35} className="icon-4" />}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="entries">
                <span>
                  show <Dropdown /> entries
                </span>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="attendance-date ">
              <span className="attendance-status ">admin</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <Admintable />
            </Col>
          </Row>
          <Row>
            <Col className="attendance-date ">
              <span className="attendance-status ">Dishank Shah</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <Admintable />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default attendance;
