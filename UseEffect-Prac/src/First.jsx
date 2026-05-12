import { useState, useEffect } from "react";

function First(){

    const [count, setCount] = useState(0);

    useEffect(() =>{
        document.title = `Count: ${count}`
        console.log("Component Re-render")
    },[count])

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}

export default First;