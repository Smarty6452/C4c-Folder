import React, {useState} from "react";

const Todo = () => {
    const bioData = [
        {
            id:0, myName:"Rohit", age: 21
        }, {
            id:1, myName:"Bharti", age: 21
        },
        {
            id:2, myName:"kumar", age: 20
        },
        {
            id:3, myName:"singh", age: 20
        }
    ]
    const [myArray, setmyArray] = useState(bioData);

  console.log(bioData);

  const clearArray = () => {
    setmyArray([]);
  };
  const removeElem = (id) => {
    // alert(id)
    const myNewArray = myArray.filter((currElem) => {
        return currElem.id !== id;
    })
    setmyArray(myNewArray)
  }
  return (

    <div>
      {myArray.map((currElm) =>  (
        
        <h1 key={currElm.id} className="h1style">
          Name: {currElm.myName} & Age: {currElm.age}
          <button className="btnInner" onClick={ () => removeElem(currElm.id)}>remove</button>
        </h1>
      ))
      
      }
      <button className="btn" onClick={clearArray}>
        clear
      </button>
    </div>
  );
};

export default Todo;
