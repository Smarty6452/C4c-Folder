import React, { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      myName: "Rohit",
      age: 21,
    },
    {
      id: 1,
      myName: "Bharti",
      age: 21,
    },
    {
      id: 2,
      myName: "kumar",
      age: 20,
    },
    {
      id: 3,
      myName: "singh",
      age: 20,
    },
  ];
  const [myArray, setmyArray] = useState(bioData);

  console.log(bioData);

  const clearArray = () => {
    setmyArray([]);
  };
  return (
    <div>
      {myArray.map((currElm) => (
        <h1 key={currElm.id} className="h1style">
          Name: {currElm.myName} & Age: {currElm.age}
        </h1>
      ))}
      <button className="btn" onClick={clearArray}>
        clear
      </button>
    </div>
  );
};

export default UseStateArray;
