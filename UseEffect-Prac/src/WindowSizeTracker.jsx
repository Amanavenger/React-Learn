import { useState, useEffect } from "react";

function WindowSizeTracker(){

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() =>{
        const handleResize = () =>{
            setWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        return () =>{
            window.removeEventListener("resize", handleResize)
        }
    },[])

    return (
        <>
            <h2>Window Width Tracker</h2>
            <p>Current Window Width: {width}px</p>
        </>
    )
}

export default WindowSizeTracker;