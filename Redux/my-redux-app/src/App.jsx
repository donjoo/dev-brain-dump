import { bugAdded, bugRemoved, bugResolved } from "./app/actions";
import store from "./app/store";
import { useState } from "react";





export default function App() {


  const [text, setText] = useState([]);

const print =() => {
  setText([store.getState()])
}

store.subscribe(() =>{
  console.log("Store changed!", store.getState());
  print();
})

  return (
    <>
    <div>
      <p>{JSON.stringify(text,null,8)}</p>
    </div>
    <button onClick={() => store.dispatch(bugAdded(`bug${Math.random()}`))}>Add Bug</button>
    <button onClick={() => store.dispatch(bugResolved(1))}>Resolve Bug</button>
    <button onClick={() => store.dispatch(bugRemoved(1))}>Remove Bug</button>
    </>
  )

}
