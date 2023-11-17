import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='max-w-screen'>
      <section className='flex flex-wrap allign-center h-screen justify-center'>
        <div className='w-6/12 flex flex-wrap items-center justify-center'>
          <div className='flex flex-wrap justify-center gap-4'>
            <h2 className='font-bold text-4xl'>¿Quienes somos?</h2>
            <p className='text-center'>Somos el circulo de investigacion de software, nos solemos reunir para investigar software por amor al arte</p>
            <Link className='bg-orange-400 rounded-full px-4' href={'/proyectos'}>Proyectos realizados</Link>
          </div> 
        </div>
        <div className='flex h-screen w-6/12 flex flex-wrap items-center justify-center'>
          <Image className='rounded-lg w-5/6' 
            src={'/software.jpeg'} width={2000} height={2000} alt='software'>
          </Image>
        </div>
      </section>
      <section></section>
    </main>
  )
}
