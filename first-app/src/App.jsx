import Hello from "./Hello"
import Button from "./Button";



function App() {

  const hobbies = ["Reading", "Coding", "Gaming", "Traveling"];

  function Message(){
    alert("Hello from Message Box!!!")
  }

  function ByeMessage(){
    alert("Bye!!!")
  }

    return (
    <>
    <Hello name="Aman" age={25} city="Bareilly" hobbies={hobbies}/>
    <Button label="Click Me!!!" handleClick={Message}/>
    <Button label="Bye Click!!!" handleClick={ByeMessage}/>
    {/* <Hello /> */}
    </>
    )
 
}

export default App
