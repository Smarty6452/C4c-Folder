import React, {useState} from "react";

const HookCounterTwo = () => {
    const initialCount = 0 ;
    const[count, setCount] = useState(0);

    function IncrementFive() {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }
  return (
    <>
      <div>let count: {count}</div>
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <button onClick={()=>setCount(count - 1)}>decrement</button>
      <button onClick={IncrementFive}>Increment Five</button>
    </>
  );
};

export default HookCounterTwo;
