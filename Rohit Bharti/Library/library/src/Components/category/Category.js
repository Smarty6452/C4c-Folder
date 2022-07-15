import React from "react";
import Stack from "react-bootstrap/Stack";


const category = () => {
  return (
    <>
      <div className="category ">
        <span>SHOP BY CATEGORY</span>

        <Stack className="stack" direction="horizontal" gap={3}>
          <div>
            <button className="btn test">APPLY </button>
          </div>
          <div>
            <button className="btn">BRUSHES</button>
          </div>
          <div>
            <button className="btn">CHEEK</button>
          </div>
        </Stack>
        <Stack className="stack" direction="horizontal" gap={3}>
          <div>
            <button className="btn">EYEBROW</button>
          </div>
          <div>
            <button className="btn">EYES</button>
          </div>
          <div>
            <button className="btn">FACE</button>
          </div>
        </Stack>
      </div>
    </>
  );
};

export default category;
