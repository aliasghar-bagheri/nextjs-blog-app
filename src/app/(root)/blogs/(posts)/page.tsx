import { Suspense } from 'react';
import { SkeletonPostList } from '@/components/ui/Skeleton';
import { Metadata } from 'next';
import PostContainer from '@/app/(root)/blogs/_/components/post/PostContainer';
import queryString from 'query-string';

export const metadata: Metadata = {
  title: 'بلاگ ها',
};

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const params = await searchParams;
  const query = queryString.stringify(params);

  return (
    <Suspense
      fallback={<SkeletonPostList />}
      key={query}
    >
      <PostContainer searchParams={params} />
    </Suspense>
  );
}
