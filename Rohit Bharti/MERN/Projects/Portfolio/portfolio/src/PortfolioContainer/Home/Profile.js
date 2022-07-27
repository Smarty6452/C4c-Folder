import React from "react";
import Typical from "react-typical";
import "./Profile.css";
// import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Profile = () => {
  return (
    <>
      <Container className="profile-container fluid  ">
        <Row className="profile-parent noGutters">
          <Col className="profile-details">
            {" "}
            <div className="colx">
              <div className="colx-icon">
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-google-plus"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, I'M <span className="highlighted-text">Rohit</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text ">
                {" "}
                <h1>
                  <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                      "Passionate Dev",
                      1000,
                      "Full Stack Dev !",
                      1000,
                      "MERN Stack Dev",
                      1000,
                      "React Dev",
                      1000,
                      "designer",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Innovative optimized solution seeker Knack of building
                  applications with front and back end operations
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button type="button " class=" primary-btn ">
                {" "}
                Hire Me{" "}
              </button>
              <a href="" download="Rohit resume.pdf">
                <button className=" highlighted-btn ">Get Resume</button>
              </a>
            </div>
          </Col>
          <Col className="profile-picture">
            <div className="profile-picture-background"></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
