import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const signupForm = (props) => {
  return (
    <>
      <Form className="signupForm form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="input"
            type="text"
            placeholder="Company Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="input"
            type="email"
            placeholder="Email Address"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="input"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="input"
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          {props.name}
        </Button>
        <Form.Text className="text-muted d-flex justify-content-center align-item-center mt-4">
          Already have a account ? <Link to="/">Login</Link>
        </Form.Text>
      </Form>
    </>
  );
};

export default signupForm;
