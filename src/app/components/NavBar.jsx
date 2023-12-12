"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from 'react-icons/fa'
import TopIconBar from './TopIconBar';
export default function NavBar() {
  
  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">

        <div className="flex items-center justify-start">
            <Link href="/" className="flex ml-2 md:mr-24">
              <FaBug className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white mr-2"/>
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Bug Tracking</span>
            </Link>
        </div>
        <TopIconBar/>
        </div>
      </div>
      
    </nav>
  )
}
