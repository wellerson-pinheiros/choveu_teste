import rostos from '../assets/rostos.svg'
import barra from '../assets/barra.svg'
function TerceariSection() {
  return (
    <div className="w-full bg-blue-500 h-[652px] text-white ">
        <div className="flex flex-col w-full  text-center" >
            <h1 className="font-inter font-normal text-[40px] py-16">
            Lorem ipsum dolor sit amet
            </h1>

            <div className="w-[866px] h-[408px] flex mx-auto bg-white rounded-2xl gap-2.5">
                <img src={rostos} alt="foto de um pai e seu bebê " className='rounded-2xl'/>
                <div className='flex flex-col  w-[365px] text-justify  pt-4 pl-6'>
                    <p className='text-black font-inter font-normal text-[24px] pt-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore </p>
                
                <div className='w-[225px] h-[29px] pt-14 flex flex-col text-center'>
                        <img src={barra} alt="barra amarela" className='w-[163.57px]'/>
                        <h3 className='text-black font-inter font-bold text-[24px] relative -top-7 leading-[100%]'>Anim laborum</h3>
                </div>
                <div className='pt-14'>
                    <p className='text-black font-inter font-normal text-[17px]'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
                </div>
                

            </div>
        </div>
        
    </div>
  )
}

export default TerceariSection