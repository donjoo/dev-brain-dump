//     useId is a React Hook introduced in React 18 that generates a 
// unique, stable ID for each component instance.

// It solves a common problem in UI development: how to assign 
// unique id attributes to elements (especially for accessibility) 
// without clashing or duplicating IDs.



// ✅ When to Use It

//     Labeling form elements:

//         <label htmlFor="id"> needs to match the input's id

//     Creating unique identifiers for tooltips, modal titles, etc.

//     Avoiding ID collisions in server-side rendering (SSR) and hydration

//     Accessible components that require linking

// 🔄 SSR Friendly

// React ensures that the ID is:

//     Stable across server and client

//     Unique per component instance

//     Not hardcoded — preventing mismatches during hydration


//     ❌ Limitations

//     You shouldn’t use useId as a key in lists — it’s meant for id attributes only, not for React keys

//     It is not globally unique — it’s unique within the current render tree

// 🧠 How it Works (Simplified)

//     React gives each component instance a "slot" internally (like :r0:, :r1:)

//     useId returns a string based on that slot

//     IDs remain stable between renders









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








