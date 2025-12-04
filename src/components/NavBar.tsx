import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import hamburguer from "../assets/hamburguer.svg"

function NavBar() {
  return (
    <header className="w-full h-[77px] bg-(--color-primary)  ">
      <div className=" container flex items-center justify-between mx-auto px-8 h-full">
        <img 
        src={logo} 
        alt="Logo da empresa"
        className="w-[121px] h-[30.61px] md:w-[167px] md:h-[44px]" 
        />
          <div className="header-links gap-8 md:flex hidden">
           
              
            
            
            <Link to='/'>
               <p className=" 
               text-xl
               font-inter
               font-light
               ">
                Seção 1</p>
            </Link>
             
            <Link to='/' className="
               text-xl
               font-inter
               font-light
            ">
              Seção 2
            </Link>

            <Link to='/' className="
               text-xl
               font-inter
               font-light
            ">
              Seção 3
            </Link>

            <Link to='/'className="
               text-xl
               font-inter
               font-light
            ">
              Seção 3
            </Link>
          </div>
          <button className="md:hidden">
            <img src={hamburguer} alt="icone hamburguer " />
          </button>
          
      </div>
    </header>
  )
}

export default NavBar

