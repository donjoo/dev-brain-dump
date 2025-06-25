// useCallback returns a memoized version of a
//  function, so that the function is only recreated when its dependencies change.



// 📌 4. When to Use useCallback

// You should use useCallback when:

//     ✅ You pass a function as a prop to a child component wrapped in React.memo

//     ✅ You have expensive inline functions inside components that frequently re-render

//     ✅ You need stable function references (e.g., for useEffect dependencies)

// ⚠️ 5. When Not to Use useCallback

// Avoid using it when:

//     The function is cheap and doesn’t affect performance

//     You’re not passing it to a memoized child component

//     It makes the code unnecessarily complex

// 💡 React’s built-in optimization is often enough. Use useCallback only 
// when you measure or observe re-render issues.











import React , {useState, useCallback} from 'react';



const Child = React.memo(({onClick}) => {
  console.log('child rendered');
  return <button onClick={onClick}>Clickme</button>
});


function App() {
  const [count, setCount] = useState(0);
  const [text,setText] = useState('');

  const handleClick = useCallback(() => {
    console.log('button clicked');
  },[]);

  return (
    <>
    <input onChange = {(e) => setText(e.target.value) } value={text} />
      <button onClick={() => setCount(count + 1)}>Incremetn COunt </button>
      <Child onClick = {handleClick} />
    </>
  )
}

export default App;