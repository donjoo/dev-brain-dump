
// 🧠 What is useRef?

//     useRef is a React Hook that returns a mutable object with a .current property. It's commonly used to:

//     Access and interact with DOM elements

//     Store mutable values that don’t trigger a re-render when changed

//     Hold references to values across renders


// ✅ Common Use Cases
// Use Case	Why It's Useful
// 1. Access DOM elements	Like focusing an input, measuring a div, etc.
// 2. Store values across renders	Like timers, previous state, scroll position
// 3. Create instance variables	Like in class components, but in function components
// 4. Use with forwardRef	For exposing methods to parent via refs


// 🧠 What Makes useRef Special?
// Feature	Explanation
// Doesn’t trigger render	Updating .current doesn't re-render component
// Persistent value	The .current value persists across renders
// Can hold DOM or data	Not just DOM refs — also general values
// ❌ Common Mistakes
// Mistake	Why it's wrong
// Using useRef for stateful data changes	It won’t re-render the component
// Expecting ref to update immediately	DOM refs update after render
// Using ref in JSX without ref={}	It won’t attach to the DOM





import React, {useRef, useState} from "react";






function InputFocus() {
    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus();
    };



    return (
        <div>
            <input  ref= {inputRef}/>
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}











// function TextInputWithFocusButton() {
//     const inputEl = useRef(null);


//     const onButtonClick = () => {
//         inputEl.current.focus();
//     };

//     return (
//         <div>
//             <input ref = {inputEl} type="text"></input>
//             <button onClick= {onButtonClick}> Focus the input</button>
//         </div>
//     );
// }


// export default TextInputWithFocusButton;



function Timer() {

    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                console.log("Running");
                setSeconds(prevSecondss => prevSecondss + 1);
            }, 1000);

        }
    };


    const stopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    return (
        <div> 
            <p> Seconds : {seconds}</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )

}

export default Timer;







