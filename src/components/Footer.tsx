import divider from '../assets/Divider.svg'

function Footer() {
  return (
    <div className='w-full mt-10'>
      <div className='container mx-auto flex flex-col  md:justify-between justify-center items-center'>
           <img src={divider} alt="barra de divisão" className='bg-[#D3DCE5]' />
           <div className='flex flex-col  md:flex-row p-8 md:justify-between gap-8'>
              <p className='text-[#161616]'>
                 Copyright© 2025 Lorem ipsum dolor sit amet consectetur. Todos os Direitos Reservados.
              </p>
              <div className='flex gap-1'>
                 <p className='text-[#161616]'>
                Política de Privacidade
                </p>            
                <p className='text-[#161616]'>
                Termos de Uso
                </p>
              </div>
             
           </div>
      </div>    
    </div>
  )
}

export default Footer