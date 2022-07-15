import React, { useState } from "react";


const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>header</div>
      <button onClick={() => setCount(count + 1)}>count{count}</button>
    </>
  );
};

export default Header;
