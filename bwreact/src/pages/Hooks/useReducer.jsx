// 🧠 What is useReducer?

//     useReducer is a React Hook used to manage state transitions in a 
// predictable way, using a reducer function — just like Redux, but built into React.

// It's perfect when:

//     You have multiple related state values

//     State updates depend on previous state

//     You want a cleaner, scalable way to handle state logic



// 💼 Example Use Cases
// Use Case	Why useReducer Helps
// Form input handling	Multiple fields, validation, and clear/reset logic
// Toggle UI modes	Switch views like dark/light, grid/list, etc.
// Complex user actions	Login/logout, add/remove items, etc.
// Local Redux-like logic	Want Redux structure without extra libraries



// 📦 Compared to useState
// Feature	useState	useReducer
// Simplicity	Best for simple values	Best for complex or interdependent state
// Update method	setState(newValue)	dispatch({ type, payload })
// Ideal for	Toggles, inputs, single states	Multi-field forms, nested updates




import React, {useReducer} from 'react';

const initialState = {count : 0};

function reducer(state,action) {
  switch (action.type){
      case 'increment':
        return {count: state.count + 1}
      case 'decrement':
        return {count : state.count - 1}
      case 'reset':
        return {count: 0}
      default:
        return state;
  }
  
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <p>{state.count}</p>
      <button onClick={()=> dispatch({type:'increment'})} >+</button>
      <button onClick={() => dispatch({ type:'decrement'})} >-</button>
      <button onClick={() => dispatch({type:'reset'})} >reset</button>
    </>
  );
}

export default App;