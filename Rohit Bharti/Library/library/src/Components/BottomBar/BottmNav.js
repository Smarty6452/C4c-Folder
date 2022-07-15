import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import logo from "../../assets/img/logo.png"

const BottmNav = () => {
  return (
    <>
    <Navbar className="NavBar " bg="white" expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">logo</Navbar.Brand> */}

          <Navbar.Collapse id="basic-nav">
            <Nav className="me-auto">
              <div className="divide">
                <div className="d-flex">
                <div className="home"><span>Home</span></div>
                  <NavDropdown title="Shop" id="basic-nav">
                    <NavDropdown.Item href="#action/3.1">ENG</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">FRA</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Products" id="basic-nav">
                    <NavDropdown.Item href="#action/3.1">EUR</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">USD</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Pages" id="basic-nav">
                    <NavDropdown.Item href="#action/3.1">ENG</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">FRA</NavDropdown.Item>
                  </NavDropdown>
                
                
                </div>
              </div>
            </Nav>
            <div>
              <div className="d-flex">

                <div className="phone">
               <img src={logo} alt="" srcset="" />
                </div>
              
              
              <div className="d-flex icons ">
                <ul>
                  <li>
                    Home
                  </li>
                  <li>
                   About
                  </li>
                  <li>
                   Contact Us
                  </li>
                  <li>
                   
                    Buy Porto!
                  </li>
                </ul>
              </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
           
      </Navbar>
    </>
  );
};

export default BottmNav;
