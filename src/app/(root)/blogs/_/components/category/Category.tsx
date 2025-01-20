import { Skeleton } from '@/components/ui/Skeleton';
import { Squares2X2Icon } from '@heroicons/react/24/outline';
import React, { Suspense } from 'react';
import CategoryList from './CategoryList';

export default function Category() {
  return (
    <div className="space-y-7 p-5 bg-secondary-100 rounded shadow">
      <h6 className="flex items-center gap-x-2 flex-nowrap text-secondary-900">
        <Squares2X2Icon
          width={20}
          height={20}
          className="text-primary"
        />
        دسته بندی ها
      </h6>
      <Suspense
        fallback={
          <Skeleton
            count={7}
            height={25}
            className="flex gap-2 flex-wrap"
          />
        }
      >
        <CategoryList />
      </Suspense>
    </div>
  );
}
