import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <div className="firstBar">
        <Navbar className="NavBar" sticky="top" bg="light" expand="lg">
          <Container>
            {/* <Navbar.Brand href="#home">logo</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div>
                  <h4>
                    Use <b>PORTO10</b> Coupon Code{" "}
                  </h4>

                  <p>* Minimal Purchase Price</p>
                </div>
              </Nav>
              <div>
                <h4>FREE NEXT DAY DELIVERY*</h4>
                <p className="order_text">
                  * On Business Days - On Orders Over $25
                </p>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
