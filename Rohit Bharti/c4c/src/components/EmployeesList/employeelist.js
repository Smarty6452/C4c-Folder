import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import Sidebar from "../sidebar";
import Uploadimage from "./uploadimage";
import Tag from "./tag";

import { AiOutlineUser } from "react-icons/ai";
import {IoInformationCircle } from "react-icons/io5";
import {IoIosCheckmark } from "react-icons/io";
import { Input, Select } from "antd";

const { TextArea } = Input;
const { Option } = Select;

const employeelist = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col md={10} id="page-content-wrapper">
          <div className="employee-list">
            <AiOutlineUser size={23} className="sidebar-icon" />
            <span className="fw-bold ">Employees</span>
          </div>

          <Row>
            <Col className="employee-info-wrapper">
              <span className="add-info">Add Employee Info</span>
            </Col>
          </Row>

          <Row className="employee-details">
            <Col md={3}>
              <div className="title">Employee ID* <IoInformationCircle className="info-circle"/></div>
              <div className="field">
                <Input />
              </div>
            </Col>

            <Col md={3}>
              {" "}
              <div className="title">Employee Name </div>
              <div className="field">
                <Input />
              </div>
            </Col>
            <Col md={3}>
              {" "}
              <div className="title">Employee Email </div>
              <div className="field">
                <Input />
              </div>
              <p>Employee will login using this email</p>
            </Col>
            <Col md={3}>
              <div className="title">Employee Email </div>
              <div className="field">
                <Input.Password
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </div>
              <p>Employee will login using this password</p>

              <Form.Check type="checkbox" label="Generate Random Password" />
            </Col>
          </Row>

          <Row className="more-info">
            <Col md={3}>
              <div className="title">Slack Username</div>{" "}
              <div className="field">
                <Input addonBefore="@" allowClear />
              </div>
            </Col>
            <Col md={3}>
              {" "}
              <div className="title">Joining Date*</div>{" "}
              <div className="field">
                {" "}
                <Input />
              </div>
            </Col>
            <Col md={3}>
              <div className="title">Exit Date</div>{" "}
              <div className="field">
                {" "}
                <Input />
              </div>
            </Col>
            <Col md={3}>
              <div className="title">Gender</div>

              <div className="field">
                {" "}
                <Input.Group compact>
                  <Select defaultValue="Male" className="gender">
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                  </Select>
                </Input.Group>
              </div>
            </Col>
          </Row>
          <Row className="textbox">
            <Col>
              <>
                <div className="text-title">Address</div>

                <TextArea rows={4} maxLength={6} />
              </>
            </Col>
          </Row>

          <Row className="tag">
            <Col>
              <Tag />
            </Col>
          </Row>

          <Row className="upload">
            <Col>
              <div className="title">Profile Picture</div>
              <Uploadimage />
              <div>
                <button className="select-btn">Select Image</button>
              </div>
              <div>
                <button className="save-btn"><IoIosCheckmark/>Save</button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default employeelist;
