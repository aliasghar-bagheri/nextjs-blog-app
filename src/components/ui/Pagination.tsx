'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import ButtonIcon from './ButtonIcon';
import { generatePaginationPage } from '@/utils/generatePaginationPage';
import clsx from 'clsx';
import { ReactNode } from 'react';

type TPaginationPosition = 'first' | 'last' | 'middle' | 'single';

interface PaginationNumberProps {
  page: ReactNode;
  href: string;
  isActive: boolean;
  position?: TPaginationPosition;
}

interface IPaginationArrowProps {
  direction: 'right' | 'left';
  href: string;
  isDisabled: boolean;
  isHidden?: boolean;
}

export default function Pagination({ totalPages, limit }: { totalPages: number; limit?: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const itemPerPage = limit || Number(searchParams.get('limit')) || 10;

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    params.set('limit', itemPerPage.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePaginationPage(currentPage, totalPages);

  return (
    <div className="inline-flex py-5">
      <PaginationArrow
        direction="left"
        href={createPageUrl(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
        isHidden={totalPages <= 1}
      />
      <div
        className="flex -space-x-px"
        dir="ltr"
      >
        {allPages.map((page, index) => {
          let position: TPaginationPosition = 'first';
          if (index === 0) position = 'first';
          if (index === allPages.length - 1) position = 'last';
          if (allPages.length === 1) position = 'single';
          if (page === '...') position = 'middle';
          return (
            <PaginationNumber
              key={`${page}-${index}`}
              href={createPageUrl(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>
      <PaginationArrow
        direction="right"
        href={createPageUrl(currentPage - 1)}
        isDisabled={currentPage <= 1}
        isHidden={totalPages <= 1}
      />
    </div>
  );
}

function PaginationNumber({ page, href, isActive, position }: PaginationNumberProps) {
  const className = clsx('px-4 mx-1.5', {
    'bg-primary text-secondary-0': isActive,
  });
  return isActive || position === 'middle' ? (
    <ButtonIcon
      className={className}
      variant="secondary"
      disabled
    >
      {page}
    </ButtonIcon>
  ) : (
    <Link href={href}>
      <ButtonIcon
        className={className}
        variant="secondary"
      >
        {page}
      </ButtonIcon>
    </Link>
  );
}

function PaginationArrow({ direction, href, isDisabled, isHidden }: IPaginationArrowProps) {
  const className = clsx({
    'ml-2 md:ml-4': direction === 'left',
    'mr-2 md:mr-4': direction === 'right',
  });

  const Icon = direction === 'right' ? <ArrowLeftIcon /> : <ArrowRightIcon />;

  return !isHidden ? (
    isDisabled ? (
      <ButtonIcon
        className={className}
        variant="secondary"
        disabled
      >
        {Icon}
      </ButtonIcon>
    ) : (
      <Link href={href}>
        <ButtonIcon
          className={className}
          variant="secondary"
        >
          {Icon}
        </ButtonIcon>
      </Link>
    )
  ) : null;
}
