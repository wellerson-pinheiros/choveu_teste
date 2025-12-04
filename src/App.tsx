import { BrowserRouter, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import SecondSecion from "./components/SecondSecion"
import TerceariSection from "./components/TerceariSection"
import QuartaSection from "./components/QuartaSection"
import Galeria from "./components/Galeria"

function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Home/>
     <SecondSecion/>
     <TerceariSection/>
     <QuartaSection/>
     <Galeria/>
      <Routes>
       
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
