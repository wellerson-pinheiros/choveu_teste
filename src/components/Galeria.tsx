import barrayelow from '../assets/barrayelow.svg'
import img3 from '../assets/img3.svg'
import img4 from '../assets/img4.svg'
import img5 from '../assets/img5.svg'

function Galeria() {
  return (
    <>
   
    <div className="bg-white mx-auto flex flex-col justify-center text-center items-center w-full mt-20">
        <h1 className="font-inter font-normal text-[40px] text-black">
            Lorem ipsum dolor sit amet consectetur
        </h1>
        <img src={barrayelow} alt="barra amarela" className='w-[148.11px] pt-2' />
    </div>

    <div className='container mx-auto mt-20'>
        <div className='flex justify-between w-full p-8'>

       
    
        <div className=''>
            <img src={img3} alt="" />
        
        <div className='flex flex-col pl-4'>
            <h3 className='font-inter font-medium text-[12px]  text-[#333333] pt-8'>
                Lorem ipsum dolor
            </h3>
            <p className='font-inter font-light text-[20px]  text-[#161616] pt-4'>
                Lorem ipsum dolor sit amet,<br />
                consectetur adipisicing elit,<br />
                sed do eiusmod incididunt.
            </p>
        </div>
        </div>

         
        
        
        <div className=''>
            <img src={img4} alt="" />
        
        <div className='flex flex-col pl-4'>
            <h3 className='font-inter font-medium text-[12px]  text-[#333333] pt-8'>
                Lorem ipsum dolor
            </h3>
            <p className='font-inter font-light text-[20px]  text-[#161616] pt-4'>
                Lorem ipsum dolor sit amet,<br />
                consectetur adipisicing elit,<br />
                sed do eiusmod incididunt.
            </p>
        </div>
        </div>
     



        <div className=''>
            <img src={img5} alt="" />
        
        <div className='flex flex-col pl-4'>
            <h3 className='font-inter font-medium text-[12px]  text-[#333333] pt-8'>
                Lorem ipsum dolor
            </h3>
            <p className='font-inter font-light text-[20px]  text-[#161616] pt-4'>
                Lorem ipsum dolor sit amet,<br />
                consectetur adipisicing elit,<br />
                sed do eiusmod incididunt.
            </p>
        </div>
        </div>
         
         </div>
    </div>
    
    
    </>
  )
}

export default Galeria