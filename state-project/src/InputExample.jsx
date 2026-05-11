import {useState } from "react";

function InputExample(){

    const [name, setName] = useState("");


    return (
        <>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
        <p>Hello, {name || "GUEST"}</p>
        </>
    )
}

export default InputExample;