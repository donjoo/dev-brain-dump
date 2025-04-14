import { useReducer } from "react";
import {reducer, initialstate} from "./reduce";



// const initialstate = {count: 0}



// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {count : state.count + 1};
//         case 'DECREMENT':
//             return {count : state.count - 1};
//         case 'RESET':
//             return {count : 0}
//         default:
//             return state;

//     }
// }






function Counterr() {
    const [state, dispatch] = useReducer(reducer,initialstate)


    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
            <button onClick={() => dispatch({type: "RESET"})}>reset</button>
        </div>

    );



};


export default Counterr;