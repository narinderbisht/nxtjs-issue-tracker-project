import React from 'react'
import IssueForm from '../__components/issueForm'
import dynamic from 'next/dynamic';
import prisma from '../../../../prisma/client';
import { Heading } from '@radix-ui/themes';

export default async function EditIssuePage({params} ) {
    //console.log(params.id);
    const issue = await prisma.issue.findUnique({
        where: {
            id: parseInt(params.id)
        }
    })
  return (
      <div className="max-w-2xl mx-auto">
          <Heading className="mb-2">Edit Issue</Heading>
          <IssueForm issue={issue}/>
    </div>
  )
}
