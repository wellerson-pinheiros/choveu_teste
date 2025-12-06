import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import MenuMobile from "./MenuMobile";
// import hamburguer from "../assets/hamburguer.svg"
// import x from "../assets/x.svg"

// import { useState } from "react";

function NavBar() {

    // const [open, setOpen] = useState(false)
    // console.log(open)
    

  return (
    <header className="w-auto md:w-full h-[77px] bg-(--color-primary) rounded-2xl  md:rounded-none m-1 mt-2  md:m-0 md:mt-0 fixed top-1 left-1 right-1 z-6 md:top-none  md:static md:top-auto md:left-auto md:z-auto
    " >
      <div className=" container flex items-center justify-between mx-auto px-8 h-full">
        <img 
        src={logo} 
        alt="Logo da empresa"
        className="w-[121px] h-[30.61px] md:w-[167px]" 
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
          {/* <button 
          className="md:hidden"
          onClick={() => setOpen(!open)}>

            <img
             src={ open ? x : hamburguer } alt="Menu mobile" />
           
          </button> */}
          <MenuMobile/>
      </div>
    </header>
  )
}

export default NavBar

