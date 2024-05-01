"use client";

import React from "react";

function Dibapress() {
  const [count, setCount] = React.useState(0);

  const count1 = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>Dibapress</div>
      <div>count: {count}</div>
      <button onClick={count1}>Count+1</button>
    </div>
  );
}

export default Dibapress;
