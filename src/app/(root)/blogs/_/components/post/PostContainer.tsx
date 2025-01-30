import { getAllPosts } from '@/services/post.service';
import { IPost } from '@/types';
import PostList from './PostList';
import queryString from 'query-string';
import { toPersianNumber } from '@/utils/numberFormatter';
import { cookies } from 'next/headers';
import setCookieOnReq from '@/utils/setCookieOnReq';

export default async function PostContainer({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const queries = queryString.stringify(searchParams);
  const cookie = cookies();
  const options = setCookieOnReq(cookie);
  const { posts } = (await getAllPosts(queries, options)) as {
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
    </div>
  );
}
