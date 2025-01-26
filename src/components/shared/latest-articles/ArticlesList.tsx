import PostList from '@/app/(root)/blogs/_/components/post/PostList';
import { getAllPosts } from '@/services/post.service';
import setCookieOnReq from '@/utils/setCookieOnReq';
import { cookies } from 'next/headers';
import queryString from 'query-string';

export default async function ArticlesList() {
  const queries = queryString.stringify({ limit: 4, page: 2, sort: 'latest' });
  const cookie = cookies();
  const options = setCookieOnReq(cookie);
  const { posts } = await getAllPosts(queries, options);

  return (
    <PostList
      posts={posts}
      className="grid justify-center mx-auto gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4"
    />
  );
}
