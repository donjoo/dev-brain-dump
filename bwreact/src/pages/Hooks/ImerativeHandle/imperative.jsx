import { useRef } from "react";
import FancyInput from "./child";


function Paren() {
    const fancyInputRef = useRef();

    return (
        <div>
            <FancyInput ref = {fancyInputRef} />
            <button onClick={() => fancyInputRef.current.focus()}>
                Focus the input
            </button>
        </div>
    );
}


export default Paren