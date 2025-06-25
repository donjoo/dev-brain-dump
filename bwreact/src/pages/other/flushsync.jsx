// React usually batches state updates asynchronously to improve performance.
// flushSync forces React to flush updates immediately, synchronously — especially 
// useful when DOM must update before the next operation (e.g., measuring size or scroll position).



import { useState } from 'react';
import { flushSync } from 'react-dom';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
     flushSync(() => {
      setCount((c) => c + 1);
  })
    // At this point, the DOM is updated
    // console.log(document.getElementById('count').textContent); // prints updated count
    console.log(document.getElementById('count').textContent)
  };

  return (
    <>
      <p id="count">{count}</p>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default App;