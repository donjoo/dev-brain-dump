import { useDeferredValue, useState } from "react";



const List = ({ items }) => {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    );
};





const Appl = () => {
    const [input, setInput] = useState('');
    const deferedInput = useDeferredValue(input);

    const allitems = Array.from({length : 10000 }, (_,i) => `Items ${i}`);


    const filteredItems = allitems.filter(item => 
        item.toLowerCase().includes(deferedInput.toLowerCase())
    );
 


    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <List items={filteredItems} />
        </div>
    )
}


export default Appl