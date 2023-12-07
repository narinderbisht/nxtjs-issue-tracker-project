'use client'
import IssueForm from "../__components/issueForm";
import { Heading } from '@radix-ui/themes';
export default function newIssue() {

  return (
    <div className="max-w-2xl mx-auto">
      <Heading className="mb-2">Create Issue</Heading>
      <IssueForm/>
    </div>
  )
}
