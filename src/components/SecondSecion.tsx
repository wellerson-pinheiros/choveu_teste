import img from '../assets/img.svg'

function SecondSecion() {
  return (
    <div className='bg-white w-full lg:flex-row justify-center items-center flex-col flex' >
          
          <div className='w-[327px] font-inter font-normal text-[20px] leading-[30px] p-6'>
            <p className=''>
              Lorem ipsum dolor <span className='font-inter font-extrabold text-[17px] leading-[150%]'>sit amet, </span>
              consectetur <span className='font-inter font-extrabold text-[17px] leading-[150%]'>adipisicing elit,</span><br className='hidden md:block'/>
              sed do eiusmod <span className='font-inter font-extrabold text-[17px] leading-[150%]'>tempor,</span><br />
              incididunt ut labore <span className='font-inter font-extrabold text-[17px] leading-[150%] mb-6'>et dolore,</span><br /> 
            </p>
            <p className='pt-4'>
                quis <span className='font-inter font-extrabold text-[17px] leading-[150%]'>nostrud exercitation</span> ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img src={img}
           alt="imagem de duas pessoas sorrindo"
           className='lg:relative lg:-top-30 md:w-[597px] w-[326.46px] mb-6'/>
          
      </div>
  )
}

export default SecondSecion
