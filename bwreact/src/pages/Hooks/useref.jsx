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












function Timerr() {
    const [seconds , setseconds] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                console.log('Running');
                setseconds(prevSecondss => prevSecondss + 1)
            },1000);
        }
    };


    const stopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }
}