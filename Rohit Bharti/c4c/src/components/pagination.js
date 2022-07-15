import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
let string;
let number;
let items = []


items.push(
    <Pagination.Item key={string} >
      {string ="Previous"} 
    </Pagination.Item>, 
     <Pagination.Item key={number} active>
      {number=1} 
    </Pagination.Item>, 
      <Pagination.Item key={string}>
      {string="next"} 
    </Pagination.Item>, 
  );

const pagination = () => {
  return (
    <div>
    <Pagination size="sm" className="items">{items} </Pagination>
  </div>
  )
}

export default pagination