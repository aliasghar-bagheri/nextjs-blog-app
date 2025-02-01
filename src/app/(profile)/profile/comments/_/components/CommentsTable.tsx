import DataTable from '@/components/ui/DataTable';
import { getAllComments } from '@/services/comment.service';
import setCookieOnReq from '@/utils/setCookieOnReq';
import { cookies } from 'next/headers';
import { allCommentsTableColumns } from './columns';
import Pagination from '@/components/ui/Pagination';
import { IComment } from '@/types';

export default async function CommentsTable({ queries }: { queries: string }) {
  const cookie = cookies();
  const options = setCookieOnReq(cookie);

  const { comments, totalPages } = await getAllComments(queries, options);

  const allComments = (comments as IComment[]).flatMap((comment) => [...comment.answers, comment]);

  return (
    <>
      <DataTable
        columns={allCommentsTableColumns}
        data={allComments}
      />
      <div className="w-full flex items-center justify-center">
        <Pagination
          totalPages={totalPages}
          limit={8}
        />
      </div>
    </>
  );
}
