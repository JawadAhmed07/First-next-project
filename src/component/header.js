'use client'


import '../app/globals.css';

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
    </nav>
  )
}