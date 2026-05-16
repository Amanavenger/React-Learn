import { BrowserRouter, Route, Routes, Link, useParams } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Products from "./Products"
import Phone from "./Phone"
import Laptop from "./Laptop"


function App() {

  function User(){
    console.log(useParams())
    const { id } = useParams()
    return <h2>User Profile: {id}</h2>
  }

  function NotFound(){
    return <h2>404 - Page Not Found!!!</h2>
  }

  return (
    <BrowserRouter>

      <h1>React Router</h1>

      {/* <a href="/">Home</a> |
      <a href="/about">About</a> |
      <a href="/contact">Contact</a> */}

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/user/1">User</Link> |
        <Link to="/products">Products</Link>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/products" element={<Products />}>
          <Route path="phone" element={<Phone />} />
          <Route path="laptop" element={<Laptop />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
