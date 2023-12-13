import React from 'react'
import Link from 'next/link';

export default function CreateNewButton({children, href}) {
  return (
    <Link href={href} className="btn btn-primary btn-md">{children}</Link>
  )
}
