import { useState } from "react"

const Counter = (initialValue)=>{
    const [counter,setCounter]=useState(initialValue)

    return (
        <div>
            <div>The Number is + {counter}</div>
            <button onClick={()=>{setCounter(counter+1)}}>increment</button>
        </div>
    )
}
export default Counter