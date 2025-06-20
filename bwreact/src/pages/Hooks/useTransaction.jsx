import { useState, useTransition } from "react"

const List = ({items}) => {
    return (
        <ul>
            {items.map((item,i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
    )
}


const Appp = () => {
    const [input, setInput] = useState('');
    const [isPending,startTransition] = useTransition();
    const [filtered, setFiltered] = useState([]);

    const allItems = Array.from({length : 10000}, (_,i) => `{item ${i}}`);


    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value)


        startTransition(() => {
            
            const filteredlist = allItems.filter( item => 
                item.toLowerCase().includes(value.toLowerCase())
            );

            setFiltered(filteredlist);
        })


    };



    return (
        <div>
            <input type="text" value={input} onChange={handleChange}></input>
            <List items={filtered} />
        </div>
    )


}



export default Appp;