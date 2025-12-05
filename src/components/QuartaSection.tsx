import img2 from '../assets/img2.svg'
import barraazul from'../assets/barraazul.svg'
import apple from '../assets/apple.svg'
import arrow from '../assets/arrow.svg'
import arrowdown from '../assets/arrowdown.svg'
import word from '../assets/word.svg'
import mob from'../assets/mob.svg'
function QuartaSection() {
  return (
    <div className="bg-white w-full ">
        <div className=" flex w-full justify-center xl:flex-row flex-col  ">
            <div className='container mx-auto flex flex-col order-2 xl:order-1 justify-center items-center '>
                
                <div className='div-pai '>
                    <div className='div-filha '>
                        <h1 className="font-inter font-bold  text-[20px] md:text-[35px] w-[325px] md:w-[571px] pt-10 md:pt-30 pb-1 mx-auto ">
                            Dolore eu fugiat nulla pariatur?
                        </h1>
            <img src={barraazul} alt="" className='w-[148px] h-3.5 mx-auto md:mx-0 '/> 
                </div>
            <div className='pt-8 md:pt-20  '>
                
                <p className='font-inter  font-normal text-center md:text-left text-[17px] leading-[150%] space-y-[18px] text-[#525252] p-8 md:p-0'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br className='hidden md:block'/>
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br className='hidden md:block' />
                ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>

                <h2 className='font-inter font-bold text-[24px] pt-18 w-[328px] md:w-full mx-auto  text-center md:text-left'>
                    Excepteur sint occaecat cupidatat:
                </h2>
            </div>  
                </div>
            <div className='bg-[#ffff] w-[328px] md:w-[597px]  h-[379px] md:h-[314px] flex flex-col mt-20 border border-[#EFEFEF] rounded-3xl '>
             <div className='flex justify-between bg-[#EFEFEF] h-[60px] items-center p-4 rounded-t-2xl'>
                <div className='flex gap-5'>
                    <img src={apple} alt="imagem de uma maça" />
                    <h2 className='font-inter font-bold text-[17px] leading-[150%] space-y-[18px] text-[#023F88]'>
                    Qui officia deserunt mollit
                    </h2>
                </div>
                
                <img src={arrow} alt="" />
            </div >
                <ul className='list-disc  text-[#525252] p-3 list-inside pl-5  w-[311px] md:w-[507px] h-[204px] font-inter font-normal text-[13px] leading-[100%] space-y-[18px]'>
                    <li className='indent-[-1.5em] pl-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                    <li className='indent-[-1.5em] pl-5'>Sed do eiusmod tempor incididunt.</li>
                    <li className='indent-[-1.5em] pl-5'>Ut labore et dolore magna aliqua.</li>
                    <li className='indent-[-1.5em] pl-5'>Ut enim ad minim veniam.</li>
                    <li className='indent-[-1.5em] pl-5'>Quis nostrud exercitation ullamco laboris nisi ut aliquip.</li>
                    <li className='indent-[-1.5em] pl-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br />
                    fugiat nulla pariatur.</li>
                    <li className='indent-[-1.5em] pl-5'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <br />
                    deserunt mollit anim id est laborum.</li>
                </ul>        
        </div>



        <div className='bg-[#ffff] w-[328px] md:w-[597px] h-[379px]  md:h-[314px] flex flex-col mt-20 border border-[#EFEFEF] rounded-3xl mb-2'>
            <div className='flex justify-between bg-[#EFEFEF] h-[60px] items-center p-4 rounded-t-2xl '>
                <div className='flex gap-5 items-center'>
                    <img src={word} alt="imagem de uma maça" />
                    <h2 className='font-inter font-bold text-[15px] md:text-[17px] leading-[150%] space-y-[18px] text-[#023F88]'>
                        Qui officia deserunt mollit
                    </h2>
                </div>
                
                <img src={arrowdown} alt="imagem da ceta para baixo" />
            </div >
                <ul className='list-disc  text-[#525252] p-3 list-inside pl-5  w-[311px] md:w-[507px] h-[204px] font-inter font-normal text-[13px] leading-[100%] space-y-[18px]'>
                    <li className='indent-[-1.5em] pl-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                    <li className='indent-[-1.5em] pl-5'>Sed do eiusmod tempor incididunt.</li>
                    <li className='indent-[-1.5em] pl-5'>Ut labore et dolore magna aliqua.</li>
                    <li className='indent-[-1.5em] pl-5'>Ut enim ad minim veniam.</li>
                    <li className='indent-[-1.5em] pl-5'>Quis nostrud exercitation ullamco laboris nisi ut aliquip.</li>
                    <li className='indent-[-1.5em] pl-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br />
                    fugiat nulla pariatur.</li>
                    <li className='indent-[-1.5em] pl-5'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <br />
                    deserunt mollit anim id est laborum.</li>
                </ul>
                    
            </div>    
                </div>
                     {/* Imagem para desktop */}
                <img src={img2}
                 alt="Foto de duas mulhures com duas crianças"
                 className='pt-10 w-[327px]  h-[202px] md:h-[327px] order-1 xl:order-2 lg:mr-42 object-contain hidden min-[1280px]:block'  />
          
                 {/* Imagem para mobile */}
                <img 
                 src={mob}
                 alt="Imagem versão mobile" 
                 className="block min-[1279px]:hidden  h-auto object-contain w-[327px] md:w-[627px] mx-auto pt-10"
/>
   
        </div>
        
        




    </div>
  )
}

export default QuartaSection