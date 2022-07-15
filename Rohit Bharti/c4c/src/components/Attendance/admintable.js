import React from 'react'
import Table from 'react-bootstrap/Table';

const admintable = () => {
  return (
    <div><Table className='admin-table' >
    <thead>
      <tr>
        <th>Late</th>
        <th>Half Day</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Clock IN</th>
       <th>Clock Out</th>
        <th>others</th>
       
      </tr>
      <tr>
        <td>02:35 PM</td>
        <td>02:36 PM</td>
        <td>
        IP
        
        
        </td>
       
      </tr>
      <tr>
        <td>02:36 PM</td>
        <td ></td>
         <td >Ip out</td>
        
      </tr>
    </tbody>
  </Table></div>
  )
}

export default admintable