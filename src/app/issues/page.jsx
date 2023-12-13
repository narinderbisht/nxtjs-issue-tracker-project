import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import prisma from '../../../prisma/client';
import IssuesTable from './__components/IssuesTable';
import CreateNewButton from '../components/ui/CreateNewButton';
import BreadcrumbLinks from '../components/ui/BreadcrumbLinks';
import Pagination from '../components/ui/Pagination';
import SearchBox from '../components/ui/SearchBox';

export default async function issuesList({ searchParams }) {
  const whereCondition = searchParams.query ? {
        
      title: {
        contains: searchParams.query.toString()
      }

  } : {};
  const totalIssues = await prisma.issue.count({where:whereCondition});
  const perPage = 2;
  
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
            <SearchBox/>
            <CreateNewButton href={'/issues/new'}>Add New Issue</CreateNewButton>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <IssuesTable perPage={perPage} currentPage={searchParams.page} query={searchParams.query} />
              <div className="mt-5 flex w-full justify-center">
                <Pagination totalIssues={totalIssues} perPage={perPage} />
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </main>
  )
}

