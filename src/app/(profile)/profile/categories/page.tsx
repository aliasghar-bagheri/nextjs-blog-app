import { Skeleton } from '@/components/ui/Skeleton';
import queryString from 'query-string';
import { Suspense } from 'react';
import AddCategory from './_/components/AddCategory';
import CategoriesTable from './_/components/CategoriesTable';

export default async function CategoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const params = await searchParams;
  const queries = queryString.stringify({ limit: 8, ...params });

  return (
    <div className="w-full space-y-10">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h2 className="text-secondary-900 font-medium text-xl text-nowrap">لیست دسته بندی ها</h2>
        <AddCategory />
      </div>
      <div className="xl:container space-y-3">
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
          <CategoriesTable queries={queries} />
        </Suspense>
      </div>
    </div>
  );
}
