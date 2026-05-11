import { useState } from "react";

function SimpleForm(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
 
        console.log("Name: " , name)
        console.log("Email: " , email)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Reach Form Example</h2>

                <label>Name: </label>
                <input
                    onChange={(e) => setName(e.target.value)} 
                    type="text"  value={name}
                />
                <br />

                <label >Email: </label>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" value={email}
                />
                <br />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default SimpleForm;