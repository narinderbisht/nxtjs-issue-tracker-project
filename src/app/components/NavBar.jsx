import Link from 'next/link'
import React from 'react'
import {FaBug} from 'react-icons/fa'
export default function NavBar() {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/"><FaBug/></Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {
            links.map((link, index) => 
              <li key={index}>
                <Link className='link link-hover' href={link.href}>
                  {link.label}
                </Link>
              </li>
            )
          }
          
        </ul>
      </div>
    </nav>
  )
}
