import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import prisma from '../../../prisma/client';
import IssuesTable from './__components/issuesTable';

export default async function issuesList() {
  const issues = await prisma.issue.findMany({
  orderBy: {
    id: 'desc'
  }
});

//console.log(issues);
  return (
    <div className="max-w-2xl mx-auto">
      <Button><Link href={'/issues/new'}>Add New Issue</Link></Button>
      <IssuesTable issues={issues} />
    </div>
  )
}

