import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ButtonGroup } from 'react-bootstrap';


const dropup = () => {
  return (
    <>
    <div className="mb-2">
      {['up'].map((direction) => (
        <DropdownButton
          as={ButtonGroup}
          key={direction}
          id={`dropdown-button-drop-${direction}`}
          drop={direction}
          variant="secondary"
          title={`  ${direction} `}
        >
          <Dropdown.Item eventKey="1">Admin</Dropdown.Item>
          <Dropdown.Item eventKey="2">Login as employee</Dropdown.Item>
          <Dropdown.Item eventKey="3">Log <output></output></Dropdown.Item>
          <Dropdown.Divider />
          
        </DropdownButton>
      ))}
    </div>

   
  </>
  )
}

export default dropup