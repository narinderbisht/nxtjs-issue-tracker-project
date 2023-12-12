import React from 'react'
import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import prisma from '../../../prisma/client';
import IssuesTable from './__components/issuesTable';
import CreateNewButton from '../components/ui/CreateNewButton';
import BreadcrumbLinks from '../components/ui/BreadcrumbLinks';

export default async function issuesList() {
  const issues = await prisma.issue.findMany({
  orderBy: {
    id: 'desc'
  }
  });
  const breadcrumbs = [
    { 'href': '/issues', 'label': 'Issues' }
  ]


  return (
    <main>
        <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
          <div className="w-full mb-1">
            <div className="mb-4">
              <BreadcrumbLinks links={breadcrumbs}/>
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All Issues</h1>
            </div>
            <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
              <div className="flex items-center mb-4 sm:mb-0">

              </div>
              <CreateNewButton href={'/issues/new'}>Add New Issue</CreateNewButton>
            </div>
          </div>
        </div>
        
        <IssuesTable issues={issues} />
        
    </main>
  )
}

