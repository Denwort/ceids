import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='max-w-screen'>

      <section className='flex flex-wrap items-center h-fit justify-center m-16'>
        <div className='w-6/12 flex flex-wrap items-center justify-center'>
          <div className='text-center m-4'>
            <h1 className='font-bold text-6xl'>¿Quiénes somos?</h1>
            <p className='my-4'>Somos el círculo de investigación de software, nos reunimos para investigar software por amor al arte.</p>
            <Link href='/proyectos' className='inline-block bg-orange-400 rounded-full mx-auto'><p className='mx-4 my-1'>Proyectos realizados</p></Link>
          </div>
        </div>
        <div className='w-6/12 flex flex-wrap items-center justify-center'>
          <Image
            className='rounded-lg w-[100rem]'
            src='/software.jpeg'
            width={2000}
            height={2000}
            alt='software'
          />
        </div>
      </section>

      <section className='flex flex-wrap min-h-fit items-center justify-center m-16 gap-8'>
        <article className='h-80 w-[50rem] flex flex-wrap items-center justify-content bg-gray-100 rounded-lg'>
          <div className='w-2/6'>
            <div className='m-6'>
              <p className='text-center m-2 font-bold text-2xl'>Presidente</p>
              <Image className='rounded-lg w-96 h-52' 
                src={'/software.jpeg'} width={2000} height={2000} alt='presidente'>
              </Image>
            </div>
          </div>
          <div className='w-4/6 h-3/6'>
            <div className='m-6'>
              <p className='font-bold text-4xl'>Piero Rozas 🐀</p>
              <p className='text-2xl'>Info info</p>
              <p>redes sociales</p>
            </div>
          </div>
        </article>
        <article className='h-80 w-[50rem] flex flex-wrap items-center justify-content bg-gray-100 rounded-lg'>
          <div className='w-4/6 h-3/6'>
            <div className='m-6 text-right'>
              <p className='font-bold text-4xl'>David Mamani 🦆</p>
              <p className='text-2xl'>Info info</p>
              <p>redes sociales</p>
            </div>
          </div>
          <div className='w-2/6'>
            <div className='m-6'>
              <p className='text-center m-2 font-bold text-2xl'>Vicepresidente</p>
              <Image className='rounded-lg w-96 h-52' 
                src={'/software.jpeg'} width={2000} height={2000} alt='presidente'>
              </Image>
            </div>
          </div>
        </article>
        <article className='h-80 w-[50rem] flex flex-wrap items-center justify-content bg-gray-100 rounded-lg'>
          <div className='w-2/6'>
            <div className='m-6'>
              <p className='text-center m-2 font-bold text-2xl'>Profesor encargado</p>
              <Image className='rounded-lg w-96 h-52' 
                src={'/software.jpeg'} width={2000} height={2000} alt='presidente'>
              </Image>
            </div>
          </div>
          <div className='w-4/6 h-3/6'>
            <div className='m-6'>
              <p className='font-bold text-4xl'>Hernan Quintana 👻</p>
              <p className='text-2xl'>Info info</p>
              <p>redes sociales</p>
            </div>
          </div>
        </article>
      </section>

      <section className='flex flex-wrap items-center justify-center h-fit m-16'>
        <p className='my-10 font-bold text-6xl w-full text-center'>Nuestros proyectos</p>
        <div className='flex flex-wrap justify-center mx-auto gap-6'>
          <Image className='w-[60rem] rounded-lg'
            src={'/software.jpeg'} width={2000} height={2000} alt='proyecto1'>
          </Image>
          <Image className='w-[60rem] rounded-lg' 
            src={'/software.jpeg'} width={2000} height={2000} alt='proyecto2'>
          </Image>
        </div>
      </section>

      <section className='flex flex-wrap items-center justify-center h-fit m-16'>
        <p className='my-10 font-bold text-6xl w-full text-center'>¡Únete a nosotros!</p>
        <p className='text-4xl w-full text-center'>Mientras más seamos, más avanzamos :D</p>
        <div className='flex flex-wrap p-10 items-center justify-center w-full'>
          <Image className='w-[30rem] mb-10'
            src={'/oso.png'} width={2000} height={2000} alt='oso'
          ></Image>
          <Link className='m-20 font-bold text-4xl bg-orange-400 rounded-full px-10 py-6 text-center' href={'/'}>Únete aquí</Link>
        </div>
      </section>

    </main>
  )
}