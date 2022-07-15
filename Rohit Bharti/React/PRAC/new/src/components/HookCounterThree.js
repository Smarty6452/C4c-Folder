import React, { useState } from "react";

const HookCounterThree = () => {
  const [name, setName] = useState({ FirstName: "", LastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.FirstName}
        onChange={(e) => setName({ FirstName: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setName({ LasttName: e.target.value })}
      />
      <h2>This is your {name.FirstName}</h2>
      <h2>This is your {name.LastName}</h2>
    </div>
  );
};

export default HookCounterThree;
