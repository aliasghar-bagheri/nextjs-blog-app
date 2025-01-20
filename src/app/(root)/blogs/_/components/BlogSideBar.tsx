import Filter from '@/components/ui/Filter';
import { BarsArrowDownIcon } from '@heroicons/react/24/outline';
import Category from './category/Category';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/Skeleton';

export default function BlogSideBar() {
  return (
    <aside className="w-full flex flex-col sm:flex-row-reverse sm:items-stretch lg:flex-col gap-5 lg:w-72 lg:sticky lg:top-3">
      <Category />
      <div className="space-y-7 p-5 bg-secondary-100 flex-1 lg:flex-none rounded shadow">
        <h6 className="flex items-center gap-x-2 flex-nowrap text-secondary-900">
          <BarsArrowDownIcon
            width={20}
            height={20}
            className="text-primary"
          />
          فیلتر ها
        </h6>
        <Suspense
          fallback={
            <Skeleton
              width="auto"
              height={250}
            />
          }
        >
          <Filter />
        </Suspense>
      </div>
    </aside>
  );
}
