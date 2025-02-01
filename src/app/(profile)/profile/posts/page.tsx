import Button from '@/components/ui/Button';
import Search from '@/components/ui/Search';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import PostsTable from './_/components/PostsTable';
import { Skeleton } from '@/components/ui/Skeleton';
import queryString from 'query-string';

export const metadata: Metadata = {
  title: 'لیست پست ها',
};

export default async function AllPostsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const params = await searchParams;
  const queries = queryString.stringify({ limit: 8, ...params });

  return (
    <div className="w-full space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h2 className="text-secondary-900 font-medium text-xl text-nowrap">لیست پست ها</h2>
        <Link href="/profile/posts/create">
          <Button
            variant="primary"
            className="flex items-center gap-x-2"
          >
            ایجاد پست
            <PlusCircleIcon
              width={20}
              height={20}
            />
          </Button>
        </Link>
      </div>
      <div className="xl:container space-y-3">
        <Search className="max-w-96 w-full" />
        <Suspense
          fallback={
            <Skeleton
              width="100%"
              height={550}
              className="bg-secondary-200 rounded"
            />
          }
          key={queries}
        >
          <PostsTable queries={queries} />
        </Suspense>
      </div>
    </div>
  );
}
