import { SkeletonPostList } from '@/components/ui/Skeleton';
import { Suspense } from 'react';
import ArticlesList from './ArticlesList';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function LatestArticlesSection() {
  return (
    <div className="w-full flex-col flex items-center py-10 gap-y-10">
      <div className="">
        <h2 className="font-bold text-2xl sm:text-4xl text-primary">جدید ترین مقالات</h2>
      </div>
      <div className="w-full">
        <Suspense fallback={<SkeletonPostList />}>
          <ArticlesList />
        </Suspense>
      </div>
      <Link href="/blogs">
        <Button variant="outline">مشاهده بیشتر</Button>
      </Link>
    </div>
  );
}
