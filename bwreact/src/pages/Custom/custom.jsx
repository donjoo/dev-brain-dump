//     A custom hook is a JavaScript function whose name starts with use 
// and that can call other hooks like useState, useEffect, useReducer, etc.

// Custom hooks help you:

//     Reuse stateful logic across components

//     Keep components clean and focused

//     Separate concerns (e.g. fetching, forms, localStorage, etc.)






//     useDebugValue is a React Hook used exclusively for debugging custom hooks in React DevTools.

// It lets you label and display a value inside DevTools, helping you understand what a custom hook is returning or doing.





import { useState } from 'react';


function useToggle(initialValue = false){
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue((prev) => !prev);
  return [value,toggle];
}


function App(params) {

  const [isOpen, toggleOpen] = useToggle();

  return (
    <>
    <p>{isOpen ? 'Open': 'Closed'}</p>
      <button onClick={() => toggleOpen()} >click</button>
    </>
  )
  
}

export default App;