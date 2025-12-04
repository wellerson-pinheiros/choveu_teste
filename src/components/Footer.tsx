import divider from '../assets/Divider.svg'

function Footer() {
  return (
    <div className='w-full mt-10'>
      <div className='container mx-auto flex flex-col justify-center items-center ali'>
           <img src={divider} alt="barra de divisão" className='bg-[#D3DCE5]' />
           <div className='flex p-8 justify-between gap-8'>
              <p className='text-[#161616]'>
                 Copyright© 2025 Lorem ipsum dolor sit amet consectetur. Todos os Direitos Reservados.
              </p>

              <p className='text-[#161616]'>
                Política de Privacidade
              </p>
              
              <p className='text-[#161616]'>
                Termos de Uso
              </p>
           </div>
      </div>
       

        dsd
    </div>
  )
}

export default Footer