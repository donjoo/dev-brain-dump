import React, {useRef, useState} from "react";





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
                setSeconds(prevSecondss => prevSecondss + 1);
            }, 1000);

        }
    };


    const stopTimer = () => {
        clearInterval(intervalRef.current);
    }
}

