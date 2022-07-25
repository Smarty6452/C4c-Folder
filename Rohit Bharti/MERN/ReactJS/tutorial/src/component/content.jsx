import React from 'react'
function formatName(user) {
  return user.firstName + ' ' + user.lastName;

}

const user = {
  firstName: "Rohit",
  lastName: 'Bharti'
}

const content = () => {
  return (
   <h1>Hello, {formatName(user)}!</h1>
  )
}

export default content