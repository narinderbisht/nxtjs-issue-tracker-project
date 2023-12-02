import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
export default function issues() {
  return (
    <div>
      <Button><Link href={'/issues/new'}>Add New Issue</Link></Button>
    </div>
  )
}

