import React, { useMemo, useState } from "react";

function ExpensiveComponent({ number }) {
  function slowFunction(num) {
    console.log("Running slow function...");
    
    return num * 2; // Simulating an expensive operation
  }

  const result = useMemo(() => slowFunction(number), [number]);

  return <h2>Result: {result}</h2>;
//   return <h2>Result: {slowFunction(number)}</h2>;
}

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpensiveComponent number={5} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}
