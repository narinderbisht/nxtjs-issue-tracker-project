import React from 'react'
import { Text } from '@radix-ui/themes';
import { Children } from 'react';

export default function ErrorMessage({ children }) {
    if (!children) return null;
    return (
    <Text color="red" as='div'>{ children }</Text>
  )
}
