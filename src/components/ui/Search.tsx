'use client';

import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';
import Input from './Input';
import ButtonIcon from './ButtonIcon';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Search = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    const pathname = usePathname();
    const searchParam = useSearchParams();
    const router = useRouter();

    const handleSearch = (event: ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();

      const searchElement = event.target.search as HTMLInputElement;
      const searchTerm = searchElement.value;

      const newParams = new URLSearchParams(searchParam.toString());

      newParams.set('page', '1');

      if (searchTerm) {
        newParams.set('search', searchTerm);
      } else {
        newParams.delete('search');
      }

      router.push(`${pathname}?${newParams.toString()}`);
    };

    return (
      <form
        onSubmit={handleSearch}
        className={clsx(
          'bg-secondary-200 rounded flex pl-1.5 items-center justify-between',
          className
        )}
      >
        <Input
          type="text"
          className="py-3 w-full flex-1 focus-visible:ring-0"
          name="search"
          placeholder="جستجو"
          defaultValue={searchParam.get('search') || ''}
          autoComplete="off"
          ref={ref}
          {...props}
        />
        <ButtonIcon
          type="submit"
          variant="primary"
        >
          <MagnifyingGlassIcon
            width={25}
            height={25}
          />
        </ButtonIcon>
      </form>
    );
  }
);

Search.displayName = 'Search';

export default Search;
