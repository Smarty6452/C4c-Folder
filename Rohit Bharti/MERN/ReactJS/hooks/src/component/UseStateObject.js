import React, { useState } from 'react'

const UseStateObject = () => {
    const [myObject, setMyObject] = useState({
        myName:"Rohit", myAge: 21, degree: "B-tech"
    })
    const changeObject = () => {
        setMyObject({...myObject, myName: "Rohit Kumar" })
    }
  return (
    <>

    <h1>Name: {myObject.myName} Age: {myObject.myAge} & Degree: {myObject.degree} </h1>
    <button className='btn' onClick={changeObject}>Update</button>
    </>
  )
}

export default UseStateObject