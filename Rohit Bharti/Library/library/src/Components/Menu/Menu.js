import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "react-bootstrap/Card";


const Menu = () => {
  return (
    <Container>
      <Row md={4}>
        <Card className="Card">
        
          <Card.Body className="upper">
            <Card.Title>TOOLS, BRUSHES</Card.Title>
            <Card.Text>Beauty Products</Card.Text>
          </Card.Body>
          <div className="bottom">
            <span>five star</span>
            <h5>$99.00</h5>
          </div>
       
        </Card>
        

        <Card className="Card">
          {/* <Card.Img variant="top"  /> */}
          <Card.Body className="upper">
            <Card.Title>TOOLS, BRUSHES</Card.Title>
            <Card.Text>Beauty Products</Card.Text>
          </Card.Body>
          <div className="bottom">
            <span>five star</span>
            <h5>$99.00</h5>
          </div>
        </Card>

        <Card className="Card">
          {/* <Card.Img variant="top"  /> */}
          <Card.Body className="upper">
            <Card.Title>TOOLS, BRUSHES</Card.Title>
            <Card.Text>Beauty Products</Card.Text>
          </Card.Body>
          <div className="bottom">
            <span>five star</span>
            <h5>$99.00</h5>
          </div>
        </Card>
        <Card className="Card" style={{ "border-right": "0" }}>
          {/* <Card.Img variant="top"  /> */}
          <Card.Body className="upper">
            <Card.Title>TOOLS, BRUSHES</Card.Title>
            <Card.Text>Beauty Products</Card.Text>
          </Card.Body>
          <div className="bottom">
            <span>five star</span>
            <h5>$99.00</h5>
          </div>
        </Card>
        <Card className="Card">
          {/* <Card.Img variant="top"  /> */}
          <Card.Body className="upper">
            <Card.Title>TOOLS, BRUSHES</Card.Title>
            <Card.Text>Beauty Products</Card.Text>
          </Card.Body>
          <div className="bottom">
            <span>five star</span>
            <h5>$99.00</h5>
          </div>
        </Card>
        <Card className="Card">
          {/* <Card.Img variant="top"  /> */}
          <Card.Body className="upper">
            <Card.Title>TOOLS, BRUSHES</Card.Title>
            <Card.Text>Beauty Products</Card.Text>
          </Card.Body>
          <div className="bottom">
            <span>five star</span>
            <h5>$99.00</h5>
          </div>
        </Card>
        <Card className="Card">
          {/* <Card.Img variant="top"  /> */}
          <Card.Body className="upper">
            <Card.Title>TOOLS, BRUSHES</Card.Title>
            <Card.Text>Beauty Products</Card.Text>
          </Card.Body>
          <div className="bottom">
            <span>five star</span>
            <h5>$99.00</h5>
          </div>
        </Card>
        <Card className="Card" style={{ "border-right": "0" }}>
          {/* <Card.Img variant="top"  /> */}
          <Card.Body className="upper">
            <Card.Title><h6>TOOLS, BRUSHES</h6></Card.Title>
            <Card.Text style={{'font-size}':'8px'}}>Beauty Products</Card.Text>
          </Card.Body>
          <div className="bottom">
            <span>five star</span>
            <h5>$99.00</h5>
          </div>
        </Card>
      </Row>
    </Container>
  );
};

export default Menu;
