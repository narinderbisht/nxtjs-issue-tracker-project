'use client'
import IssueForm from "../__components/issueForm";
import { Heading } from '@radix-ui/themes';
import BreadcrumbLinks from "../../components/ui/BreadcrumbLinks";
export default function newIssue() {
  const breadcrumbs = [
    { 'href': '/issues', 'label': 'Issues' },
    { 'href': '/issues/new', 'label': 'Create Issue' }
  ];
  return (
    <main>
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full mb-1">
            <div className="mb-4">
              <BreadcrumbLinks links={breadcrumbs}/>
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              Add New Issue</h1>
            </div>
            
          </div>
      </div>
      <IssueForm/>
    </main>
    
  )
}
