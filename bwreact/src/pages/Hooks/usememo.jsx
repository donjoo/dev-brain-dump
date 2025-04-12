import { useMemo, useState } from "react";



function ExpensiveComponent({numbers}) {
  const sum = useMemo(() => {
    console.log('calculating...')
    return numbers.reduce((acc,num) => acc + num,0)
  }, [numbers])
};


function Appq(){
  const [count,setCount] = useState(0);
  const numbers = useMemo(()=>[1,2,3,4,5],[])

  return (
    <>
    <ExpensiveComponent numbers={numbers} />
    <button onClick={() => setCount(count + 1)}>render</button>
    <p>Render Count: {count}</p>

     </>
  )
}



export default Appq