import { useState } from "react";

function Todo() {

    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo) {
            setTodos([...todos, { text: newTodo, completed: false }])
            setNewTodo('')
        } else {
            alert("Please type todo first !!!")
        }
    }

    const handleDelete = (idx) => {
        const updateTodos = [...todos];

        updateTodos[idx].completed = updateTodos[idx].completed === true ? false : true;
        setTodos(updateTodos)

        // const updateTodos = todos.filter((todo, id) => id != idx);
        // setTodos(updateTodos)
    }

    return (
        <>
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add new Todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button type="submit">Add Todo</button>
            </form>

            <ul>
                {todos.map((todo, idx) => (
                    <li key={idx}>
                        <span style={{textDecoration: todo.completed ? 'line-through': 'none'}}>{todo.text}</span>
                        <button onClick={() => handleDelete(idx)}> Delete 🗑️</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todo;
