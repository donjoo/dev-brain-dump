import React, { useState, useCallback } from "react";
import ChildComponent from "./child";

function Parent() {
  const [count, setCount] = useState(0);

  // Memoized function (stays the same across renders)
  const handleClick = () => {
    console.log("Button clicked!");
  }

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Parent;
