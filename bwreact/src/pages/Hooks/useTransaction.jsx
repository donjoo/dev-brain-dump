


//     useTransition lets you mark updates as non-urgent, so React prioritizes 
// urgent ones (like typing) first, and deals with the rest later.

// It improves user experience by keeping the UI responsive even during heavy 
// or expensive updates like filtering, searching, or rendering large lists.



// 🎯 When to Use useTransition
// Good Use Cases	Why?
// 🔍 Search filtering	Prevents UI lag during large data filtering
// 🗂 Large list rendering	Defers slow re-renders
// 🔄 Theme changes, UI transitions	Keeps user interactions smooth
// 🧮 Debounced calculations	Delay computation after user input
// ❌ When Not to Use

//     For immediate, critical updates (e.g., form fields, authentication)

//     If the update is fast and not resource-heavy











// import { useState, useTransition } from "react"

// const List = ({items}) => {
//     return (
//         <ul>
//             {items.map((item,i) => (
//                 <li key={i}>{item}</li>
//             ))}
//         </ul>
//     )
// }


// const Appp = () => {
//     const [input, setInput] = useState('');
//     const [isPending,startTransition] = useTransition();
//     const [filtered, setFiltered] = useState([]);

//     const allItems = Array.from({length : 10000}, (_,i) => `{item ${i}}`);


//     const handleChange = (e) => {
//         const value = e.target.value;
//         setInput(value)


//         startTransition(() => {
            
//             const filteredlist = allItems.filter( item => 
//                 item.toLowerCase().includes(value.toLowerCase())
//             );

//             setFiltered(filteredlist);
//         })


//     };



//     return (
//         <div>
//             <input type="text" value={input} onChange={handleChange}></input>
//             <List items={filtered} />
//         </div>
//     )


// }



// export default Appp;











import React, { useState, useTransition } from 'react';


const bigList = Array.from({ length: 5000 }, (_,i) => `Item ${i}`);

function App() {
  const [query, setQuery] = useState('');
  const [filteredList, setFilteredList] = useState(bigList);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const filtered = bigList.filter((item) => item.includes(value));
      setFilteredList(filtered);
    });

    
  };


  return (
    <>
    <input type='text' value={query} onChange={handleChange}/>
      {isPending && <p>Filtering .....</p>}
      <ul>
      {filteredList.map((item) => (
      <li key={item}>{item}</li>
      ))}
      </ul>
    </>
  );
  
}

export default App;
