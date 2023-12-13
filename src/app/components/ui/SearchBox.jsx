'use client'
import React from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
export default function SearchBox() {
    const currentPath = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter(); 


    const handleSearch = useDebouncedCallback((e) => {
        let term = e.target.value;
        console.log(`Searching... ${term}`);
        const params = new URLSearchParams(searchParams);
        params.set('page', 1);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${currentPath}?${params.toString()}`);
    }, 300);
  return (
      <div className="flex items-center mb-4 sm:mb-0">
          <form className="sm:pr-3" method="GET">
              <label for="search" class="sr-only">Search</label>
              <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                  <input type="text" name="search"
                      placeholder="Type to search"
                      className="input input-bordered input-md w-full max-w-xs"
                      onChange={handleSearch}
                      defaultValue={searchParams.get('query')?.toString()}
                  />
              </div>
          </form>
    </div>
  )
}
