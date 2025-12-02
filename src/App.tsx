import { BrowserRouter, Routes } from "react-router-dom"
import NavBar from "./components/nav/NavBar"
import Home from "./pages/Home"
import SecondSecion from "./components/nav/SecondSecion"

function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Home/>
     <SecondSecion/>
      <Routes>
       
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
