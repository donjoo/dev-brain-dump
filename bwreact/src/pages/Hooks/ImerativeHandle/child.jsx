import { forwardRef, useImperativeHandle, useRef } from "react";



const FancyInput = forwardRef((props, ref) => {
    const inputRef = useRef();


    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));

    return <input ref={inputRef} />;
});


export default FancyInput;






