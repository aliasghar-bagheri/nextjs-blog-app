import DataTable from '@/components/ui/DataTable';
import { getAllPosts } from '@/services/post.service';
import { allPostsTableColumns } from './columns';
import { cookies } from 'next/headers';
import setCookieOnReq from '@/utils/setCookieOnReq';
import Pagination from '@/components/ui/Pagination';

export default async function PostsTable({ queries }: { queries: string }) {
  const cookie = cookies();
  const options = setCookieOnReq(cookie);
  const { posts, totalPages } = await getAllPosts(queries, options);

  return (
    <>
      <DataTable
        columns={allPostsTableColumns}
        data={posts}
      />
      <div className="w-full flex items-center justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
