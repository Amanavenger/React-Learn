import { useRef } from "react";

function UnControlledForm(){

    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Name: ", nameRef.current.value, "Email: ", emailRef.current.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Uncontrolled Form</h2>
                <input type="text" placeholder="Name" ref={nameRef}/>
                <br />
                <input type="email" placeholder="Email" ref={emailRef}/>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UnControlledForm;