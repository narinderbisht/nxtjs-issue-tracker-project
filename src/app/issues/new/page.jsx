'use client'
import { TextField, Flex, Button } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
export default function newIssue() {
  return (
    <div className="max-w-2xl space-y-3">
    
      <TextField.Root>
        <TextField.Input placeholder='Issue Title' />
      </TextField.Root>
      <SimpleMDE placeholder="Issue Description" />
      
      <Button>Submit Isssue</Button>
          
    </div>
  )
}
