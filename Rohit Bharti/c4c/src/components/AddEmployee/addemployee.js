import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Row, Col, Container } from "react-bootstrap";
import Table from "../table";
import Pagination from "../pagination";
import Employeecard from "./employeecard";
import Dropdown from "./dropdown";

import Sidebar from "../sidebar";

const addemployee = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col md={10} id="page-content-wrapper">
          <div className="employee-section">
            <div className="employees ">
              <span>
                <AiOutlineUser size={23} className="employe-icon" />
                Employees
              </span>
              <button>Add New Employee +</button>
            </div>
            <Row className="employee-detail">
              <Col md={6}>
                <Employeecard name="Total Employees" />
              </Col>

              <Col md={6}>
                <Employeecard name="Not Working on a Project" />
              </Col>
            </Row>

            {/* entries  */}
            <Row>
              <Col>
                <div className="entries">
                  <span>show <Dropdown /> entries</span>
                  <div>
                    search <input type="text" />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
              <Table />
              </Col>
            </Row>
            {/* table  */}
  
            <Row>
              <Col>
                <div className="employees ">
                  <span>Showing 1 to 6 of 6 entries</span>
                  <div className="pagniation">
                    <Pagination />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default addemployee;
