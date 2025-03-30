import { useRef } from "react"

const TextInput = () => {
    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <>
        <input ref = {inputRef} type="text"></input>
        <button onClick={focusInput}>focusInput</button>
        </>
    )
}


export default TextInput;