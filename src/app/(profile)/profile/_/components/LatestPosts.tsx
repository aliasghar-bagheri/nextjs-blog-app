import DataTable from '@/components/ui/DataTable';
import { getAllPosts } from '@/services/post.service';
import queryString from 'query-string';
import { latestPostsTableColumns } from './columns';

export default async function LatestPosts() {
  const query = queryString.stringify({ limit: 10 });
  const { posts } = await getAllPosts(query);

  return (
    <DataTable
      columns={latestPostsTableColumns}
      data={posts}
    />
  );
}
