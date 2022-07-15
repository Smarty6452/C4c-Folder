import React from "react";
import Card from "react-bootstrap/Card";

const attendancecard = (props) => {
  return (
    <div>
      {" "}
      <Card className="attend-card">
        <Card.Body>
          {props.Icon}
          <h6>{props.title}</h6>
       
        </Card.Body>
      </Card>
    </div>
  );
};

export default attendancecard;
