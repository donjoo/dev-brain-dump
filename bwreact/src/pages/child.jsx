import React from "react";

function ChildComponent({ onClick }) {
  console.log("ChildComponent rendered!");

  return <button onClick={onClick}>Click Me</button>;
}

export default React.memo(ChildComponent); // Memoizing the component
