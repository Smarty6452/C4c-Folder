import React from "react";
import Card from "react-bootstrap/Card";

const employeecard = (props) => {
  return (
    <Card>
      <Card.Body >
        <div>
          <h6>{props.name} </h6>
        </div>
      </Card.Body>
    </Card>
  );
};

export default employeecard;
