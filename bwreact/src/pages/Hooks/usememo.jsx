// useMemo is a React Hook that lets you memoize a computed value — that is, 
// cache the result of a function until its dependencies change.



// 📦 Why Use useMemo?

// To avoid expensive recalculations on every render.

// Imagine:

//     A component re-renders frequently (e.g., typing in a form).

//     But a calculation inside it is slow (e.g., filtering a large list).

//     You only want to recompute that result when its inputs change — not on every keystroke.

// That’s what useMemo solve

// 🧪 When to Use useMemo

// ✅ Use it when:

//     You’re doing slow calculations or heavy filtering/sorting

//     You’re working with large data sets

//     You’re optimizing re-renders in frequently updated components

// ❌ When Not to Use useMemo

// Avoid it when:

//     The calculation is fast and cheap

//     Dependencies change every time anyway

//     You’re using it "just in case" — don’t prematurely optimize

// It adds complexity and memory usage, so use only when there's a performance concern.



// ✅ 3. Pros and Cons of useMemo
// ✅ Pros
// Benefit	Explanation
// ✅ Performance optimization	Avoids re-running expensive calculations
// ✅ Prevents unnecessary re-renders	Helps maintain stable values (especially objects)
// ✅ Better UX	No lags on user interaction
// ❌ Cons
// Drawback	Explanation
// ❌ Overuse can hurt performance	Memoizing everything wastes memory and CPU
// ❌ Harder to read	Adds extra logic, especially with complex deps
// ❌ Doesn’t persist across renders	Memoization resets when component unmounts

// ⚠️ Use only when necessary — don't prematurely optimize!



// Simple Example

import React, { useState, useMemo } from 'react';

function SlowCalculationExample({ num }) {
  const [count, setCount] = useState(0);

  const slowDouble = useMemo(() => {
    console.log("🧮 Calculating...");
    let i = 0;
    while (i < 2_000_000_000) i++; // simulate slow task
    return num * 2;
  }, [num]);

  return (  
    <div>
      <p>Slow Double: {slowDouble}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
}




























































import { useMemo, useState } from "react";



function ExpensiveComponent({numbers}) {
  const sum = useMemo(() => {
    console.log('calculating...')
    return numbers.reduce((acc,num) => acc + num,0)
  }, [numbers])
};


function Appq(){
  const [count,setCount] = useState(0);
  const numbers = useMemo(()=>[1,2,3,4,5],[])

  return (
    <>
    <ExpensiveComponent numbers={numbers} />
    <button onClick={() => setCount(count + 1)}>render</button>
    <p>Render Count: {count}</p>

     </>
  )
}



export default Appq

function expensive({number}) {
  const [count,setCount] = useState(0);

  const slowCalculation = (num) => {
    console.log('Calculating....');
    for (let i = 0; i< 1e9; i++){}
    return num * 2;
  };

  const double = useMemo(() => slowCalculation(number),[number]);

  return (
    <div>
      <p>Double: {double}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <p>render count : {count}</p>
    </div>
  );
}



