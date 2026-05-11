
function Bye() {

    // const user = {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 25
    // }

    const users = [
        {
            firstName: "John",
            lastName: "Doe",
            age: 25
        },
        {
            firstName: "John1",
            lastName: "Doe1",
            age: 251
        },
        {
            firstName: "John2",
            lastName: "Doe2",
            age: 252
        }
    ]

    function fullName(user) {
        return user.firstName + " " + user.lastName;
    }

    // return (
    //     <div>
    //         <h2>Person Details</h2>
    //         <p>Full Name: {fullName(user)}</p>
    //         <p>Age : {user.age}</p>
    //     </div>
    // )

    return (
        <div>
            <h2>Person Details</h2>
            <ul>
                {users.map((user) => (
                    <li>{fullName(user)} is {user.age}</li>
                ))}
            </ul>
        </div>
    )
}

export default Bye