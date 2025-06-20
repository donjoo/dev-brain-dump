import React, { useCallback, useId } from 'react';


function NameInput() {
  
  const id = useId(); // React automatically gives you a unique ID
  const iid = useId();
  console.log(iid)
  console.log(id,'iddd')
  return (
    <div>
      <label htmlFor={id}>Name:</label>
      <label htmlFor={iid}>email</label>
      <input id={id} type="text" />
      <input id={iid} type="text" />
    </div>
  );
}

// export default NameInput;
function Child({onClick}) {
  console.log('child rendered');
  return <button onClick={onClick}>Click Me</button>
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('clicked');
  },[]);

  return (
    <div>
      <p> COunt : {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Incre</button>
      <Child onClick={handleClick} />
    </div>
  );

}








