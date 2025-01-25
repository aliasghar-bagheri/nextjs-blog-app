import DataTable from '@/components/ui/DataTable';
import { getAllComments } from '@/services/comment.service';
import setCookieOnReq from '@/utils/setCookieOnReq';
import { cookies } from 'next/headers';
import { allCommentsTableColumns } from './columns';

export default async function CommentsTable() {
  const cookie = cookies();
  const options = setCookieOnReq(cookie);

  const { comments } = await getAllComments(options);

  return (
    <>
      <DataTable
        columns={allCommentsTableColumns}
        data={comments}
      />
    </>
  );
}
