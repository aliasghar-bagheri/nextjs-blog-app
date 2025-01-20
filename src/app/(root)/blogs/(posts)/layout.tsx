import { Square3Stack3DIcon } from '@heroicons/react/24/outline';
import { ReactNode, Suspense } from 'react';
import BlogSideBar from '../_/components/BlogSideBar';
import Search from '@/components/ui/Search';
import { Skeleton } from '@/components/ui/Skeleton';

export default function BlogsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="py-20 space-y-4">
      <div className="flex flex-col-reverse lg:flex-row items-start justify-start gap-5">
        <Suspense
          fallback={
            <Skeleton
              width={250}
              height={48}
            />
          }
        >
          <Search className="lg:w-72 w-full" />
        </Suspense>
        <h2 className="font-bold text-3xl text-primary flex items-center gap-x-3">
          <Square3Stack3DIcon
            width={32}
            height={32}
          />
          مقالات
        </h2>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start gap-5">
        <BlogSideBar />
        <section className="flex-1 w-full">{children}</section>
      </div>
    </div>
  );
}
