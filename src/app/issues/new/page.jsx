'use client'
import { TextField, TextArea,Flex, Button } from '@radix-ui/themes'
export default function newIssue() {
  return (
    <div className="max-w-2xl space-y-3">
    
      <TextField.Root>
        <TextField.Input placeholder='Issue Title' />
      </TextField.Root>
      <TextArea placeholder="Issue Description" />
      <Button>Submit Isssue</Button>
          
    </div>
  )
}
