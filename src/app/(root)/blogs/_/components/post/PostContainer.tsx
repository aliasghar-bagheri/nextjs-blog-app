import { getAllPosts } from '@/services/post.service';
import { IPost } from '@/types';
import PostList from './PostList';
import queryString from 'query-string';
import { toPersianNumber } from '@/utils/numberFormatter';
import { cookies } from 'next/headers';
import setCookieOnReq from '@/utils/setCookieOnReq';
import Pagination from '@/components/ui/Pagination';

export default async function PostContainer({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const limit = 12;
  const queries = queryString.stringify({ limit, ...searchParams });
  const cookie = cookies();
  const options = setCookieOnReq(cookie);
  const { posts, totalPages } = (await getAllPosts(queries, options)) as {
    posts: IPost[];
    totalPages: number;
  };

  return (
    <div className="space-y-4">
      {searchParams?.search?.length > 0 && (
        <p>
          <b>{toPersianNumber(posts.length)}</b> نتیجه بر اساس جستجو: <b>{searchParams.search}</b>
        </p>
      )}
      <PostList
        posts={posts}
        className="grid justify-center grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5"
      />
      {totalPages > 1 && (
        <div className="w-full flex justify-center">
          <Pagination
            totalPages={totalPages}
            limit={limit}
          />
        </div>
      )}
    </div>
  );
}
