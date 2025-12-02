import { BrowserRouter, Routes } from "react-router-dom"
import NavBar from "./components/nav/NavBar"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Home/>
      <Routes>
       
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
