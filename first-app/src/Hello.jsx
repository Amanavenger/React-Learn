import './App.css'

function Hello({name="Guest", age=18, city="Unknown", hobbies}) {
    // const name = "😎 React"

    // function getName(name){
    //     return name;
    // }

    // function handleClick(){
    //     alert("Button was clicked!!")
    // }

    // const handleInput = (event) =>{
    //     console.clear()
    //     console.log("Logger is Activated : ", event.target.value)
    // }

    //  const handleMouseOver = () =>{
    //     console.log("Mouse is Over the text : ")
    // }

    //  const handleDoubleClick = () =>{
    //     console.log("Text double clicked!!!")
    // }


    // return(
    //     <>
    //       <h1>Hello {getName(name)}</h1>  

    //       <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laboriosam ullam fuga totam, dolorum commodi. Sapiente recusandae illum corporis quam molestiae porro laborum eum odio aspernatur id? Fugit, facilis vero!</p>

    //       <button onClick={handleClick}>Click Me</button>
    //       <button onClick={()=>{alert("Hello")}}>Say Hello</button>
    //       <br/>
    //       <input type="text" onChange={handleInput} placeholder="Type Something"/>
    //     </>
    // )

    // const fruits = ["Apple", "Banana", "Orange", "Mango"]


    // return (
    //     <div>
    //         <h2>Fruit List</h2>
    //         <ul>
    //             {fruits.map((fruit, idx) => (
    //                 <li>{idx} - {fruit}</li>
    //             ))}
    //         </ul>
    //     </div>
    // )

    // const isVisible = true;
    // const visibility = isVisible ? "visible" : "unvisible"
    // let message;

    // if (isLoggedIn) {
    //    message = <h1>Welcome User!!!</h1>
    // } else {
    //    message = <h1>Please Logge In!!!</h1>
    // }

    //  return (
    //         <>
    //            {message}
    //         </>
     //   )

    // return (
    //     <>
    //         <h1 className={visibility} >Conditional Rendering</h1>
    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatem autem voluptate nobis, at ratione quidem animi aperiam aut esse?</p>
    //     </>
    // )

    return(
        <>
        <h2>Hello, {name} {age} {city}</h2>
        <p>
            <ul>
                {hobbies.map((hobby) =>(
                    <li>
                        {hobby}
                    </li>
                ))}
            </ul>
        </p>
        </>
        
    )

}

export default Hello