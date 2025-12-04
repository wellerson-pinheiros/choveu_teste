import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";


function NavBar() {
  return (
    <header className="w-full h-[77px] bg-(--color-primary)  ">
      <div className=" container flex items-center justify-between mx-auto px-8 h-full">
        <img src={logo} alt="Logo da empresa" />
          <div className="header-links flex gap-8">
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
      </div>
    </header>
  )
}

export default NavBar

