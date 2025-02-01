import { Skeleton } from '@/components/ui/Skeleton';
import { Suspense } from 'react';
import CommentsTable from './_/components/CommentsTable';
import { Metadata } from 'next';
import queryString from 'query-string';

export const metadata: Metadata = {
  title: 'لیست نظرات',
};

async function CommentsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const params = await searchParams;
  const queries = queryString.stringify({ limit: 8, ...params });

  return (
    <div className="w-full space-y-10">
      <h2 className="text-secondary-900 font-medium text-xl text-nowrap">لیست نظرات</h2>

      <div className="xl:container space-y-3">
        <Suspense
          key={queries}
          fallback={
            <Skeleton
              width="100%"
              height={550}
              className="bg-secondary-200 rounded"
            />
          }
        >
          <CommentsTable queries={queries} />
        </Suspense>
      </div>
    </div>
  );
}

export default CommentsPage;
