"use client"
import React, { useState } from 'react'
export default function CallOutMessage() {
    const [message, setMessage] = useState('');
  return (
    <div>{message &&
        <Callout.Root className="mt-2 mb-2">
            <Callout.Text>
                {message}
            </Callout.Text>
        </Callout.Root>
    }</div>
  )
}
