import background from '../assets/bg.jpg'
import thumb from '../assets/thumb.svg'

function Home() {
  return (
    <div
      className="min-h-screen max-w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >

    <div className='w-full '>
        <img src={thumb} className='mx-auto pt-28 ' alt="Video apresentação" />
        <div className='w-[664px] mx-auto'>
      <h1 className='text-[40px] font-medium font-inter pt-12 flex justify-center'>
        Lorem ipsum dolor sit amet,<br /> consect adipisicing elit sed do.
      </h1>
     </div> 
    </div>
    
    </div>
  )
}

export default Home

