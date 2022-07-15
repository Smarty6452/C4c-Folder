import React from "react";
import Card from "react-bootstrap/Card";
import {  AiOutlineUserAdd } from "react-icons/ai";
import {   BiTime  } from "react-icons/bi";
import { BsBookHalf  } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const card = () => {
  return (
    <>
  <Container fluid className={"no-gutters mx-0 px-0 card-section"}>
      <Row>
      <Col>
      <Card>
      <Card.Body className="d-flex ">
          <div className="logo bg-secondary">
        <  AiOutlineUserAdd  />
            </div>
            <div className="content d-flex flex-column justify-content-center align-item-center">
            <h6> Total Employees</h6>
            <span >6</span>
            </div>
          </Card.Body>
    </Card>
      </Col>

        <Col> <Card>
      <Card.Body className="d-flex">
          <div className="logo bg-info">
          
            < BiTime/> 
            </div>
            <div className="content ">
            <h6 className=""> Hours Logged</h6>
            <span>377 hrs 54 mins</span>
            </div>
          </Card.Body>
    </Card></Col>
        <Col> <Card>
        <Card.Body className="d-flex">
           
           <div className="logo bg-danger">
            <BsBookHalf />  
           </div>
           <div className="content">
           <h6> Today Attendance</h6>
           <span>33.33% (2/6)</span>
           </div>
           
           
         </Card.Body>
    </Card></Col>
      </Row>
    </Container>
    </>
  );
};

export default card;
