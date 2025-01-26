import PostSlider from '@/components/ui/PostSlider';
import { getAllPosts } from '@/services/post.service';
import setCookieOnReq from '@/utils/setCookieOnReq';
import { cookies } from 'next/headers';
import queryString from 'query-string';

export default async function Hero() {
  const queries = queryString.stringify({ limit: 4, sort: 'latest' });
  const cookie = cookies();
  const options = setCookieOnReq(cookie);
  const { posts } = await getAllPosts(queries, options);

  return <PostSlider posts={posts} />;
}
