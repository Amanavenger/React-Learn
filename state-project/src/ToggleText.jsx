import {useState } from "react";

function ToggleText(){
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => {
        setIsVisible(!isVisible)
    }

    return (
        <>
            <button onClick={toggle} style={{ marginTop: "150px" }} >
                {isVisible ? "Hide" : "Show"} Text
            </button>

             {isVisible && <p>This is secreat message</p>}
        </>
    )
}

export default ToggleText;