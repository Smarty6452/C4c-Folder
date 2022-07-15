import React from "react";
import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
// import "./MidBar.css";
import Line from "./Line";
import {
  SearchOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingOutlined,
  PhoneOutlined 
} from "@ant-design/icons";

const MidBar = () => {
  return (
    <div className="MidBar">
      <Navbar className="NavBar" bg="white" expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">logo</Navbar.Brand> */}

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="divide">
                <div className="d-flex">
                  <NavDropdown title="ENG" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">ENG</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">FRA</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="USD" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">EUR</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">USD</NavDropdown.Item>
                  </NavDropdown>
                  <div className="cartSection">
                    <ul>
                      <li>Checkout</li>
                      <li>Cart</li>
                      <li>contact Us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Nav>
            <div>
              <div className="d-flex">
                <div className="phone">
                <PhoneOutlined  rotate={90} />
                </div>
              
              <h6 style={{'margin-top': '8px'}}> +123 5678 890</h6>
              <div className="d-flex icons ">
                <ul>
                  <li>
                    <SearchOutlined />
                  </li>
                  <li>
                    <UserOutlined />
                  </li>
                  <li>
                    <HeartOutlined />
                  </li>
                  <li>
                   
                    <ShoppingOutlined />
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
           
      </Navbar>
      <Line />
    </div>
  );
};

export default MidBar;
