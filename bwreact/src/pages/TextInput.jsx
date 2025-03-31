import { useRef, useState } from "react"

const TextInput = () => {
    const inputRef = useRef(null)
    const renders = useRef(1)
    const [count, setCount] = useState(0);


    renders.current += 1
    console.log('renderinggg')
    console.log('jj')
    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <>
        <input ref = {inputRef} type="text"></input>
        <button onClick={focusInput}>focusInput</button>

        <div>
            <p>Render Count: {count} </p>
        <p>Componet re-rendered: {renders.current} times</p>
        <button onClick = {() => setCount(count + 1)}>Increase COunt</button>
        </div>
        </>
    )
}


export default TextInput;