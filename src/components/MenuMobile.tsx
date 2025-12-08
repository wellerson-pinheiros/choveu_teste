import { useEffect, useState } from "react"
import hamburguer from "../assets/hamburguer.svg"
import x from "../assets/x.svg"
import { Link } from "react-scroll";


function MenuMobile() {
     const [open, setOpen] = useState(false)
    console.log(open)
    
    // Fecha o menu automaticamente quando a tela passa de 768px // (breakpoint md:768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

    
    return (
        <div className="md:hidden ">
            <button 
            className="md:hidden"
            onClick={() => setOpen(!open)}>

            <img
            src={ open ? x : hamburguer } alt="Menu mobile" />
                
          </button>

           {/* MENU MOBILE FULLSCREEN */}

           {open && (
      <div
        className="
          absolute 
          top-17
          left-0
          w-full 
          bg-white 
          flex flex-col  justify-center items-start
          gap-4 text-2xl font-semibold pl-4 pr-4
          rounded-b-2xl
        "
      >
        
        <div className="w-full bg-gray-100 p-4 rounded-2xl mt-2">
            <Link to='home' smooth={true} duration={600}>
               <p className=" 
               text-xl
               font-inter
               font-light
               ">
                Seção 1</p>
            </Link>
        </div>
        
        <div className="w-full bg-gray-100 p-4 rounded-2xl">
                 <Link to='terceira' smooth={true} duration={600} className="
               text-xl
               font-inter
               font-light
            ">
              Seção 2
            </Link>
        </div>     
           
         <div className="w-full bg-gray-100 p-4 rounded-2xl">
            <Link to='quarta' smooth={true} duration={600} className="
               text-xl
               font-inter
               font-light
            ">
              Seção 3
            </Link>
        </div>   
            
            <div className="w-full bg-gray-100 p-4 rounded-2xl mb-4">
                <Link to='galeria' smooth={true} duration={600} className="
               text-xl
               font-inter
               font-light
            ">
              Seção 4
            </Link>
            </div>
            

           </div>
    )}

        </div> 
                


    
          
            
       
        

   
    
  )
}

export default MenuMobile