import background from '../assets/bg.jpg'
import thumb from '../assets/thumb.svg'
import barrafist from '../assets/barrabluefist.svg'
import barrasecond from '../assets/barrabluesecond.svg'
function Home() {
  return (
    <div
      className="md:min-h-screen md:max-w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >

    <div className='container mx-auto flex flex-col'>
        <img src={thumb} className='mx-auto pt-28 w-[328px] md:w-[864px]' alt="Video apresentação" />
        <div className=' container mx-auto md:w-[664px] mt-20'>
          <div className='flex flex-col items-center'>
              <img src={barrafist}
               alt="barra decorativa h1"
               className='w-[303.42px] md:w-[618px]' />
              <h1 className='md:text-[40px] font-medium font-inter  text-[20px]  text-white text-center mx-auto relative -top-7 md:-top-14'>
                Lorem ipsum dolor sit amet,               
              </h1>

              <img src={barrasecond}
               alt=""
               className='w-[326px] md:w-[664px]' />

              <h1 className='md:text-[40px] font-medium font-inter  text-[20px]  text-white text-center mx-auto relative -top-7 md:-top-14'>  
                  consect adipisicing elit sed do.                 
              </h1>                           
          </div>     
     </div> 

    </div>
  
    <div className='container mx-auto px-8 self-end pt-16 md:pt-16'> 
      <p className='w-[327px] font-inter font-normal text-[17px] text-white '>Lorem ipsum dolor sit amet, consectetur adipisicing elit  <span className='font-inter font-extrabold text-[17px] text-yellow-300'>sed do eiusmod </span></p> 
    </div>
    </div>
   
  )
}

export default Home

