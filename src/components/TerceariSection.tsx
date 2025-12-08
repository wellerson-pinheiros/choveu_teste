import rostos from '../assets/rostos.svg'
import barra from '../assets/barra.svg'
function TerceariSection() {
  return (
    <div className="w-full bg-blue-500  text-white mb-8 ">
        <div className="flex flex-col w-full  text-center p-8 " >
            <h1 className="font-inter font-normal text-[20px] md:text-[40px] py-16">
                Lorem ipsum dolor sit amet
            </h1>

            <div className="= lg:w-[866px] w-[328px] lg:h-[408px] flex flex-col  lg:flex-row mx-auto bg-white rounded-2xl lg:gap-2.5">
                <img src={rostos} alt="foto de um pai e seu bebê " className='rounded-2xl w-[417px] h-145px'/>
                <div className='flex flex-col  lg:w-[365px] text-justify   pl-4 '>
                    <p className='text-black font-inter font-normal text-[24px] pt-6 w-[286px] lg:w-[359px]'>Lorem ipsum dolor <span className='font-inter font-bold'> sit amet,</span> consectetur adipisicing elit, sed do <span className='font-inter font-bold'>eiusmod tempor</span> incididunt ut labore </p>
                
                <div className='w-[225px] h-[29px] pt-14 flex flex-col text-center'>
                        <img src={barra} alt="barra amarela" className='w-[163.57px]'/>
                        <h3 className='text-black font-inter font-bold text-[24px] relative -top-7 leading-[100%] w-[219px] lg:w-[225px]'>Anim laborum</h3>
                </div>
                <div className='pt-14 w-[286px] lg:-[359px] pb-2 '>
                    <p className='text-black font-inter font-normal text-[17px]'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
                </div>
                

            </div>
        </div>
        
    </div>
  )
}

export default TerceariSection