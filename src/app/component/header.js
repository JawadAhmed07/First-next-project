'use client'


// import '../globals.css';

import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Header() {
  const pathname = usePathname()
 
  return (
    <nav className='bg-purple-600  text-center justify-center align-center items-center flex py-2'>
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
        className={`link px-3 ${pathname === '/aboutus' ? 'active underline' : ''}`}
        href="/aboutus"
      >
        About
      </Link>
      <Link
        className={`link px-3 ${pathname === '/quotes' ? 'active underline' : ''}`}
        href="/quotes"
      >
        quotes
      </Link>
      <Link
        className={`link px-3 ${pathname === '/login' ? 'active underline' : ''}`}
        href="/login"
      >
        Login
      </Link>
      <Link
        className={`link px-3 ${pathname === '/forgot-password' ? 'active underline' : ''}`}
        href="/forgot-password"
      >
        forgot
      </Link>
      <Link
        className={`link px-3 ${pathname === '/register' ? 'active underline' : ''}`}
        href="/register"
      >
        register
      </Link>
    </nav>
  )
}