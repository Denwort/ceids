import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CEIDS',
  description: 'Pagina web del CEIDS Ulima',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='bg-gray-300 flex flex-wrap min-h-16 max-w-screen items-center justify-between mx-auto p-2 px-4 gap-4'>
          <Image className='flex items-center space-x-3 rtl:space-x-reverse'
            src='/logo.png' width={100} height={100} alt='logo'>
          </Image>
          <nav className=''>
            <ul className='flex flex-wrap gap-x-6 '>
              <li><Link href={'/'}>Inicio</Link></li>
              <li><Link href={'/quienessomos'}>Quienes somos</Link></li>
              <li><Link href={'/integrantes'}>Integrantes</Link></li>
              <li><Link href={'/proyectos'}>Proyectos</Link></li>
              <li><Link href={'/discord'}>Discord</Link></li>
              <li><Link href={'/test'}>Test</Link></li>
            </ul>
          </nav>
          <Link className='bg-orange-400 rounded-full'
            href={'/login'}><p className='mx-4'>Login</p>
          </Link>
        </header>
        {children}
        <footer className='bg-black flex flex-wrap h-12 max-w-screen items-center justify-center mx-auto '>
          <p className='text-white flex items-center'>2024 CEIDS Ulima. All rigths reserved</p>
        </footer>
      </body>
    </html>
  )
}
