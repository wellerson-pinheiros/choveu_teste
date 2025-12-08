import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import SecondSecion from "./components/SecondSecion"
import TerceariSection from "./components/TerceariSection"
import QuartaSection from "./components/QuartaSection"
import Galeria from "./components/Galeria"
import Footer from "./components/Footer"
import { Element } from "react-scroll"

function App() {
  return (
    <div>

      <NavBar />

      <Element name="home">
        <Home />
      </Element>

      <Element name="second">
        <SecondSecion />
      </Element>

      <Element name="terceira">
        <TerceariSection />
      </Element>

      <Element name="quarta">
        <QuartaSection />
      </Element>

      <Element name="galeria">
        <Galeria />
      </Element>

      <Element name="footer">
        <Footer />
      </Element>
    </div>
  )
}

export default App
