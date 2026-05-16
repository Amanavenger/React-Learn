import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Upcoming from './pages/Upcoming'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/movie/:id' element={< MovieDetail />} />
         <Route path='/movies/upcoming' element={< Upcoming />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
