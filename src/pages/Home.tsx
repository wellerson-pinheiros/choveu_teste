import background from '../assets/bg.jpg'
import thumb from '../assets/thumb.svg'

function Home() {
  return (
    <div
      className="min-h-screen max-w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >

    <div className='container mx-auto flex flex-col'>
        <img src={thumb} className='mx-auto pt-28 ' alt="Video apresentação" />
        <div className=' container mx-auto w-[664px] '>
      <h1 className='text-[40px] font-medium font-inter pt-12 flex justify-center text-white'>
        Lorem ipsum dolor sit amet,<br /> consect adipisicing elit sed do.
      </h1>
      
     </div> 

    </div>
  
    <div className='container mx-auto px-8 self-end md:pt-16'> 
      <p className='w-[327px] font-inter font-normal text-[17px] text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit  <span className='font-inter font-extrabold text-[17px] text-yellow-300'>sed do eiusmod </span></p> 
    </div>
    </div>
   
  )
}

export default Home

