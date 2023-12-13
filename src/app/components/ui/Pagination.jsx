"use client"
import classNames from 'classnames';
import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation'

export default function Pagination({ totalIssues, perPage }) {
    const currentPath = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1; 
    const pages = Math.ceil(totalIssues / perPage);
    const pagesList = [];
    for (let page = 1; page <= pages; page++){
        pagesList.push(page);
    }
    const currentPageURL = (pageNumber) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${currentPath}?${params.toString()}`
    }
  return (
        <div className="join">
          {pagesList.map((page, index) =>
              <Link href={currentPageURL(page)} key={index}
                  className={classNames({
                    "join-item btn btn-sm": true
                  },{
                    'btn-active': currentPage === page
                  })}>{page}</Link>)
          }
        </div>
  )
}
