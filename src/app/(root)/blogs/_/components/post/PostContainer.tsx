import { getAllPosts } from '@/services/post.service';
import { IPost } from '@/types';
import PostList from './PostList';
import queryString from 'query-string';
import { toPersianNumber } from '@/utils/numberFormatter';

export default async function PostContainer({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const queries = queryString.stringify(searchParams);

  const { posts } = (await getAllPosts(queries)) as {
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
      <PostList posts={posts} />
    </div>
  );
}
