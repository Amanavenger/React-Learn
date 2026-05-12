import { useState, useEffect } from "react";

function Users(){

    const [users, setUsers] = useState([]);

    useEffect(() =>{
       fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
    },[])

    return (
        <>
            <h2>Users List</h2>
            {users.map((u) =>(
                <li key={u.id}>{u.id} - {u.name} - {u.email}</li>
            ))}
        </>
    )
}

export default Users;