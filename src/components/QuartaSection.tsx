import img2 from '../assets/img2.svg'
import barraazul from'../assets/barraazul.svg'
import apple from '../assets/apple.svg'
import arrow from '../assets/arrow.svg'
import arrowdown from '../assets/arrowdown.svg'
import word from '../assets/word.svg'
function QuartaSection() {
  return (
    <div className="bg-white w-full ">
        <div className=" flex w-full justify-center ">
            <div className='flex flex-col'>
                <h1 className="font-inter font-bold text-[35px]  pt-30   ">
                Dolore eu fugiat nulla pariatur?
                </h1>
            <img src={barraazul} alt="" className='w-[148px] h-3.5'/> 

            <div className='pt-20'>
                <p className='font-inter font-normal text-[17px] leading-[150%] space-y-[18px] text-[#525252]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br />
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br />
                ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            </div>  
            <div className=''>
                <h2 className='font-inter font-bold text-[24px] pt-18'>
                    Excepteur sint occaecat cupidatat:
                </h2>
            </div>




            <div className='bg-[#ffff] w-[597px] h-[314px] flex flex-col mt-20 border border-[#EFEFEF] rounded-3xl'>
            <div className='flex justify-between bg-[#EFEFEF] h-[60px] items-center p-4 rounded-t-2xl'>
                <div className='flex gap-5'>
                    <img src={apple} alt="imagem de uma maça" />
                <h2 className='font-inter font-bold text-[17px] leading-[150%] space-y-[18px] text-[#023F88]'>
                    Qui officia deserunt mollit
                </h2>
                </div>
                
                <img src={arrow} alt="" />
            </div >
                <ul className='list-disc  text-[#525252] p-3 list-inside pl-5  w-[507px] h-[204px] font-inter font-normal text-[13px] leading-[100%] space-y-[18px]'>
                <li className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                <li>Sed do eiusmod tempor incididunt.</li>
                <li>Ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam.</li>
                <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip.</li>
                <li className='indent-[-1.5em] pl-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br />
                    fugiat nulla pariatur.</li>
                <li className='indent-[-1.5em] pl-5'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <br />
                    deserunt mollit anim id est laborum.</li>
            </ul>
           
            
        </div>



        <div className='bg-[#ffff] w-[597px] h-[314px] flex flex-col mt-20 border border-[#EFEFEF] rounded-3xl'>
            <div className='flex justify-between bg-[#EFEFEF] h-[60px] items-center p-4 rounded-t-2xl'>
                <div className='flex gap-5'>
                    <img src={word} alt="imagem de uma maça" />
                <h2 className='font-inter font-bold text-[17px] leading-[150%] space-y-[18px] text-[#023F88]'>
                    Qui officia deserunt mollit
                </h2>
                </div>
                
                <img src={arrowdown} alt="" />
            </div >
                <ul className='list-disc  text-[#525252] p-3 list-inside pl-5  w-[507px] h-[204px] font-inter font-normal text-[13px] leading-[100%] space-y-[18px]'>
                <li className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                <li>Sed do eiusmod tempor incididunt.</li>
                <li>Ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam.</li>
                <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip.</li>
                <li className='indent-[-1.5em] pl-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br />
                    fugiat nulla pariatur.</li>
                <li className='indent-[-1.5em] pl-5'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <br />
                    deserunt mollit anim id est laborum.</li>
            </ul>
                    
        </div>    
            </div>
            <div className=' ml-40 '>
                <img src={img2} alt="Foto de duas mulhures com duas crianças" className='pt-10 ' />
            </div>
            
        </div>
        
        




    </div>
  )
}

export default QuartaSection