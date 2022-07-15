import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import login_signup_background from "../../assets/img/login_signup_background.png";
import Logo from "../logo";
import Formsrc from "./form";

const login = () => {
  return (
    <section className="page">
      <Container fluid className={"no-gutters mx-0 px-0"}>
        <Row>
          <Col lg={5}>
            <div className="title-section">
              <div className="logo-comp">
                <Logo />
              </div>
            </div>

            <Formsrc name="Login"/>
          </Col>

          <Col className="image " lg={7}>
            <img
              className="login-signup-img h-100"
              src={login_signup_background}
              alt="backgroundImg"
              srcset=""
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default login;
