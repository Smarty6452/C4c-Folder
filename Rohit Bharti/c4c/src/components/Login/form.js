import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const form = (props) => {
  return (
    <div className="form">
      <Form className=" form ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className="input " type="email" placeholder="Email" name="email"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="input"
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <div className="formcheck d-flex justify-content-between ">
            <Form.Check type="checkbox" label="Remember me" />
            <a className="text-muted" href="#">
              <RiLockPasswordFill className="mb-1 " />
              Forgot Password ?
            </a>
          </div>
        </Form.Group>
        <Button className="btn" type="submit" id="login" value="login">
        <Link className="login-link" to="/employeedashboard"> {props.name}</Link>  
        </Button>
        <Form.Text className="text-muted d-flex justify-content-center align-item-center mt-4">
          Don't have a account ? <Link to="/signup">Sign Up</Link>
        </Form.Text>
      </Form>
    </div>
  );
};

export default form;
