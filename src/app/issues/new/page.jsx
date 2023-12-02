'use client'
import IssueForm from "../__components/issueForm";
import { Heading } from '@radix-ui/themes';
export default function newIssue() {

  return (
    <div>
      <Heading className="mb-2">Create Issue</Heading>
      <IssueForm/>
    </div>
  )
}
