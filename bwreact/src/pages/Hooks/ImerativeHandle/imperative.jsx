

// This hook lets you control what methods or properties the parent gets access to through the ref.

// You use it inside a forwardRef component.



import React, {forwardRef, useRef, useImperativeHandle} from 'react';


const CustomImput = forwardRef((props, ref) => {
  const inRef = useRef()

  useImperativeHandle(ref, () => ({
    focus: () => inRef.current.focus(),
    clear: () => (inRef.current.value ='')
  }));



  
  return <input ref = {inRef} {...props}/>;
});





function App() {
  const inputRef = useRef()

  return (
    <>
    <CustomImput ref = {inputRef} placeholder='heyy'/>
      <button onClick={() => inputRef.current.focus()}>Focus Input </button>
   <button onClick ={() => inputRef.current.clear()} >Clear</button>
    </>
  )
}

export default App;