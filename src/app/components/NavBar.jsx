"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from 'react-icons/fa'
import classNames from 'classnames'
export default function NavBar() {
  const currentPath = usePathname();
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
                <Link className={classNames({
                  'link link-hover': true,
                },{
                  'link-success' : currentPath === link.href
                }) } href={link.href}>
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
