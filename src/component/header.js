'use client'


 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Header() {
  const pathname = usePathname()
 
  return (
    <nav className='bg-purple-300  text-center justify-center align-center items-center flex py-2'>
      <Link className={`link px-3 ${pathname === '/' ? 'active underline' : ''} `} href="/">
        Home
      </Link>
      <Link className={`link px-3 ${pathname === '/blogs' ? 'active underline' : ''}`} href="/blogs">
        Blogs
      </Link>
      <Link className={`link px-3 ${pathname === '/dashboard' ? 'active underline' : ''}`} href="/dashboard">
        dashboard
      </Link>
      <Link className={`link px-3 ${pathname === '/Contactus' ? 'active underline' : ''}`} href="/contactus">
        contactus
      </Link>
 
      <Link
        className={`link px-3 ${pathname === '/about' ? 'active underline' : ''}`}
        href="/about"
      >
        About
      </Link>
    </nav>
  )
}