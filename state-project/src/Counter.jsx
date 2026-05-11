import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    

    return (
        <>
        <button onClick={() => setCount(count+1)} >Click</button>
        <h1 className="count">{count}</h1>
        </>
    )
    
}

export default Counter;