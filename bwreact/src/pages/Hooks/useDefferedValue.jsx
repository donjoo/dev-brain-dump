
//     useDeferredValue is a React hook that lets you defer updating a 
// value until the browser has time to render it, keeping the
//  UI responsive during expensive renders.

// It’s like telling React:

//     “This value isn’t urgent — update it later.”

// 🧠 When to Use useDeferredValue
// Use Case	Why it's useful
// 🔍 Filtering large datasets	Prevents UI lag
// 📝 Typing in input + rendering	Keeps typing smooth while rendering can wait
// 🌐 Search + API debounce UI	Shows loading indicators while search updates
// 📦 Combined with transitions	For even more control over update priority


// ⚠️ Notes & Caveats

//     Doesn’t stop updates, just delays them

//     Works best with large rendering workloads (long lists)

//     Use only when updates are non-urgent



// __________________________________________________________________________
// __________________________________________________________________________
// __________________________________________________________________________
// __________________________________________________________________________
// __________________________________________________________________________
// __________________________________________________________________________
// __________________________________________________________________________


// const List = ({ items }) => {
//     return (
//         <ul>
//             {items.map((item, i) => (
//                 <li key={i}>{item}</li>
//             ))}
//         </ul>
//     );
// };





// const Appl = () => {
//     const [input, setInput] = useState('');
//     const deferedInput = useDeferredValue(input);

//     const allitems = Array.from({length : 10000 }, (_,i) => `Items ${i}`);


//     const filteredItems = allitems.filter(item => 
//         item.toLowerCase().includes(deferedInput.toLowerCase())
//     );
 


//     return (
//         <div>
//             <input value={input} onChange={(e) => setInput(e.target.value)} />
//             <List items={filteredItems} />
//         </div>
//     )
// }





import React, { useState, useDeferredValue } from 'react';

const bigList = Array.from({ length: 10000}, (_,i) => `Item ${i}`);


function App(params) {
  const [input, setInput] = useState('');
  const deferredInput = useDeferredValue(input);


  const filteredList = bigList.filter(item => item.toLowerCase().includes(deferredInput.toLowerCase())
      );



return (
  <>
  <input type="text" vlaue={input} onChange={(e) => setInput(e.target.value)} placeholder='search...' />
      {input!== deferredInput && <p>Updatinggg.....</p>}
    <ul>
    {filteredList.map((item) => (
    <li key={item}>{item}</li>
    ))}
    </ul>
  </>
);
  
}


export default App;


