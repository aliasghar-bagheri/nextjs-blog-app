import { Suspense } from 'react';
import DashboardCardList from './_/components/card/DashboardCardList';
import { Skeleton, SkeletonDashboardCards } from '@/components/ui/Skeleton';
import LatestPosts from './_/components/LatestPosts';

export default function UserProfilePage() {
  return (
    <div className="w-full space-y-10">
      <div className="w-full space-y-6">
        <h2 className="text-secondary-900 font-medium text-xl">داشبورد</h2>
        <div className="xl:container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center gap-5">
          <Suspense fallback={<SkeletonDashboardCards />}>
            <DashboardCardList />
          </Suspense>
        </div>
      </div>
      <div className="w-full space-y-6">
        <h3 className="text-secondary-900 text-lg">آخرین پست ها</h3>
        <div className="xl:container">
          <Suspense
            fallback={
              <Skeleton
                width="100%"
                height={400}
                className="bg-secondary-200 rounded"
              />
            }
          >
            <LatestPosts />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
