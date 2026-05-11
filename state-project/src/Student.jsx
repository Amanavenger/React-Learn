import {useState } from "react";

function Student(){

    const [student, setStudent] = useState({
        name: "John",
        grade: "A",
        city: "Delhi"
    });

    const changeCity = () =>{
        setStudent({...student, city: "Mumabi"})
    }

    return (
        <>
        <h2>Name: {student.name}</h2>
        <p>Grade: {student.grade}</p>
        <p>City: {student.city} </p>
            <button onClick={changeCity} >Change City</button>
        </>
    )
}

export default Student;