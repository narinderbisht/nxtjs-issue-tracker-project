'use client'
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaGreaterThan } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function BreadcrumbLinks({ links }) {
  const currentPath = usePathname();
  return (
    <nav className="flex mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
          <li className="inline-flex items-center">
            <Link href={'/'} className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
              <FaHome className="w-5 h-5 mr-2.5"/>
              Home
            </Link>
          </li>
          {links.map((link, index) => 
            <li key={index}>
              <div className="flex items-center">
                <MdKeyboardArrowRight className="w-6 h-6 text-gray-400"/>
                <Link href={link.href} className={classNames({
                  "ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white": true,
                  'text-gray-400': currentPath == link.href
                })}>{link.label}</Link>
              </div>
            </li>
          )}
        </ol>
    </nav>
  )
}
