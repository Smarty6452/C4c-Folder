import React from "react";
import Table from "react-bootstrap/Table";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const table = () => {
  return (
    <Container fluid className={"no-gutters mx-0 px-0"}>
    <Row>
      <Col><div>
      <Table className="main-table" >
        <thead>
          <tr>
            <th>#</th>
            <th>EMPLOYEE ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>USER ROLE</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>EMP001</td>
            <td>Kiran Gohel</td>
            <td>abc@abcdefg.com</td>
            <td>EMPLOYEE</td>
            <td>Active</td>
            <td>0</td>
          </tr>
          <tr>
          <td>2</td>
            <td>EMP002</td>
            <td>Ashish Sharma</td>
            <td>abc@xya.com</td>
            <td>EMPLOYEE</td>
            <td >Active</td>
            <td>0</td>
          </tr>
          <tr>
          <td>3</td>
            <td>EMP003</td>
            <td>Dishank Shah</td>
            <td>dishank@admin.com</td>
            <td>EMPLOYEE</td>
            <td>Active</td>
            <td>0</td>
          </tr>
          <tr>
          <td>4</td>
            <td>EMP004</td>
            <td>Oza Hasmukh</td>
            <td>harshoza97@gmai.com</td>
            <td>EMPLOYEE</td>
            <td>Active</td>
            <td>0</td>
          </tr>
          <tr>
          <td>5</td>
            <td>EMP005</td>
            <td>Praveen Patel</td>
            <td>employee@example.com</td>
            <td>EMPLOYEE</td>
            <td>Active</td>
            <td>0</td>
          </tr>
          <tr>
          <td>6</td>
            <td>EMP006</td>
            <td>Anita Rao</td>
            <td>admin@examplel.com</td>
            <td>EMPLOYEE</td>
            <td>Active</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>
    </div></Col>
    </Row>
  </Container>
    
  );
};

export default table;
