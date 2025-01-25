import { Skeleton } from '@/components/ui/Skeleton';
import { Suspense } from 'react';
import CommentsTable from './_/components/CommentsTable';

function CommentsPage() {
  return (
    <div className="w-full space-y-10">
      <h2 className="text-secondary-900 font-medium text-xl text-nowrap">لیست پست ها</h2>

      <div className="xl:container space-y-3">
        <Suspense
          fallback={
            <Skeleton
              width="100%"
              height={550}
              className="bg-secondary-200 rounded"
            />
          }
        >
          <CommentsTable />
        </Suspense>
      </div>
    </div>
  );
}

export default CommentsPage;
