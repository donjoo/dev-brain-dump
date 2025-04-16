import useCounter from "./Custom";

function CounterComponent() {
    const {count, increment, decrement, reset} = useCounter(10);


    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}


export default CounterComponent